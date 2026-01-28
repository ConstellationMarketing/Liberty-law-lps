import React from "react";
import { CallToActionMainSection } from "../Frame/sections/CallToActionMainSection";
import { ContactSection } from "../Frame/sections/ContactSection";
import { FooterSection } from "../Frame/sections/FooterSection";
import { ClientTestimonialsSection } from "../Frame/sections/ClientTestimonialsSection";
import { CriminalDefenseServicesSection } from "../Frame/sections/CriminalDefenseServicesSection";
import { WhyUsSection } from "../Frame/sections/WhyUsSection";
import { WhyChooseUsSection } from "../Frame/sections/WhyChooseUsSection";
import { AboutUsSection } from "../Frame/sections/AboutUsSection";
import { AttorneySection } from "../Frame/sections/AttorneySection";
import { BadgesSection } from "../Frame/sections/BadgesSection";

const IllinoisHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-wosnik-dark">
      {/* Navigation Bar */}
      <div className="relative w-full bg-wosnik-dark border-b border-wosnik-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/wosnik-law-logo-white-gold-min.png"
              alt="Wosnik Law"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="font-body text-wosnik-accent text-xs uppercase tracking-wider">Se habla español Call 24/7</p>
            <a
              href="tel:6784036418"
              className="font-body text-white hover:text-wosnik-accent transition-colors text-lg font-semibold"
            >
              (678) 403-6418
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4">
          Illinois Criminal Defense Attorney
        </h1>

        <h2 className="font-body text-wosnik-accent text-xl md:text-2xl font-semibold mb-6">
          Expert Legal Representation for Criminal Charges in Illinois
        </h2>

        <p className="font-body text-white text-base max-w-3xl mx-auto leading-relaxed mb-8">
          Facing criminal charges in Illinois? Our experienced criminal defense attorneys provide aggressive representation to protect your rights and freedom. With proven success in Illinois courts, we fight for the best possible outcome in your case.
        </p>

        <button
          className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Your Free Consultation
        </button>
      </div>
    </section>
  );
};

export const IllinoisCriminalAttorney = (): JSX.Element => {
  return (
    <div className="w-full bg-wosnik-light">
      <div className="flex flex-col">
        <IllinoisHeroSection />
        <BadgesSection />
        <CriminalDefenseServicesSection />
        <WhyChooseUsSection />
        <AboutUsSection />
        <AttorneySection />
        <WhyUsSection />
        <ClientTestimonialsSection />
        <CallToActionMainSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
