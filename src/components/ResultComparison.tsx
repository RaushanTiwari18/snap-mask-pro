import { Download, RotateCcw } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { buildDownloadName } from "@/lib/fileValidation";

interface Props {
  originalUrl: string;
  originalName: string;
  processedUrl: string;
  isMock: boolean;
  onReset: () => void;
}

export function ResultComparison({
  originalUrl,
  originalName,
  processedUrl,
  isMock,
  onReset,
}: Props) {
  async function handleDownload() {
    const fileName = buildDownloadName(originalName);
    try {
      const response = await fetch(processedUrl);
      const blob = await response.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(href);
    } catch {
      // Fall back to a direct link (e.g. cross-origin URLs without CORS).
      const a = document.createElement("a");
      a.href = processedUrl;
      a.download = fileName;
      a.target = "_blank";
      a.rel = "noopener";
      a.click();
    }
  }

  return (
    <section aria-label="Background removal result" className="animate-in fade-in duration-500">
      {isMock ? (
        <p className="border-border bg-muted text-muted-foreground mb-4 rounded-xl border px-4 py-3 text-xs">
          Demo mode: no webhook is configured, so the original image is shown as a placeholder
          result. Set <code className="font-mono">VITE_N8N_WEBHOOK_URL</code> to enable real AI
          processing.
        </p>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <figure className="border-border bg-card shadow-soft rounded-2xl border p-4">
          <figcaption className="text-muted-foreground mb-3 text-xs font-semibold tracking-wide uppercase">
            Original
          </figcaption>
          <div className="bg-muted flex h-64 items-center justify-center overflow-hidden rounded-xl sm:h-80">
            <img
              src={originalUrl}
              alt="Original uploaded image"
              className="max-h-full w-auto object-contain"
            />
          </div>
        </figure>

        <figure className="border-border bg-card shadow-soft rounded-2xl border p-4">
          <figcaption className="text-brand mb-3 text-xs font-semibold tracking-wide uppercase">
            Background removed
          </figcaption>
          <div className="checkerboard border-border flex h-64 items-center justify-center overflow-hidden rounded-xl border sm:h-80">
            <img
              src={processedUrl}
              alt="Image with the background removed"
              className="max-h-full w-auto object-contain"
            />
          </div>
        </figure>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <CTAButton onClick={handleDownload} className="py-3.5">
          <Download className="size-4" aria-hidden="true" />
          Download PNG
        </CTAButton>
        <CTAButton variant="secondary" onClick={onReset} className="py-3.5">
          <RotateCcw className="size-4" aria-hidden="true" />
          Try Another Image
        </CTAButton>
      </div>
    </section>
  );
}
