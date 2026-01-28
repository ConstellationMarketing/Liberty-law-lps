import React from "react";

export const HighlightBoxesSection = (): JSX.Element => {
  const highlights = [
    {
      title: "Proven Criminal Defense Results",
      description: "Trusted defense lawyer with a strong track record of favorable outcomes in felony and misdemeanor criminal cases."
    },
    {
      title: "Local Naperville Advocacy",
      description: "Dedicated representation for clients in Naperville and surrounding counties with personalized attention and strategic legal support."
    },
    {
      title: "Trusted Defense for Serious Charges",
      description: "Aggressive criminal defense in felony and misdemeanor matters, protecting your rights and future throughout DuPage, Kane, Will, Kendall, Grundy, and DeKalb counties."
    },
    {
      title: "Free Case Evaluation",
      description: "Speak directly with an Accomplished criminal defense attorney today to review your case and explore your options at no cost."
    }
  ];

  return (
    <section className="w-full bg-wosnik-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white border border-wosnik-accent/20 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-heading text-wosnik-dark text-xl mb-3">
                {highlight.title}
              </h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
