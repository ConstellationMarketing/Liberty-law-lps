import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const services = [
    {
      title: "Felony Defense",
      description: "Aggressive legal representation for individuals facing felony charges, protecting your rights and fighting for the best possible outcome."
    },
    {
      title: "Misdemeanor Defense",
      description: "Skilled defense for misdemeanor cases, ensuring your side of the story is heard and your future is protected."
    },
    {
      title: "Criminal Case Consultation",
      description: "Personalized strategy sessions to evaluate your case, outline options, and develop an effective defense plan."
    },
    {
      title: "Post-Conviction & Appeals",
      description: "Challenging convictions and seeking post-trial relief with proven criminal defense counsel."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            Start With Proven Criminal Defense
          </h2>
          <p className="font-body text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            You're not alone — our skilled defense team stands by your side from arrest to resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-wosnik-light border border-wosnik-accent/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-heading text-wosnik-dark text-xl mb-3">
                {service.title}
              </h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-gray-700 text-base mb-6">
            Ready to discuss your case? Call us today for a free consultation.
          </p>
          <a
            href="tel:6302836421"
            className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          >
            Call (630) 283-6421
          </a>
        </div>
      </div>
    </section>
  );
};
