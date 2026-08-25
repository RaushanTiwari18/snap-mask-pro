export type ProcessingState = "idle" | "selected" | "processing" | "success" | "error";

export interface BackgroundRemovalResult {
  /** Data URL or remote URL of the processed transparent image. */
  imageSrc: string;
  /** True when produced by the local development fallback, not real AI. */
  isMock: boolean;
}

export interface BackgroundRemovalError {
  message: string;
  /** Technical detail, logged in development only. Never rendered raw. */
  detail?: string;
}

/** Shape the n8n workflow is expected to return. */
export interface WebhookResponsePayload {
  success?: boolean;
  message?: string;
  error?: string;
  imageUrl?: string;
  imageBase64?: string;
  /** Some n8n setups nest the payload. */
  data?: {
    imageUrl?: string;
    imageBase64?: string;
  };
}
