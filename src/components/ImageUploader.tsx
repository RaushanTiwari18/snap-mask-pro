import { ImageUp, UploadCloud } from "lucide-react";
import { useId, useRef, useState, type DragEvent } from "react";
import { cn } from "@/lib/utils";
import { ACCEPTED_EXTENSIONS, MAX_FILE_SIZE_MB } from "@/lib/fileValidation";

interface Props {
  onSelect: (file: File | undefined) => void;
  compact?: boolean;
}

export function ImageUploader({ onSelect, compact = false }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const inputId = useId();

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    onSelect(event.dataTransfer.files?.[0]);
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "bg-card relative rounded-2xl border-2 border-dashed transition-colors duration-200",
        dragging ? "border-brand bg-brand-soft" : "border-border hover:border-brand/60",
        compact ? "p-6" : "p-8 sm:p-12",
      )}
    >
      <div className="flex flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="bg-brand-soft text-brand mb-4 inline-flex size-14 items-center justify-center rounded-2xl"
        >
          {dragging ? <ImageUp className="size-7" /> : <UploadCloud className="size-7" />}
        </span>

        <label htmlFor={inputId} className="text-base font-semibold">
          Drag &amp; drop your image here
        </label>
        <p className="text-muted-foreground mt-1 text-sm">or choose a file from your device</p>

        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={ACCEPTED_EXTENSIONS}
          className="sr-only"
          onChange={(e) => {
            onSelect(e.target.files?.[0]);
            e.target.value = "";
          }}
        />

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="bg-brand-gradient shadow-glow mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
        >
          <UploadCloud className="size-4" aria-hidden="true" />
          Upload Image
        </button>

        <p className="text-muted-foreground mt-4 text-xs">
          JPG, JPEG, PNG or WEBP · up to {MAX_FILE_SIZE_MB} MB
        </p>
      </div>
    </div>
  );
}
