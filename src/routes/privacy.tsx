import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SnapCut AI" },
      {
        name: "description",
        content:
          "How SnapCut AI handles uploaded images, processing through integrated services, and data retention.",
      },
      { property: "og:title", content: "Privacy Policy — SnapCut AI" },
      { property: "og:description", content: "How SnapCut AI handles your uploaded images." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Privacy Policy</h1>
      <p className="border-border bg-muted text-muted-foreground mt-6 rounded-xl border px-4 py-3 text-sm">
        Placeholder document. This content is a template and must be reviewed by a qualified legal
        professional before a production launch.
      </p>

      <div className="mt-10 space-y-8">
        <Section title="Images you upload">
          <p>
            When you use SnapCut AI, the image you select is sent to an automated processing
            workflow so that the background can be removed. The application does not require an
            account and does not build a profile of you.
          </p>
        </Section>
        <Section title="Processing through integrated services">
          <p>
            Background removal is performed by integrated third-party services reached through a
            configured automation workflow. Your image is transmitted to those services solely to
            produce your result.
          </p>
        </Section>
        <Section title="Storage in this application">
          <p>
            The frontend application does not store your images permanently. Previews are held in
            browser memory for your current session and are released when you reset the tool, close
            the tab, or reload the page.
          </p>
        </Section>
        <Section title="Retention by third parties">
          <p>
            Actual data retention depends on the configured processing workflow and the third-party
            services it uses. We cannot guarantee retention behaviour on systems we do not control.
            Review the policies of those providers before uploading sensitive images.
          </p>
        </Section>
        <Section title="Contact">
          <p>Questions about this policy can be directed to the operator of this deployment.</p>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="text-muted-foreground mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
