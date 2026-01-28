import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  const serviceHighlights = [
    "Proven criminal defense Veteran in felony and misdemeanor cases",
    "Free consultation available",
    "Successful outcomes in state courts",
    "Local Naperville representation with deep understanding of regional courts",
    "Aggressive, strategic, and client-focused advocacy"
  ];

  return (
    <section className="w-full bg-wosnik-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose Liberty Law, P.C.
          </h2>
          <p className="font-body text-wosnik-accent text-lg max-w-3xl mx-auto">
            Proven criminal defense built on local and strategic advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="font-body text-white leading-relaxed">
              Facing felony or misdemeanor charges can be stressful and life-altering, but you don't have to face them alone. Liberty Law, P.C. begins by carefully listening to understand your situation, priorities, and defense options.
            </p>

            <p className="font-body text-white leading-relaxed">
              We focus on honest guidance, tailored legal strategies, and clear communication throughout every stage of your case to ensure you feel informed and supported.
            </p>

            <p className="font-body text-white leading-relaxed">
              Our firm handles serious criminal cases with precision and determination, providing strong defense representation in both felonies and misdemeanors for clients across Naperville and surrounding counties.
            </p>

            <p className="font-body text-white leading-relaxed">
              We make sure each client understands the criminal process, potential consequences, and available options, empowering you to make informed decisions about your defense.
            </p>
          </div>

          <div className="bg-wosnik-light rounded-lg p-8">
            <h3 className="font-heading text-wosnik-dark text-2xl mb-6">
              Our Service Highlights
            </h3>
            <ul className="space-y-3">
              {serviceHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-wosnik-accent flex-shrink-0 mt-1 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-body text-gray-700 leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
