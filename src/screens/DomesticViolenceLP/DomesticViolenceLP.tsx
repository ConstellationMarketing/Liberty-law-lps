import { FormEvent } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock3,
  Gavel,
  MapPin,
  MessageSquareText,
  Phone,
  Quote,
  Shield,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fa256a0fb50494811bd2a317d7b39f7d5?format=webp&width=800&height=1200";
const ATTORNEY_IMAGE_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F3882d3e3483c4524a873012d9c8cd4b8?format=webp&width=1000";

const benefits = [
  {
    icon: Shield,
    title: "Defense for a Wide Range of Domestic Violence Charges",
    description:
      "Whether you're facing allegations of domestic battery, aggravated domestic battery, orders of protection, or restraining order violations, Liberty Law P.C. provides strategic legal representation focused on protecting your rights, reputation, freedom, and future.",
  },
  {
    icon: Gavel,
    title: "Customized Defense Strategy for Your Case",
    description:
      "Every case presents unique facts and legal challenges. Attorney David Liberty carefully reviews the evidence, identifies weaknesses in the prosecution's case, and develops a defense strategy tailored to the specific allegations and circumstances surrounding your case.",
  },
  {
    icon: Clock3,
    title: "Early Intervention Can Strengthen Your Defense",
    description:
      "The sooner you have legal representation, the more opportunities there are to protect your rights and build a strong defense. Whether you're under investigation, have been arrested, or are facing court proceedings, David Liberty acts quickly to safeguard your interests and pursue the best possible outcome.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Representation Every Step of the Way",
    description:
      "Domestic violence allegations can affect your freedom, family, employment, and future. Throughout your case, you'll receive clear communication, practical legal guidance, and committed representation focused on achieving the best possible resolution.",
  },
];

const reasons = [
  {
    title: "Strategic Domestic Violence Defense",
    description:
      "Attorney David Liberty takes a strategic approach to every case, carefully analyzing the facts, challenging the evidence, and developing a defense tailored to your specific circumstances.",
  },
  {
    title: "Client-Focused Communication",
    description:
      "You'll stay informed throughout your case with clear communication, honest legal guidance, and answers to your questions every step of the way.",
  },
  {
    title: "Former Prosecutor on Your Side",
    description:
      "From the moment you're investigated or charged, David Liberty works to protect your rights, challenge the prosecution's case, and pursue the best possible outcome.",
  },
  {
    title: "Serving Naperville & Surrounding Illinois Counties",
    description:
      "Liberty Law P.C. proudly represents clients throughout Naperville, DuPage, Will, Kane, Kendall, DeKalb, and Grundy Counties, providing dedicated defense for individuals accused of domestic violence.",
  },
];

const testimonials = [
  {
    name: "Tony Davis",
    text: "David assisted me with a traffic matter. His courteous, prompt, and professional manner made it easy. His fees were at the top of the scale I'd be willing to pay, but he gave a discount for upfront payment. Thank you, David. I'll recommend you to anyone who needs your services.",
  },
  {
    name: "Jaclyn Whitson",
    text: "I had a great experience here! David is experienced and kind. He helped me navigate a tough situation and explained things well.",
  },
  {
    name: "Jonathan Berning",
    text: "David was amazing to work with! I would have been lost without his guidance!! Cannot recommend him enough.",
  },
];

const scrollToForm = () =>
  document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });

