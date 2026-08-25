import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="SnapCut AI home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className="bg-brand-gradient shadow-glow inline-flex size-9 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="white" strokeWidth={2}>
          <path d="M4 7V5a1 1 0 0 1 1-1h2" strokeLinecap="round" />
          <path d="M20 7V5a1 1 0 0 0-1-1h-2" strokeLinecap="round" />
          <path d="M4 17v2a1 1 0 0 0 1 1h2" strokeLinecap="round" />
          <path d="M20 17v2a1 1 0 0 1-1 1h-2" strokeLinecap="round" />
          <path d="m9 14 2.5-3 2 2.5L15.5 11l2 3z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[1.0625rem] font-extrabold tracking-tight whitespace-nowrap">
        SnapCut <span className="text-brand-gradient">AI</span>
      </span>
    </Link>
  );
}
