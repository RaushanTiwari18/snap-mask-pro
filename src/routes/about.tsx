import { createFileRoute } from "@tanstack/react-router";
import { CTALink } from "@/components/CTAButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SnapCut AI — Simple AI Background Removal" },
      {
        name: "description",
        content:
          "SnapCut AI makes background removal simple and accessible. Learn about the product and the mission behind it.",
      },
      { property: "og:title", content: "About SnapCut AI" },
      {
        property: "og:description",
        content: "Why we built a focused, one-click AI background removal tool.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About SnapCut AI</h1>
      <div className="text-muted-foreground mt-6 space-y-5 text-base leading-relaxed">
        <p>
          SnapCut AI was created to make background removal simple and accessible. Instead of using
          complicated photo editing software or manually selecting subjects, users can upload an
          image and let AI handle the background removal process.
        </p>
        <p>
          The product does one thing on purpose. There are no layers, no brushes, and no settings to
          learn — just upload, process, and download a transparent PNG you can drop straight into a
          product listing, a slide deck, or a social post.
        </p>
        <p>
          We keep the experience lightweight and privacy-conscious: images are only handled for the
          current session and are sent to the connected processing workflow to produce your result.
        </p>
      </div>
      <div className="mt-10">
        <CTALink to="/remove-background" className="py-3.5">
          Try it now
        </CTALink>
      </div>
    </main>
  );
}