const ConsultationForm = (): JSX.Element => {
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();

    formData.forEach((value, key) => body.append(key, value.toString()));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");
      navigate("/thank-you?from=domestic-violence");
    } catch {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const fieldClass =
    "mt-1.5 w-full border border-slate-300 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-[#EC3024] focus:ring-1 focus:ring-[#EC3024]";

  return (
    <div id="consultation-form" className="relative scroll-mt-28">
      <div className="absolute -inset-3 border border-[#EC3024]/40" aria-hidden="true" />
      <div className="relative bg-white p-6 text-[#04304c] shadow-2xl sm:p-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EC3024]">
          Your Liberty, Our Priority
        </p>
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Request Your Free Consultation
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Tell us about your situation and our team will contact you promptly.
        </p>

        <form
          name="consultation-request"
          method="POST"
          action="/thank-you?from=domestic-violence"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="mt-6 space-y-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="consultation-request" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Name
              <input
                className={fieldClass}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Full name"
                required
              />
            </label>
            <label className="block text-sm font-semibold">
              Phone
              <input
                className={fieldClass}
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(630) 000-0000"
                required
              />
            </label>
          </div>

          <label className="block text-sm font-semibold">
            Email
            <input
              className={fieldClass}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@email.com"
              required
            />
          </label>

          <label className="block text-sm font-semibold">
            Case Details
            <textarea
              className={`${fieldClass} resize-none`}
              name="message"
              rows={4}
              placeholder="Briefly tell us about your case"
              required
            />
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 bg-[#EC3024] px-6 py-4 font-bold text-white transition hover:bg-[#04304c]"
          >
            Free Initial Consultation
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-[#EC3024]" />
            Your information is kept confidential.
          </p>
        </form>
      </div>
    </div>
  );
};

export const DomesticViolenceLP = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white pb-[60px] font-outfit text-[#04304c] sm:pb-0">
      <Helmet>
        <title>Naperville’s Trusted Domestic Violence Defense</title>
        <meta
          name="description"
          content="Liberty Law P.C. provides strategic domestic violence defense in Naperville and DuPage County, Illinois. Book a free consultation with Attorney David Liberty."
        />
        <meta property="og:title" content="Naperville’s Trusted Domestic Violence Defense" />
        <meta
          property="og:description"
          content="Aggressive domestic violence defense protecting your freedom, reputation, and future."
        />
        <meta property="og:image" content={LOGO_URL} />
      </Helmet>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04304c] shadow-xl">
        <div className="flex h-[68px] items-center justify-center px-4 sm:hidden">
          <img src={LOGO_URL} alt="Liberty Law P.C." className="h-12 w-auto max-w-[210px] object-contain" />
        </div>
        <div className="mx-auto hidden h-[76px] max-w-7xl items-center justify-between gap-4 px-6 sm:flex lg:h-[92px] lg:px-8">
          <a href="#top" className="flex h-14 items-center" aria-label="Liberty Law P.C. home">
            <img src={LOGO_URL} alt="Liberty Law P.C." className="h-12 w-auto max-w-[250px] object-contain lg:h-16 lg:max-w-[310px]" />
          </a>
          <a
            href="tel:6302836421"
            className="inline-flex items-center gap-2 bg-[#EC3024] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#04304c] sm:text-base"
          >
            <Phone className="h-5 w-5" />
            Call (630) 283-6421
          </a>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 flex sm:hidden">
        <a
          href="tel:6302836421"
          className="flex flex-1 items-center justify-center gap-2 bg-[#04304c] px-2 py-4 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4 text-[#EC3024]" />
          Call Now 24/7
        </a>
        <button
          type="button"
          onClick={scrollToForm}
          className="flex flex-1 items-center justify-center bg-[#EC3024] px-2 py-4 text-sm font-bold text-white"
        >
          Free Consultation
        </button>
      </div>

      <main id="top">
        <section className="relative overflow-hidden bg-[#04304c] text-white">
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
            className="pointer-events-none absolute -left-28 bottom-[-100px] w-[540px] max-w-none opacity-[0.06] grayscale brightness-[3] mix-blend-screen"
          />
          <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#EC3024]/20 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
              <div>
              <div className="mb-6 inline-flex items-center gap-2 border border-[#EC3024]/60 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
                <MapPin className="h-4 w-4 text-[#EC3024]" />
                Naperville & DuPage County, Illinois
              </div>

              <h1 className="font-display max-w-3xl text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-[64px]">
                Aggressive Domestic Violence Defense <span className="text-[#EC3024]">Protecting Your Future.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                If you've been accused of domestic violence, your freedom, reputation, and future are on the line. Attorney David Liberty provides strategic defense for individuals facing domestic violence charges, protecting your rights and pursuing the best possible outcome.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#EC3024] px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#04304c]"
                >
                  Book Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:6302836421"
                  className="inline-flex min-h-14 items-center justify-center gap-2 border border-white/40 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-[#EC3024]" />
                  Call Now Available 24/7
                </a>
              </div>

              </div>

              <ConsultationForm />
            </div>

            <div className="mt-12 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Free Consultation Available",
                "Former City Prosecutor",
                "Highly Rated on Google",
                "24/7 Availability",
                "Serving Naperville & DuPage County, IL",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-xs font-medium text-white/85 lg:text-sm">
                  <Check className="h-4 w-4 shrink-0 text-[#EC3024]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f6f3] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EC3024]">Core Benefits</p>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl">How We Help With Your Domestic Violence Defense</h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group border border-[#04304c]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#EC3024] hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#04304c] text-[#EC3024]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl leading-tight">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="relative flex min-h-[540px] items-end justify-center overflow-hidden bg-[#04304c] px-8 pt-12 lg:min-h-[680px]">
              <img
                src={LOGO_URL}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-8 w-[72%] -translate-x-1/2 opacity-[0.12] grayscale brightness-[3] mix-blend-screen"
              />
              <div className="absolute inset-x-10 bottom-0 top-16 border border-[#EC3024]/30" aria-hidden="true" />
              <img
                src={ATTORNEY_IMAGE_URL}
                alt="Attorney David Liberty"
                className="relative z-10 h-[500px] w-full max-w-[520px] object-cover object-top lg:h-[620px]"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#04304c] via-[#04304c]/60 to-transparent px-8 pb-8 pt-20 text-white">
                <p className="font-display text-2xl">David Liberty</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/70">Domestic Violence Defense Attorney</p>
              </div>
            </div>

            <div className="flex items-center px-4 py-16 sm:px-10 lg:px-16 lg:py-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EC3024]">Why Choose Us</p>
                <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">Why Choose Liberty Law P.C.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Facing domestic violence charges is serious. Here's what sets our defense apart.
                </p>

                <div className="mt-9 space-y-7">
                  {reasons.map((reason, index) => (
                    <div key={reason.title} className="grid grid-cols-[48px_1fr] gap-4 border-t border-slate-200 pt-6">
                      <span className="font-display text-2xl text-[#EC3024]">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="font-display text-2xl">{reason.title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#04304c] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EC3024]">Client Testimonials</p>
                <h2 className="font-display mt-3 text-4xl sm:text-5xl">What Clients Say About Liberty Law</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex text-[#EC3024]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-white/70">Highly rated on Google</span>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="border border-white/15 bg-white/[0.04] p-7 sm:p-8">
                  <Quote className="h-9 w-9 text-[#EC3024]" />
                  <blockquote className="font-display mt-6 text-xl italic leading-8 text-white/90">
                    “{testimonial.text}”
                  </blockquote>
                  <figcaption className="mt-7 border-t border-white/15 pt-5 font-semibold">
                    {testimonial.name}
                    <span className="ml-2 font-normal text-white/55">Google Review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EC3024] px-4 py-14 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Protect your future today</p>
              <h2 className="font-display mt-2 text-4xl sm:text-5xl">Ready to Discuss Your Domestic Violence Defense Case?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/85">
                If you've been accused of domestic violence, don't wait to protect your rights and your future. Contact Attorney David Liberty at Liberty Law P.C. today to discuss your case and learn how we can build a strong defense on your behalf.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#04304c] px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#04304c]"
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="tel:6302836421"
                className="inline-flex min-h-14 items-center justify-center gap-2 border-2 border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#04304c]"
              >
                <Phone className="h-5 w-5" />
                (630) 283-6421
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#021f32] px-4 pb-8 pt-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img src={LOGO_URL} alt="Liberty Law P.C." className="h-16 w-auto max-w-[280px] object-contain" />
            <p className="mt-5 max-w-md leading-7 text-white/65">
              Serving Naperville, DuPage, Will, Kane, Kendall, DeKalb & Grundy Counties, IL.
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm text-white/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EC3024]" />
              1700 Park St., Suite 203, Naperville, IL 60563
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl">Domestic Violence Defense</h3>
            <p className="mt-4 leading-8 text-white/65">
              Domestic Battery Defense<br />
              Aggravated Domestic Battery<br />
              Orders of Protection<br />
              Violation Defense
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl">Free Consultation</h3>
            <a href="tel:6302836421" className="mt-4 flex items-center gap-2 text-lg font-semibold text-[#EC3024]">
              <Phone className="h-5 w-5" />
              (630) 283-6421
            </a>
            <button
              type="button"
              onClick={scrollToForm}
              className="mt-4 inline-flex items-center gap-2 font-semibold text-white underline decoration-[#EC3024] decoration-2 underline-offset-4"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
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
            <MessageSquareText className="h-4 w-4" />
            Free consultation available · 24/7 availability
          </p>
        </div>
      </footer>
    </div>
  );
};
