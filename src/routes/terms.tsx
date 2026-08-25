import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — SnapCut AI" },
      {
        name: "description",
        content:
          "Terms covering acceptance, permitted use, uploaded content, availability and liability for SnapCut AI.",
      },
      { property: "og:title", content: "Terms of Service — SnapCut AI" },
      { property: "og:description", content: "The terms that govern use of SnapCut AI." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Acceptance of terms",
    body: "By accessing or using SnapCut AI you agree to these terms. If you do not agree, please do not use the service.",
  },
  {
    title: "Use of the service",
    body: "SnapCut AI is provided for lawful use only. You may not use it to process content that is illegal, infringing, or that you do not have the rights to use.",
  },
  {
    title: "User-uploaded content",
    body: "You retain ownership of the images you upload. You are responsible for ensuring that you have the necessary rights to upload and process each image.",
  },
  {
    title: "Service availability",
    body: "The service is provided on an as-available basis. Processing depends on third-party services and may be interrupted, delayed, or discontinued without notice.",
  },
  {
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, the operator is not liable for indirect or consequential damages arising from use of the service, including loss of data or business interruption.",
  },
  {
    title: "Changes to the service",
    body: "Features, limits, and these terms may change over time. Continued use after changes take effect constitutes acceptance of the updated terms.",
  },
];

function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Terms of Service</h1>
      <p className="border-border bg-muted text-muted-foreground mt-6 rounded-xl border px-4 py-3 text-sm">
        Placeholder document. This content is a template and should be reviewed legally before
        production use.
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
