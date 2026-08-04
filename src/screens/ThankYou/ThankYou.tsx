import { Helmet } from "react-helmet";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fa256a0fb50494811bd2a317d7b39f7d5?format=webp&width=800&height=1200";

const nextSteps = [
  {
    icon: Mail,
    title: "Watch for our response",
    description: "A member of the Liberty Law P.C. team will contact you by phone or email.",
  },
  {
    icon: FileText,
    title: "Gather your case documents",
    description: "Keep any citations, court notices, bond paperwork, or other case documents nearby.",
  },
  {
    icon: ShieldCheck,
    title: "Prepare to discuss your options",
    description: "We'll review your situation, answer your questions, and outline the next steps for your defense.",
  },
];

export const ThankYou = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-white font-outfit text-[#04304c]">
      <Helmet>
        <title>Thank You | Liberty Law P.C.</title>
        <meta
          name="description"
          content="Thank you for contacting Liberty Law P.C. Our team will respond to your criminal defense consultation request shortly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thank You | Liberty Law P.C." />
        <meta
          property="og:description"
          content="Your consultation request has been received by Liberty Law P.C."
        />
        <meta property="og:image" content={LOGO_URL} />
      </Helmet>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04304c] shadow-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[92px] lg:px-8">
          <a href="/lp-criminal-lawyer/" aria-label="Return to Liberty Law P.C. landing page">
            <img
              src={LOGO_URL}
              alt="Liberty Law P.C."
              className="h-12 w-auto max-w-[210px] object-contain sm:max-w-[250px] lg:h-16 lg:max-w-[310px]"
            />
          </a>
          <a
            href="tel:6302836421"
            className="inline-flex items-center gap-2 bg-[#EC3024] px-4 py-3 text-xs font-semibold text-white transition hover:bg-white hover:text-[#04304c] sm:px-6 sm:text-base"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Call </span>(630) 283-6421
          </a>
        </div>
      </header>

      <main className="relative flex flex-1 items-center overflow-hidden bg-[#04304c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden="true"
        />
        <img
          src={LOGO_URL}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-[-120px] w-[560px] max-w-none opacity-[0.05] grayscale brightness-[3] mix-blend-screen"
        />
        <div
          className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#EC3024]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-[#EC3024]/60 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
              <Check className="h-4 w-4 text-[#EC3024]" />
              Submission confirmed
            </div>

            <h1 className="font-display text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-[64px]">
              Your Request Has <span className="text-[#EC3024]">Been Received.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Thank you for contacting Liberty Law P.C. A member of our team will contact you shortly to discuss your criminal defense matter.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="tel:6302836421"
                className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#EC3024] px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#04304c]"
              >
                <Phone className="h-5 w-5" />
                Call (630) 283-6421
              </a>
              <a
                href="/lp-criminal-lawyer/"
                className="inline-flex min-h-14 items-center justify-center gap-2 border border-white/40 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <ArrowLeft className="h-5 w-5 text-[#EC3024]" />
                Return to Landing Page
              </a>
            </div>

            <p className="mt-7 flex items-start gap-2 text-sm leading-6 text-white/65">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#EC3024]" />
              1700 Park St., Suite 203, Naperville, IL 60563
            </p>
          </div>

          <section className="relative" aria-labelledby="next-steps-heading">
            <div className="absolute -inset-3 border border-[#EC3024]/40" aria-hidden="true" />
            <div className="relative bg-white p-6 text-[#04304c] shadow-2xl sm:p-9">
              <CheckCircle2 className="h-14 w-14 text-[#EC3024]" strokeWidth={1.5} />
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#EC3024]">
                What happens next
              </p>
              <h2 id="next-steps-heading" className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
                Prepare for Your Consultation
              </h2>

              <div className="mt-7 space-y-6">
                {nextSteps.map(({ icon: Icon, title, description }, index) => (
                  <div key={title} className="grid grid-cols-[48px_1fr] gap-4 border-t border-slate-200 pt-5">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#04304c] text-[#EC3024]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#EC3024]">
                        Step {index + 1}
                      </p>
                      <h3 className="font-display mt-1 text-xl">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-l-4 border-[#EC3024] bg-[#f4f6f3] p-4">
                <p className="font-semibold">Need immediate assistance?</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Call us directly. Our team is available 24/7 to help protect your rights and future.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-[#021f32] px-4 py-7 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Liberty Law P.C.{" "}
            <a
              href="https://libertylawfirm.net/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#EC3024] underline-offset-4 transition hover:text-white"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#EC3024]" />
            Your information is kept confidential.
          </p>
        </div>
      </footer>
    </div>
  );
};
