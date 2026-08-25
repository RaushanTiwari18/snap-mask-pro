import { createFileRoute } from "@tanstack/react-router";
import { BackgroundRemovalTool } from "@/components/BackgroundRemovalTool";

export const Route = createFileRoute("/remove-background")({
  head: () => ({
    meta: [
      { title: "Remove Background — SnapCut AI" },
      {
        name: "description",
        content:
          "Upload an image and remove its background in seconds with SnapCut AI. Download the result as a transparent PNG.",
      },
      { property: "og:title", content: "Remove Background — SnapCut AI" },
      {
        property: "og:description",
        content: "Upload an image and remove its background in seconds.",
      },
    ],
  }),
  component: RemoveBackgroundPage,
});

function RemoveBackgroundPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Remove Background</h1>
        <p className="text-muted-foreground mt-3 text-base">
          Upload an image and remove its background in seconds.
        </p>
      </header>
      <div className="mt-10">
        <BackgroundRemovalTool />
      </div>
    </main>
  );
}
