import React from "react";
import {
  HighlightBoxesSection,
  ClientCategoriesSection,
  CriminalDefenseServicesSection,
  AboutUsSection,
  AttorneySection,
  WhyChooseUsSection,
  ContactSection,
  CallToActionMainSection,
  FooterSection
} from "./sections";

const IllinoisHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-wosnik-dark">
      {/* Navigation Bar */}
      <div className="relative w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F5af7e492db8347e48dcdefbb3332a950?format=webp&width=400"
              alt="Liberty Law P.C."
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="font-body text-[#04304c] text-xs uppercase tracking-wider">Naperville's Trusted Criminal Defense</p>
            <a
              href="tel:6302836421"
              className="font-body text-wosnik-dark hover:text-wosnik-accent transition-colors text-lg font-semibold"
            >
              (630) 283-6421
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4">
          Strong Criminal Defense When Your Freedom Is at Stake
        </h1>

        <h2 className="font-body text-wosnik-accent text-xl md:text-2xl font-semibold mb-6">
          Naperville Criminal Defense Attorneys - Liberty Law, P.C.
        </h2>

        <p className="font-body text-white text-base max-w-3xl mx-auto leading-relaxed mb-8">
          When you're facing criminal charges in Naperville or surrounding Illinois counties, you need a skilled
          defense attorney who will fight to protect your rights and your future. Liberty Law, P.C. provides
          aggressive, strategic representation for clients charged with felonies, misdemeanors, DUI, and other
          criminal offenses throughout DuPage, Kane, Will, Kendall, Grundy, and DeKalb Counties.
        </p>

        <button
          className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Request Free Consultation
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
        <HighlightBoxesSection />
        <CriminalDefenseServicesSection />
        <WhyChooseUsSection />
        <AboutUsSection />
        <AttorneySection />
        <ClientCategoriesSection />
        <CallToActionMainSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
