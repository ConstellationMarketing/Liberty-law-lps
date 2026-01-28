import React from "react";

export const HighlightBoxesSection = (): JSX.Element => {
  const highlights = [
    {
      title: "Proven Criminal Defense Results",
      description: "Track record of successful outcomes in criminal cases throughout DuPage, Kane, and Will Counties."
    },
    {
      title: "Local Naperville Advocacy",
      description: "Deep knowledge of local courts, prosecutors, and legal procedures in the Naperville area."
    },
    {
      title: "Trusted Defense for Serious Charges",
      description: "Experienced representation for felonies, misdemeanors, DUI, and post-conviction matters."
    },
    {
      title: "Free Case Evaluation",
      description: "No-obligation consultation to review your case and discuss your legal options."
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
