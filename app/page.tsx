"use client"
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleCheck,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileSearch,
  FileText,
  Handshake,
  HelpCircle,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Route as RouteIcon,
  ShieldCheck,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/property-guidance-hero.jpg";
import portraitImage from "@/assets/professional-portrait.jpg";
import Image from "next/image";

const PHONE_DISPLAY = "+92 303 8552188";
const WHATSAPP_DISPLAY = "+92 314 8552188";
const PHONE_LINK = "tel:+923148552188";
const WHATSAPP_LINK = "https://wa.me/923148552188";
const AREA = "Zam Zama Centre";
const CITY = "Sargodha";
const PROVINCE = "Punjab";
const WORKING_HOURS = "Mon-Sun 09:00 AM - 10:00 PM";
const YEAR = new Date().getFullYear();
const BUSINESS_NAME = "Fine Registry House";
const BUSINESS_LOCATION = "Shop No.2, Ground Floor, Zam Zama Centre, Sargodha 40100";
const EXPERIENCE_YEARS = "5+ Years";
const BUSINESS_OWNER_NAME = "Khurram Shahzad";
const GOOGLE_MAPS_LOCATION = "https://maps.app.goo.gl/RMi239hTeABdxSMv6";
const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["How It Works", "#process"],
  ["About", "#about"],
  ["FAQs", "#faqs"],
  ["Contact", "#contact"],
] as const;

const services = [
  { icon: FileCheck2, title: "Property Registry Assistance", text: "Guidance through the general property registration process and required documentation." },
  { icon: FileSearch, title: "Property Documentation Guidance", text: "Help understanding and organizing documents commonly required during property transactions." },
  { icon: Handshake, title: "Buying & Selling Assistance", text: "Practical guidance for individuals dealing with property purchase or sale documentation." },
  { icon: RouteIcon, title: "Registry Process Guidance", text: "Assistance understanding the steps involved in completing property registration procedures." },
  { icon: Building2, title: "Mutation / Intiqal Assistance", text: "Guidance regarding related property documentation procedures, where applicable." },
  { icon: ClipboardCheck, title: "General Property Documentation", text: "Help identifying the documentation and procedural requirements relevant to your situation." },
];

