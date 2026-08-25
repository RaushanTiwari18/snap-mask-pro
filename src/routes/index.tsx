import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Download,
  Gauge,
  Images,
  MousePointerClick,
  Presentation,
  ShoppingBag,
  Sparkles,
  UploadCloud,
  Wand2,
  Heart,
} from "lucide-react";
import { BackgroundRemovalTool } from "@/components/BackgroundRemovalTool";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTALink } from "@/components/CTAButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SnapCut AI — Remove Image Background in One Click" },
      {
        name: "description",
        content:
          "Upload your image and let AI remove the background automatically in seconds. Download a transparent PNG — no design skills required.",
      },
      { property: "og:title", content: "SnapCut AI — Remove Image Background in One Click" },
      {
        property: "og:description",
        content: "AI background removal in seconds. Upload, process, download a transparent PNG.",
      },
    ],
  }),
  component: Home,
});

const steps = [
  {
    icon: UploadCloud,
    title: "Upload Your Image",
    body: "Choose an image from your device or drag and drop it into the upload area.",
  },
  {
    icon: Wand2,
    title: "AI Removes the Background",
    body: "Our AI automatically detects the main subject and removes the background.",
  },
  {
    icon: Download,
    title: "Download Your Image",
    body: "Preview the result and download your transparent PNG image.",
  },
];

const benefits = [
  { icon: Gauge, title: "Fast Processing", body: "Remove backgrounds in just a few seconds." },
  {
    icon: MousePointerClick,
    title: "No Design Skills Required",
    body: "Upload your image and let AI handle the work.",
  },
  {
    icon: Sparkles,
    title: "Clean Results",
    body: "Get a transparent image ready for your next project.",
  },
  {
    icon: Images,
    title: "Easy to Use",
    body: "No complicated editing tools or manual selection.",
  },
];

const useCases = [
  { icon: ShoppingBag, title: "E-commerce Product Images" },
  { icon: Images, title: "Social Media Content" },
  { icon: Briefcase, title: "Marketing Materials" },
  { icon: Presentation, title: "Presentations" },
  { icon: Heart, title: "Personal Projects" },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-brand-soft pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-8 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:pt-24">
          <div>
            <span className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
              <Sparkles className="text-brand size-3.5" aria-hidden="true" />
              AI background removal
            </span>
            <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Remove Image Background in{" "}
              <span className="text-brand-gradient">One Click</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              Upload your image and let AI remove the background automatically in seconds. No design
              skills. No complicated tools.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <CTALink to="/remove-background" className="py-3.5">
                <UploadCloud className="size-4" aria-hidden="true" />
                Upload Image
              </CTALink>
              <CTALink to="/" hash="how-it-works" variant="secondary" className="py-3.5">
                See how it works
              </CTALink>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">Fast, simple, and easy to use.</p>
          </div>

          <div className="lg:pl-4">
            <BackgroundRemovalTool compact />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to a transparent image"
          subtitle="Everything happens in your browser window — upload, process, download."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="border-border bg-card shadow-soft rounded-2xl border p-6"
            >
              <span className="bg-brand-soft text-brand inline-flex size-11 items-center justify-center rounded-xl">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="text-muted-foreground mt-5 text-xs font-semibold tracking-wide uppercase">
                Step {i + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-muted/40 border-border border-y">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Benefits"
            title="Built to keep things simple"
            subtitle="One job, done well: clean cut-outs without the learning curve."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="border-border bg-card shadow-soft rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="bg-brand-soft text-brand inline-flex size-10 items-center justify-center rounded-xl">
                  <b.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Use cases"
          title="Who uses SnapCut AI"
          subtitle="Anyone who needs a clean, transparent image — fast."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <li
              key={u.title}
              className="border-border bg-card flex items-center gap-3 rounded-xl border p-5"
            >
              <span className="bg-brand-soft text-brand inline-flex size-9 shrink-0 items-center justify-center rounded-lg">
                <u.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">{u.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-20 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-8">
          <FAQAccordion />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-brand-gradient shadow-glow rounded-3xl px-6 py-14 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ready to cut out your first image?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/85">
            Upload an image and get a transparent PNG in seconds.
          </p>
          <CTALink
            to="/remove-background"
            variant="secondary"
            className="mt-7 border-transparent py-3.5"
          >
            Remove Background
          </CTALink>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-brand text-xs font-semibold tracking-[0.18em] uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-muted-foreground mt-3 text-base">{subtitle}</p> : null}
    </div>
  );
}
