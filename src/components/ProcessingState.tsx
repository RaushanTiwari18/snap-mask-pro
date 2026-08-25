export function ProcessingState() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="border-border bg-card shadow-soft flex flex-col items-center rounded-2xl border px-6 py-16 text-center"
    >
      <span aria-hidden="true" className="relative inline-flex size-16 items-center justify-center">
        <span className="bg-brand-soft absolute inset-0 animate-ping rounded-full opacity-70" />
        <span className="bg-brand-gradient relative size-12 animate-spin rounded-full [mask:radial-gradient(circle,transparent_55%,black_56%)]" />
      </span>
      <h2 className="mt-6 text-lg font-semibold">Removing background…</h2>
      <p className="text-muted-foreground mt-2 max-w-sm text-sm">
        Our AI is processing your image. This may take a few seconds.
      </p>
    </div>
  );
}
