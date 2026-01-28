import React from "react";

export const ClientCategoriesSection = (): JSX.Element => {
  const categories = [
    {
      title: "Individuals Facing Arrest",
      description: "Immediate legal support from a dedicated criminal defense attorney to protect your rights from the moment of arrest."
    },
    {
      title: "Charged with Criminal Offenses",
      description: "Strong defense strategies for felony and misdemeanor charges to safeguard your freedom and future."
    },
    {
      title: "Traffic & DUI Defense",
      description: "Skilled representation to minimize penalties and protect your driving record in traffic-related and impaired driving cases."
    },
    {
      title: "Record Relief & Expungement",
      description: "Legal guidance to explore expungement opportunities and help clear your criminal record where eligible."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            Who We Help
          </h2>
          <p className="font-body text-gray-700 text-lg max-w-3xl mx-auto">
            Liberty Law P.C. serves clients throughout Naperville and surrounding counties with dedicated criminal defense representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-wosnik-light border-l-4 border-wosnik-accent p-6 rounded-r-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-heading text-wosnik-dark text-2xl mb-3">
                {category.title}
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
