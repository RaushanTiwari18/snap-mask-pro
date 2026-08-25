import type {
  BackgroundRemovalError,
  BackgroundRemovalResult,
  WebhookResponsePayload,
} from "@/types/backgroundRemoval";

/**
 * Webhook configuration.
 *
 * Set VITE_N8N_WEBHOOK_URL to the n8n Production Webhook URL.
 * Nothing else in the app needs to change.
 */
export const WEBHOOK_URL: string = (import.meta.env.VITE_N8N_WEBHOOK_URL ?? "").trim();

/** Explicitly enable the development fallback with VITE_ENABLE_DEMO_MODE=true. */
const DEMO_MODE_ENABLED = String(import.meta.env.VITE_ENABLE_DEMO_MODE ?? "") === "true";

/** Request timeout in milliseconds. */
const REQUEST_TIMEOUT_MS = 60_000;

/**
 * Transport format. Switch to "base64" if the n8n workflow expects a JSON body
 * with a base64 payload instead of multipart FormData.
 */
const TRANSPORT: "formdata" | "base64" = "formdata";

export function isWebhookConfigured(): boolean {
  return WEBHOOK_URL.length > 0;
}

export function isDemoModeActive(): boolean {
  return DEMO_MODE_ENABLED || !isWebhookConfigured();
}

function logTechnical(context: string, detail: unknown): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.error(`[snapcut] ${context}`, detail);
  }
}

function fail(message: string, detail?: string): BackgroundRemovalError {
  if (detail) logTechnical(message, detail);
  return { message, detail };
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read the selected file."));
    reader.readAsDataURL(file);
  });
}

/** Parses the many shapes an n8n workflow might return. */
export function parseWebhookResponse(payload: WebhookResponsePayload): BackgroundRemovalResult {
  if (payload.success === false) {
    throw fail(
      payload.message || payload.error || "Unable to remove the background. Please try again.",
    );
  }

  const imageBase64 = payload.imageBase64 ?? payload.data?.imageBase64;
  const imageUrl = payload.imageUrl ?? payload.data?.imageUrl;

  if (imageBase64) {
    const src = imageBase64.startsWith("data:")
      ? imageBase64
      : `data:image/png;base64,${imageBase64}`;
    return { imageSrc: src, isMock: false };
  }
  if (imageUrl) {
    return { imageSrc: imageUrl, isMock: false };
  }

  throw fail(
    "We received an unexpected response from the processing service. Please try again.",
    JSON.stringify(payload).slice(0, 500),
  );
}

/* ------------------------------------------------------------------ *
 * DEVELOPMENT FALLBACK — remove this block for production.
 * Returns the original image so the UI flow can be exercised without a
 * configured webhook. This is NOT real AI background removal.
 * ------------------------------------------------------------------ */
async function mockRemoveBackground(file: File): Promise<BackgroundRemovalResult> {
  await new Promise((r) => setTimeout(r, 2200));
  const dataUrl = await fileToBase64(file);
  return { imageSrc: dataUrl, isMock: true };
}
/* -------------------------- end fallback -------------------------- */

/**
 * Sends the image to the configured n8n webhook and returns the processed image.
 * Throws a `BackgroundRemovalError`.
 */
export async function removeBackground(file: File): Promise<BackgroundRemovalResult> {
  if (isDemoModeActive()) {
    return mockRemoveBackground(file);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    let response: Response;

    if (TRANSPORT === "formdata") {
      const form = new FormData();
      form.append("image", file, file.name);
      form.append("fileName", file.name);
      form.append("fileType", file.type);
      response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: form,
        signal: controller.signal,
      });
    } else {
      const base64 = await fileToBase64(file);
      response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64, fileName: file.name, fileType: file.type }),
        signal: controller.signal,
      });
    }

    if (!response.ok) {
      throw fail(
        "The background removal service is not responding right now. Please try again in a moment.",
        `HTTP ${response.status}`,
      );
    }

    const contentType = response.headers.get("content-type") ?? "";

    // The workflow may respond with the binary image directly.
    if (contentType.startsWith("image/")) {
      const blob = await response.blob();
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error("Could not read the response image."));
        reader.readAsDataURL(blob);
      });
      return { imageSrc: dataUrl, isMock: false };
    }

    const text = await response.text();
    let payload: WebhookResponsePayload;
    try {
      payload = JSON.parse(text) as WebhookResponsePayload;
    } catch {
      throw fail(
        "We received an unexpected response from the processing service. Please try again.",
        text.slice(0, 500),
      );
    }

    return parseWebhookResponse(payload);
  } catch (error) {
    if (error && typeof error === "object" && "message" in error && !(error instanceof Error)) {
      throw error as BackgroundRemovalError;
    }
    if (error instanceof DOMException && error.name === "AbortError") {
      throw fail("This is taking longer than expected. Please try again with a smaller image.");
    }
    throw fail(
      "We couldn't reach the background removal service. Check your connection and try again.",
      error instanceof Error ? error.message : String(error),
    );
  } finally {
    clearTimeout(timeout);
  }
}
