import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  const serviceHighlights = [
    "Aggressive representation for felonies, misdemeanors, DUI, and traffic offenses",
    "Free initial consultations to review your case and discuss your options",
    "Local expertise in Naperville and surrounding county courts",
    "Personalized defense strategies tailored to your unique situation",
    "Proven track record of favorable outcomes for our clients"
  ];

  return (
    <section className="w-full bg-wosnik-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose Liberty Law, P.C.
          </h2>
          <p className="font-body text-wosnik-accent text-lg max-w-3xl mx-auto">
            Proven criminal defense built on local knowledge and strategic advocacy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="font-body text-white leading-relaxed">
              When you're facing criminal charges, the attorney you choose can make all the difference. At Liberty 
              Law, P.C., we combine extensive courtroom experience with a deep understanding of Illinois criminal 
              law to provide the strong defense you need.
            </p>

            <p className="font-body text-white leading-relaxed">
              We know the local courts, the prosecutors, and the judges. This insight allows us to develop defense 
              strategies that are not only legally sound but also tailored to the specific dynamics of your case and 
              jurisdiction.
            </p>

            <p className="font-body text-white leading-relaxed">
              Our firm handles every type of criminal matter, from minor traffic violations to serious felony charges. 
              We approach each case with the same level of dedication and attention, because we understand that every 
              charge can have serious consequences for your future.
            </p>

            <p className="font-body text-white leading-relaxed">
              Whether we're negotiating with prosecutors for reduced charges or taking your case to trial, you can 
              trust that Liberty Law, P.C. will fight tirelessly to protect your rights and pursue the best possible 
              outcome.
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
