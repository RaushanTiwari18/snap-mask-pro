import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "What is SnapCut AI?",
    a: "SnapCut AI is a simple web tool that removes the background from an image automatically. Upload a photo, let the AI process it, and download a transparent PNG.",
  },
  {
    q: "How does background removal work?",
    a: "Your image is sent to an AI background removal service through a secure automated workflow. The AI detects the main subject and separates it from the background.",
  },
  {
    q: "Which image formats are supported?",
    a: "You can upload JPG, JPEG, PNG and WEBP images. Results are returned as a transparent PNG.",
  },
  {
    q: "How long does it take to remove a background?",
    a: "Most images finish in a few seconds. Larger or more detailed images can take a little longer.",
  },
  {
    q: "Can I download the processed image?",
    a: "Yes. Once processing finishes, click Download PNG to save the transparent image to your device.",
  },
  {
    q: "Do I need design experience?",
    a: "No. There is nothing to select or erase manually — upload an image and the AI does the work.",
  },
  {
    q: "Are my images stored permanently?",
    a: "SnapCut AI does not store your images in the browser beyond your current session. Retention by the connected processing workflow and third-party services depends on how they are configured.",
  },
];

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`}>
          <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
