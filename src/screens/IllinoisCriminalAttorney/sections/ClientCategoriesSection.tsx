import React from "react";

export const ClientCategoriesSection = (): JSX.Element => {
  const categories = [
    {
      title: "Individuals Facing Arrest",
      description: "If you're under investigation or facing arrest, get immediate legal guidance to protect your rights from the start."
    },
    {
      title: "Charged with Criminal Offenses",
      description: "Whether you're charged with a felony or misdemeanor, we provide aggressive defense to fight for the best outcome."
    },
    {
      title: "Traffic & DUI Defense",
      description: "From traffic violations to DUI charges, we help minimize penalties and protect your driving privileges."
    },
    {
      title: "Record Relief & Expungement",
      description: "Clear your criminal record through expungement or sealing to move forward with a fresh start."
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
