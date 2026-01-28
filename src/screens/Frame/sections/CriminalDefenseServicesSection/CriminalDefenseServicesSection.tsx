import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const practiceAreas = [
    { title: "DUI Defense", icon: "→" },
    { title: "Drug Charges", icon: "→" },
    { title: "Fraud Charges", icon: "→" },
    { title: "Domestic Violence", icon: "→" },
    { title: "Misdemeanor Crimes", icon: "→" },
    { title: "Theft Charges", icon: "→" },
  ];

  return (
    <section id="practice-areas" className="w-full bg-wosnik-light py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
            Experienced Legal Defense When It Matters Most
          </h2>
          <p className="font-body text-wosnik-dark/70 text-base max-w-3xl mx-auto mb-8">
            Facing criminal charges or family law matters? Our attorneys focus on achieving the best possible results for each client.
          </p>
          <h3 className="font-heading text-wosnik-dark text-2xl font-normal">
            Legal Services We Provide
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg py-4 px-6"
            >
              <span className="font-body text-wosnik-dark text-base font-medium">{area.title}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-wosnik-accent rounded-lg p-12 text-center">
          <h3 className="font-heading text-wosnik-dark text-2xl md:text-3xl font-normal mb-6">
            Call Now for Criminal Defense Help
          </h3>

          <a
            href="tel:6784036418"
            className="inline-block font-heading text-wosnik-dark text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (678) 403-6418
          </a>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:6784036418"
              className="bg-wosnik-dark hover:bg-wosnik-dark/90 text-white font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Free consultations available
            </a>

            <p className="font-body text-wosnik-dark text-base">
              speak directly with an experienced Georgia attorney today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};