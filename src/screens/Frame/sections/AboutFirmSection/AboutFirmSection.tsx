import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutFirmSection = (): JSX.Element => {
  const paragraphs = [
    "Wosnik Law is a Georgia-based law firm with over 35 years of combined experience in criminal defense and family law. Our attorneys focus on defending clients' rights and securing favorable outcomes in complex legal matters throughout the state.",
    "The firm has successfully represented hundreds of individuals facing criminal charges, from traffic violations to serious felonies. Our practice areas include DUI defense, criminal defense, divorce proceedings, and child custody matters.",
    "Founded by Peter J. Wosnik, the firm has achieved numerous not guilty verdicts and case dismissals in charges including aggravated assault, armed robbery, DUI, drug trafficking, and family violence cases. Our attorneys combine trial experience with strategic negotiation skills.",
    "With attorneys Pete Wosnik, John Schneider, and Robby King, we provide comprehensive legal representation tailored to each client's unique situation, whether facing criminal charges or navigating family law proceedings."
  ];

  const achievements = [
    "Over 35 years of combined legal experience",
    "Hundreds of Georgia criminal cases handled",
    "Not guilty verdicts in DUI, assault, and drug trafficking cases",
    "Recognized by Super Lawyers and National Trial Lawyers",
    "10/10 AVVO rating for legal excellence"
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-wosnik-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          About Wosnik Law
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="font-body text-gray-700 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-wosnik-accent rounded-lg p-6 flex flex-col items-center text-center"
            >
              <CheckCircle className="w-10 h-10 text-wosnik-dark mb-3" />
              <p className="font-body text-wosnik-dark text-sm font-medium leading-relaxed">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};