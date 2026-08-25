import { AlertTriangle } from "lucide-react";
import { CTAButton } from "./CTAButton";

interface Props {
  message: string;
  onRetry: () => void;
  onReset: () => void;
}

export function ErrorState({ message, onRetry, onReset }: Props) {
  return (
    <div
      role="alert"
      className="border-destructive/30 bg-card shadow-soft flex flex-col items-center rounded-2xl border px-6 py-14 text-center"
    >
      <span className="bg-destructive/10 text-destructive inline-flex size-14 items-center justify-center rounded-2xl">
        <AlertTriangle className="size-7" aria-hidden="true" />
      </span>
      <h2 className="mt-5 text-lg font-semibold">Something went wrong</h2>
      <p className="text-muted-foreground mt-2 max-w-md text-sm">{message}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <CTAButton onClick={onRetry}>Try Again</CTAButton>
        <CTAButton variant="secondary" onClick={onReset}>
          Upload a different image
        </CTAButton>
      </div>
    </div>
  );
}
