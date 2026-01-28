import React from "react";

export const CallToActionMainSection = (): JSX.Element => {
  return (
    <section className="w-full bg-wosnik-accent py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-6">
          Ready to Discuss Your Case?
        </h2>
        <p className="font-body text-wosnik-dark text-lg mb-8 max-w-2xl mx-auto">
          Don't face criminal charges or family law matters alone. Contact our experienced team today for a confidential consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:6784036418"
            className="bg-wosnik-dark text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Call Now: (678) 403-6418
          </a>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-wosnik-dark border-2 border-wosnik-dark font-body font-semibold px-8 py-4 rounded-lg hover:bg-wosnik-dark hover:text-white transition-all"
          >
            Request Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};