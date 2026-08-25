import { Repeat2, Sparkles, Trash2 } from "lucide-react";
import { formatBytes } from "@/lib/fileValidation";
import { CTAButton } from "./CTAButton";

interface Props {
  file: File;
  previewUrl: string;
  onRemove: () => void;
  onReplace: () => void;
  onProcess: () => void;
}

export function FilePreview({ file, previewUrl, onRemove, onReplace, onProcess }: Props) {
  return (
    <div className="border-border bg-card shadow-soft rounded-2xl border p-4 sm:p-6">
      <div className="checkerboard border-border overflow-hidden rounded-xl border">
        <img
          src={previewUrl}
          alt={`Preview of ${file.name}`}
          className="mx-auto max-h-[380px] w-auto object-contain"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{file.name}</p>
          <p className="text-muted-foreground text-xs">{formatBytes(file.size)}</p>
        </div>
        <div className="flex gap-2">
          <CTAButton variant="secondary" onClick={onReplace} className="px-3 py-2">
            <Repeat2 className="size-4" aria-hidden="true" />
            Replace
          </CTAButton>
          <CTAButton variant="secondary" onClick={onRemove} className="px-3 py-2">
            <Trash2 className="size-4" aria-hidden="true" />
            Remove
          </CTAButton>
        </div>
      </div>

      <CTAButton onClick={onProcess} className="mt-5 w-full py-3.5 text-base">
        <Sparkles className="size-4" aria-hidden="true" />
        Remove Background
      </CTAButton>
    </div>
  );
}
