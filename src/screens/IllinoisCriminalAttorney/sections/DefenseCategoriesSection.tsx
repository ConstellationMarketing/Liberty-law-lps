import React from "react";

export const DefenseCategoriesSection = (): JSX.Element => {
  const categories = [
    {
      title: "Arrested for Theft? We Defend Your Rights",
      description:
        "If you're facing retail theft, shoplifting, petty theft, or misdemeanor theft charges, Liberty Law P.C. provides immediate legal support to protect your freedom and your future. We also handle related offenses like criminal trespass, disorderly conduct, public intoxication, and underage drinking (MIP).",
    },
    {
      title: "Charged with a Sexual Offense? We Stand By You",
      description:
        "From sexual misconduct and sexual battery to internet sex crimes, sexting charges, and child sexual abuse cases, our team crafts strong defense strategies tailored to your situation. Your rights, privacy, and future are our top priority.",
    },
    {
      title: "Facing Domestic Violence Allegations? We Fight for You",
      description:
        "If you're accused of domestic battery, aggravated domestic battery, domestic assault, or restraining order violations, Liberty Law P.C. provides aggressive representation to protect your rights and your family. We handle all related matters, including orders of protection and child endangerment domestic cases.",
    },
    {
      title: "Traffic or DUI Trouble? Protect Your Record",
      description:
        "We represent clients in DUI, impaired driving, reckless driving, and driving on a suspended license cases. Our goal is to minimize penalties and safeguard your driving record.",
    },
    {
      title: "Looking to Clear Your Record? We Can Help",
      description:
        "Liberty Law P.C. also assists clients seeking expungement and record relief, helping eligible individuals move forward with a clean slate.",
    },
  ];

  return (
    <section className="w-full bg-wosnik-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            Your Defense Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-white border-l-4 border-wosnik-accent p-6 rounded-r-lg hover:shadow-md transition-shadow duration-300${index === categories.length - 1 ? " md:col-span-2 text-center" : ""}`}
            >
              <h3 className="font-heading text-wosnik-dark text-xl md:text-2xl mb-3">
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
