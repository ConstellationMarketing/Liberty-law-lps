import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "Over 35 years of combined legal experience",
    "Hundreds of Georgia criminal cases handled",
    "Not guilty verdicts in DUI, assault, and drug trafficking cases",
    "Recognized by Super Lawyers and National Trial Lawyers",
    "10/10 AVVO rating for legal excellence"
  ];

  return (
    <section id="about-us" className="w-full bg-white pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          About Wosnik Law
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full mb-12 max-w-4xl">
            <img
              src="/image (15).png"
              alt="Wosnik Law team"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex flex-col space-y-6 text-center max-w-3xl mb-12">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Wosnik Law is a Georgia-based law firm with over 35 years of combined experience in criminal defense and family law. Our attorneys focus on defending clients' rights and securing favorable outcomes in complex legal matters throughout the state.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              The firm has successfully represented hundreds of individuals facing criminal charges, from traffic violations to serious felonies. Our practice areas include DUI defense, criminal defense, divorce proceedings, and child custody matters.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Founded by Peter J. Wosnik, the firm has achieved numerous not guilty verdicts and case dismissals in charges including aggravated assault, armed robbery, DUI, drug trafficking, and family violence cases. Our attorneys combine trial experience with strategic negotiation skills.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              With attorneys Pete Wosnik, John Schneider, and Robby King, we provide comprehensive legal representation tailored to each client's unique situation, whether facing criminal charges or navigating family law proceedings.
            </p>
          </div>

          <div className="w-full">
            <h3 className="font-heading text-wosnik-dark text-2xl font-normal text-center mb-8">
              Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-wosnik-accent rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <CheckCircle className="w-10 h-10 text-wosnik-dark mb-3" />
                  <p className="font-body text-wosnik-dark text-sm font-medium leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