const faqs = [
  ["Do you sell properties?", "No. We provide independent assistance and guidance related to property registration and documentation. We do not operate as a property marketplace."],
  ["Are you a government office?", "No. We are an independent service provider. Official registration, verification and approvals are handled by the relevant government authorities."],
  ["Can you help me understand the registry process?", "Yes. We can discuss your situation and provide practical guidance regarding the relevant documentation and procedural steps."],
  ["Do I need to visit your office?", "Contact us first to discuss your requirements and the most convenient way to proceed."],
  ["Can you guarantee registration or approval?", "No. Official decisions, verification and approvals are made by the relevant authorities."],
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Property documentation inquiry%0A%0AName: ${encodeURIComponent(String(data.get("name") ?? ""))}%0APhone: ${encodeURIComponent(String(data.get("phone") ?? ""))}%0AHelp needed: ${encodeURIComponent(String(data.get("help") ?? ""))}%0AMessage: ${encodeURIComponent(String(data.get("message") ?? ""))}`;
    window.open(`${WHATSAPP_LINK}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-16 text-foreground lg:pb-0">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Go to home">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"><FileText className="size-5" /></span>
            <span className="min-w-0"><strong className="block truncate font-display text-sm text-primary sm:text-base">{BUSINESS_NAME}</strong><span className="block truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Documentation Assistance</span></span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <Button variant="premium" size="lg" asChild className="hidden lg:inline-flex"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp Us</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-3 text-sm font-semibold text-primary last:border-0">{label}<ChevronRight className="size-4 text-highlight" /></a>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative bg-a text-primary-foreground bg-[url('./assets/hero-bg-1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="backdrop-blur backdrop-brightness-[.6] bg-gradient-to-l from-[#06213c]/50 to-[#af7b1f]/20">

          <div className="section-shell grid items-center gap-10 py-14 md:min-h-[46rem] md:grid-cols-[1.08fr_.92fr] md:py-20 lg:gap-16">
            <div className="reveal max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-highlight pl-3 text-xs font-semibold uppercase tracking-[0.14em] text-highlight-soft"><ShieldCheck className="size-4" />Independent service provider</div>
              <h1 className="text-3xl leading-[1.15] font-bold sm:text-4xl lg:text-5xl">Property Registration &amp; Documentation Assistance</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85">Professional guidance and assistance for property registration, documentation and related procedures.</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/65 sm:text-base hidden">Get practical, one-to-one support to understand the paperwork, prepare for each step, and approach the relevant authorities with greater clarity.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button variant="gold" size="xl" asChild><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp Us</a></Button><Button variant="outlineGold" size="xl" asChild><a href={PHONE_LINK}><Phone />Call Now</a></Button></div>
              <p className="mt-7 flex items-start gap-2 text-xs leading-5 text-primary-foreground/60"><CircleCheck className="mt-0.5 size-4 shrink-0 text-highlight" />Independent Property Documentation &amp; Registration Assistance</p>
            </div>
            <div className="relative mx-auto w-full max-w-lg md:justify-self-end">
              <div className="absolute -left-4 top-8 h-24 w-1 bg-highlight" />
              <Image src={heroImage} alt="A professional explaining property documents to a client" width={1200} height={1408} fetchPriority="high" className="aspect-[5/6] w-full rounded-xl object-cover shadow-2xl" />
              <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-border bg-surface p-4 text-foreground shadow-xl sm:left-8 sm:right-auto sm:max-w-xs"><p className="text-sm font-semibold text-primary">Clear guidance at every step</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Understand the process before you proceed.</p></div>
            </div>
          </div>
        </div>
        </section>

        <section id="services" className="py-20 sm:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Our services" title="How We Can Help" text="Practical assistance and guidance for property-related documentation and registration procedures." />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className="group rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-highlight/60 hover:shadow-lg"><div className="mb-5 flex items-center justify-between"><span className="grid size-11 place-items-center rounded-lg bg-secondary text-primary"><Icon className="size-5" /></span><span className="text-xs font-bold text-highlight">0{index + 1}</span></div><h3 className="text-lg font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
            <div className="mt-10 text-center"><Button variant="premium" size="xl" asChild><a href="#contact">Not sure what you need? Talk to us<ArrowRight /></a></Button></div>
          </div>
        </section>

        <section id="process" className="bg-surface-dark py-20 text-primary-foreground sm:py-28">
          <div className="section-shell"><SectionHeading dark eyebrow="A clear approach" title="How It Works" text="A straightforward path from your first conversation to the relevant official process." />
            <ol className="relative mt-14 grid gap-8 lg:grid-cols-4">{[
              ["Contact Us", "Tell us what property-related assistance you need."],
              ["Discuss Your Case", "We understand your situation and explain the relevant process."],
              ["Documentation Guidance", "We help you understand the documents and procedural requirements."],
              ["Complete the Process", "You proceed with the relevant official process with the required documentation."],
            ].map(([title, text], index) => <li key={title} className="relative border-t border-primary-foreground/20 pt-6 lg:border-t-0 lg:pt-0"><div className="mb-6 flex items-center gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-full border border-highlight bg-highlight/10 font-display text-lg font-bold text-highlight">{index + 1}</span>{index < 3 && <span className="hidden h-px flex-1 bg-primary-foreground/20 lg:block" />}</div><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/65">{text}</p></li>)}</ol>
            <div className="mt-12 flex items-start gap-3 border-l-2 border-highlight bg-primary-foreground/5 p-5"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-highlight" /><p className="text-sm leading-6 text-primary-foreground/75">Official approvals, registrations, verifications and government procedures are performed by the relevant authorities.</p></div>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-28"><div className="section-shell grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div className="relative"><Image src={portraitImage} alt="Professional portrait placeholder for the business owner" loading="lazy" width={912} height={1104} className="aspect-[4/5] w-full max-w-md rounded-xl object-cover shadow-xl" /><span className="absolute bottom-5 left-5 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg">{EXPERIENCE_YEARS} of Experience</span></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-highlight">About the professional</p><h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Local Experience. Practical Guidance.</h2><p className="mt-6 text-base leading-8 text-muted-foreground">{BUSINESS_OWNER_NAME} provides independent assistance to individuals dealing with property registration and documentation procedures. With practical experience working around local property-registration processes, he helps clients understand what documentation and procedural steps may be required.</p><p className="mt-4 text-sm leading-7 text-muted-foreground">The focus is simple: listen carefully, explain clearly, and help you feel prepared for the process ahead.</p><div className="mt-8 grid gap-x-8 gap-y-4 rounded-xl border border-border bg-surface p-6 shadow-sm sm:grid-cols-2">{[[UserRound, "Name", BUSINESS_OWNER_NAME], [MapPin, "Service area", AREA, CITY], [Clock3, "Experience", EXPERIENCE_YEARS], [Phone, "Contact", PHONE_DISPLAY], [MessageCircle, "WhatsApp", WHATSAPP_DISPLAY]].map(([Icon, label, value]) => { const ItemIcon = Icon as typeof UserRound; return <div key={String(label)} className="flex gap-3"><ItemIcon className="mt-0.5 size-4 shrink-0 text-highlight" /><div><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{String(label)}</p><p className="mt-1 text-sm font-semibold text-primary">{String(value)}</p></div></div> })}</div></div></div></section>

        <section className="border-y border-border bg-secondary/60 py-20"><div className="section-shell"><SectionHeading eyebrow="Why choose us" title="Why People Choose Our Assistance" text="Personal, practical support shaped around the realities of local property documentation." /><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[[MapPin, "Local Process Knowledge", "Familiarity with common local procedures and practical requirements."], [FileCheck2, "Clear Guidance", "Straightforward explanations without unnecessary complexity."], [UsersRound, "Personal Assistance", "Direct, case-by-case attention from an independent professional."], [MessageCircle, "Convenient Communication", "Easy contact by phone and WhatsApp when you need clarity."]].map(([Icon, title, text]) => { const TrustIcon = Icon as typeof MapPin; return <div key={String(title)} className="border-l border-highlight pl-5"><TrustIcon className="size-6 text-highlight" /><h3 className="mt-4 text-base font-bold text-primary">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(text)}</p></div> })}</div></div></section>

        <section className="py-20 sm:py-28"><div className="section-shell"><SectionHeading eyebrow="Client experiences" title="What Clients Say" text="Genuine client experiences will be shared here soon." /><div className="mt-12 grid gap-5 md:grid-cols-2">{[1, 2].map(n => <blockquote key={n} className="rounded-xl border border-dashed border-highlight/50 bg-surface p-7"><p className="font-display text-lg leading-8 text-primary">“Great service, exceeded my expectation”</p><footer className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Awais Alvi</footer></blockquote>)}</div></div></section>

        <section className="bg-primary py-20 text-primary-foreground sm:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-highlight">Prepare with confidence</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Preparing for a Property Registration?</h2><p className="mt-5 text-sm leading-7 text-primary-foreground/70">Requirements can vary depending on the transaction, property and individual circumstances. A conversation can help clarify what may apply to you.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Identification documents", "Property-related documents", "Seller / buyer information", "Relevant transaction documentation", "Applicable fees / stamps", "Other documents required by the relevant authority"].map(item => <div key={item} className="flex items-start gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4"><Check className="mt-0.5 size-4 shrink-0 text-highlight" /><span className="text-sm font-medium">{item}</span></div>)}<p className="mt-3 text-xs leading-5 text-primary-foreground/55 sm:col-span-2">This is not an exhaustive legal checklist. Requirements may vary. Contact us to discuss your specific situation.</p></div></div></section>

        <section id="faqs" className="py-20 sm:py-28"><div className="section-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-highlight">Common questions</p><h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Helpful Answers Before You Contact Us</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Clear information about what this independent assistance service does-and does not-provide.</p><HelpCircle className="mt-8 size-10 text-highlight" /></div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="py-6 text-left font-display text-base font-bold text-primary hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-6 pr-8 text-sm leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section id="contact" className="bg-secondary/60 py-20 sm:py-28"><div className="section-shell"><div className="grid overflow-hidden rounded-xl border border-border bg-surface shadow-xl lg:grid-cols-[.85fr_1.15fr]"><div className="bg-primary p-7 text-primary-foreground sm:p-10 lg:p-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-highlight">Let’s talk</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Need Help With Property Documentation?</h2>
          <p className="mt-5 text-sm leading-7 text-primary-foreground/70">Tell us what you are dealing with and we’ll help you understand the next steps.</p>
          <div className="mt-9 space-y-5">
            {[[Phone, "Phone", PHONE_DISPLAY], [MessageCircle, "WhatsApp", WHATSAPP_DISPLAY], [MapPin, "Location", BUSINESS_LOCATION, { AREA }, { CITY }], [Clock3, "Working hours", WORKING_HOURS]].map(([Icon, label, value]) => { const ContactIcon = Icon as typeof Phone; return <div key={String(label)} className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-foreground/10"><ContactIcon className="size-4 text-highlight" /></span><div><p className="text-xs text-primary-foreground/50">{String(label)}</p><p className="mt-1 text-sm font-semibold">{String(value)}</p></div></div> })}</div><div className="mt-9 flex flex-wrap gap-3"><Button variant="gold" asChild><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp Us</a></Button><Button variant="outlineGold" asChild><a href={PHONE_LINK}><Phone />Call Now</a></Button><Button variant="outlineGold" asChild><a href={GOOGLE_MAPS_LOCATION} target="_blank" rel="noreferrer"><MapPin />Get Directions</a></Button></div></div><form onSubmit={submitInquiry} className="p-7 sm:p-10 lg:p-12"><h3 className="text-xl font-bold text-primary">Send an Inquiry</h3><p className="mt-2 text-sm text-muted-foreground">Share a brief overview. Please do not send sensitive documents through this form.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold text-primary">Name<Input name="name" required autoComplete="name" placeholder="Your name" className="mt-2 h-11 bg-background" /></label><label className="text-sm font-semibold text-primary">Phone Number<Input name="phone" required type="tel" autoComplete="tel" placeholder="Your phone number" className="mt-2 h-11 bg-background" /></label><label className="text-sm font-semibold text-primary sm:col-span-2">What do you need help with?<Input name="help" required placeholder="e.g. Property registry guidance" className="mt-2 h-11 bg-background" /></label><label className="text-sm font-semibold text-primary sm:col-span-2">Message<Textarea name="message" required placeholder="Briefly describe your situation" className="mt-2 min-h-28 bg-background" /></label></div><Button type="submit" variant="premium" size="xl" className="mt-6 w-full sm:w-auto">Send Inquiry<ArrowRight /></Button></form></div></div></section>
      </main>

      <footer className="bg-surface-dark py-14 text-primary-foreground">
        <div className="section-shell">
          <div className="grid gap-10 border-b border-primary-foreground/15 pb-10 md:grid-cols-3"><div>
            <p className="font-display text-lg font-bold">{BUSINESS_NAME}</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/60">Independent property documentation and registration assistance for individuals in {CITY} and surrounding areas.</p>
          </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-highlight">Quick links</p>
              <nav className="mt-4 grid grid-cols-2 gap-3 text-sm text-primary-foreground/65">
                {navItems.map(([label, href]) => <a key={href} href={href} className="hover:text-highlight">{label}</a>)}
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-highlight">Contact</p>
              <div className="mt-4 space-y-2 text-sm text-primary-foreground/65">
                <p className="flex items-center gap-1"><Phone size={16}/>{PHONE_DISPLAY}</p>
                <p className="flex items-center gap-1"><MessageCircle size={16}/> {WHATSAPP_DISPLAY}</p>
                <p className="flex items-center gap-1"><MapPin size={16}/> {AREA}, {CITY}, {PROVINCE}</p>
                <p className="flex items-center gap-1"><Clock3 size={16}/> {WORKING_HOURS}</p>
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-5xl text-xs leading-6 text-primary-foreground/50"><strong className="text-primary-foreground/70">Disclaimer:</strong> We are an independent property documentation and registration assistance service and are not a government department or government representative. Official registration, verification, approvals and applicable government procedures are handled by the relevant authorities.</p>
          <p className="mt-6 text-xs text-primary-foreground/40">© {YEAR} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-surface p-2 shadow-2xl lg:hidden"><Button variant="premium" size="lg" asChild className="rounded-r-none"><a href={PHONE_LINK}><Phone />Call Now</a></Button><Button variant="gold" size="lg" asChild className="rounded-l-none"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a></Button></div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-highlight">{eyebrow}</p><h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${dark ? "text-primary-foreground" : "text-primary"}`}>{title}</h2><p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{text}</p></div>;
}
