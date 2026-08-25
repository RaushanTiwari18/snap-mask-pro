export const ACCEPTED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

export const ACCEPTED_EXTENSIONS = ".jpg,.jpeg,.png,.webp";

/** Maximum upload size in megabytes (configurable). */
export const MAX_FILE_SIZE_MB = Number(import.meta.env.VITE_MAX_FILE_SIZE_MB ?? 10);
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Returns an error message, or null when the file is valid. */
export function validateImageFile(file: File | null | undefined): string | null {
  if (!file) return "Please select an image to continue.";
  if (!ACCEPTED_MIME_TYPES.includes(file.type as (typeof ACCEPTED_MIME_TYPES)[number])) {
    return "Please upload a JPG, PNG, JPEG, or WEBP image.";
  }
  if (file.size === 0) return "That file appears to be empty. Please choose another image.";
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return `That image is too large. Please upload a file under ${MAX_FILE_SIZE_MB} MB.`;
  }
  return null;
}

/** Builds a download name like `photo-snapcut.png`. */
export function buildDownloadName(originalName: string): string {
  const base = originalName.replace(/\.[^.]+$/, "").trim() || "image";
  return `${base}-snapcut.png`;
}
