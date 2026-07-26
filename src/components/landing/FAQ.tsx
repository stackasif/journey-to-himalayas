import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What documents do Indian citizens need to travel to Nepal?",
    a: "Indian citizens do not need a passport or visa. A voter ID, Aadhaar (with photo), or a valid passport is accepted at the border. For minors under 18, a school ID with photograph works. We share a printable checklist inside the guide.",
  },
  {
    q: "How does currency and money work in Nepal?",
    a: "Indian ₹100 and ₹500 notes are widely accepted (₹2000 notes are not). We recommend carrying some cash and using UPI at partner hotels. Nepal's own currency (NPR) trades at roughly ₹1 = NPR 1.6. Your driver can help you exchange at trusted counters.",
  },
  {
    q: "Is Nepal safe for families and senior citizens?",
    a: "Absolutely. Our routes are hand-picked for road quality, our drivers are trained in high-altitude driving, and every trip is monitored 24×7 by our travel desk. We also arrange oxygen support for Muktinath and higher altitude legs on request.",
  },
  {
    q: "Which hotels do you use?",
    a: "We only partner with 3-star, 4-star and boutique properties that we personally audit — heaters in winter, hot water, clean linen, Indian-friendly food, and central locations in Pokhara, Kathmandu, Chitwan and Muktinath.",
  },
  {
    q: "Can I fully customise my itinerary?",
    a: "Yes. Every trip is built around you — pace, stops, food preferences, temples, adventure add-ons like paragliding or Chitwan safari, honeymoon touches, or extra rest days for elders.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 15 days before departure. Between 7–15 days, only actual hotel non-refundable costs are charged. Inside 7 days, a small transparent charge applies. No hidden fees, ever.",
  },
  {
    q: "How do payments work?",
    a: "A small advance to block hotels and vehicle, balance in installments before departure. UPI, bank transfer, and cards accepted. You receive a proper GST invoice and a day-wise breakup.",
  },
  {
    q: "Do you provide a driver or is it self-drive?",
    a: "All our trips include an experienced Indian-Nepali driver who knows the routes, speaks Hindi, handles border formalities, and doubles up as a local guide. No self-drive.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {faqs.map((f, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 sm:px-6 data-[state=open]:bg-white/[0.05] transition-colors"
        >
          <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:no-underline py-5">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground pb-5">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
