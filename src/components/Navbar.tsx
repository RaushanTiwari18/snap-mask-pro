import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { CTALink } from "./CTAButton";

const links = [
  { label: "Home", to: "/" as const },
  { label: "How It Works", to: "/" as const, hash: "how-it-works" },
  { label: "FAQ", to: "/faq" as const },
  { label: "About", to: "/about" as const },
] satisfies { label: string; to: "/" | "/faq" | "/about"; hash?: string }[];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/70 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                className="text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CTALink to="/remove-background" className="px-4 py-2.5">
            Remove Background
          </CTALink>
        </div>

        <button
          type="button"
          className="hover:bg-muted rounded-lg p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-border bg-background border-t md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="hover:bg-muted block rounded-lg px-3 py-3 text-sm font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="px-1 pt-2 pb-3">
              <CTALink
                to="/remove-background"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Remove Background
              </CTALink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
