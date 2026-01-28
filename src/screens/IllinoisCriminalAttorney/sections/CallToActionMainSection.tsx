import React from "react";

export const CallToActionMainSection = (): JSX.Element => {
  return (
    <section className="w-full bg-wosnik-accent py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-wosnik-dark text-2xl md:text-3xl lg:text-4xl mb-2">
              Call Now for Criminal Case Help
            </h2>
            <p className="font-body text-wosnik-dark/80 text-sm md:text-base">
              Free consultations available — speak with an experienced criminal defense attorney today
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="tel:6302836421"
              className="bg-wosnik-dark hover:bg-wosnik-dark/90 text-wosnik-accent font-inter font-medium text-base md:text-lg px-8 py-4 rounded-full border-2 border-wosnik-dark transition-all duration-150 inline-block whitespace-nowrap"
            >
              (630) 283-6421
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
