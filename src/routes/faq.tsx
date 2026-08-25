import { createFileRoute } from "@tanstack/react-router";
import { FAQAccordion, faqs } from "@/components/FAQAccordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SnapCut AI Background Remover" },
      {
        name: "description",
        content:
          "Answers about SnapCut AI: supported formats, processing time, downloads, and how your images are handled.",
      },
      { property: "og:title", content: "SnapCut AI FAQ" },
      {
        property: "og:description",
        content: "Common questions about AI background removal with SnapCut AI.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Frequently asked questions
      </h1>
      <p className="text-muted-foreground mt-3 text-base">
        Everything you need to know about removing backgrounds with SnapCut AI.
      </p>
      <div className="mt-10">
        <FAQAccordion />
      </div>
    </main>
  );
}
