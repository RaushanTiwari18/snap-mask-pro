import { useRef } from "react";
import { AlertCircle } from "lucide-react";
import { ImageUploader } from "./ImageUploader";
import { FilePreview } from "./FilePreview";
import { ProcessingState as ProcessingView } from "./ProcessingState";
import { ResultComparison } from "./ResultComparison";
import { ErrorState } from "./ErrorState";
import { ACCEPTED_EXTENSIONS } from "@/lib/fileValidation";
import { useBackgroundRemoval } from "@/hooks/useBackgroundRemoval";

export function BackgroundRemovalTool({ compact = false }: { compact?: boolean }) {
  const { state, file, previewUrl, result, error, selectFile, process, reset, clearError } =
    useBackgroundRemoval();
  const replaceInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
      <input
        ref={replaceInputRef}
        type="file"
        accept={ACCEPTED_EXTENSIONS}
        className="sr-only"
        aria-label="Replace selected image"
        onChange={(e) => {
          selectFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />

      {state === "idle" ? <ImageUploader onSelect={selectFile} compact={compact} /> : null}

      {state === "selected" && file && previewUrl ? (
        <FilePreview
          file={file}
          previewUrl={previewUrl}
          onRemove={reset}
          onReplace={() => replaceInputRef.current?.click()}
          onProcess={() => void process()}
        />
      ) : null}

      {state === "processing" ? <ProcessingView /> : null}

      {state === "success" && result && previewUrl && file ? (
        <ResultComparison
          originalUrl={previewUrl}
          originalName={file.name}
          processedUrl={result.imageSrc}
          isMock={result.isMock}
          onReset={reset}
        />
      ) : null}

      {state === "error" ? (
        file ? (
          <ErrorState
            message={error ?? "Unable to remove the background. Please try again."}
            onRetry={() => void process()}
            onReset={reset}
          />
        ) : (
          <div>
            <p
              role="alert"
              className="border-destructive/40 bg-destructive/5 text-destructive mb-4 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm"
            >
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {error}
            </p>
            <ImageUploader
              onSelect={(f) => {
                clearError();
                selectFile(f);
              }}
              compact={compact}
            />
          </div>
        )
      ) : null}
    </div>
  );
}
