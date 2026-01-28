import React from "react";
import { Scale, Users, Briefcase, Award } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Scale,
      text: "When facing criminal charges or family law matters, you need experienced attorneys who understand what's at stake. Our team has helped hundreds of people charged with crimes in Georgia navigate the legal system."
    },
    {
      icon: Users,
      text: "We focus on achieving the best possible outcome for each client, whether you're facing a traffic ticket, serious felony, DUI charge, or divorce and child custody matter."
    },
    {
      icon: Briefcase,
      text: "Our attorneys bring unique insights from experience with federal, county, and city prosecutors' offices, understanding firsthand how prosecutors build cases - knowledge we now use to defend our clients."
    },
    {
      icon: Award,
      text: "With attorneys recognized by Super Lawyers Rising Stars, National Trial Lawyers Top 40 Under 40, and maintaining a 10/10 AVVO rating, we combine legal excellence with personalized attention to protect your interests."
    }
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-3">
          Why Choose Wosnik Law, LLC
        </h2>
        <p className="font-body text-gray-600 text-center text-lg mb-12">
          Over 35 years of combined experience defending your rights and freedom
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-wosnik-accent p-6 rounded-lg flex flex-col items-center text-center"
              >
                <IconComponent className="w-12 h-12 text-wosnik-dark mb-4" />
                <p className="font-body text-wosnik-dark text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
