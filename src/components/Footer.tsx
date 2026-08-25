import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Remove Background", to: "/remove-background" as const },
  { label: "About", to: "/about" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "Privacy Policy", to: "/privacy" as const },
  { label: "Terms of Service", to: "/terms" as const },
];

export function Footer() {
  return (
    <footer className="border-border bg-muted/40 mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Logo />
          <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
            Remove image backgrounds quickly and easily with AI.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-border border-t">
        <p className="text-muted-foreground mx-auto max-w-6xl px-4 py-5 text-xs sm:px-6">
          © 2026 SnapCut AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
