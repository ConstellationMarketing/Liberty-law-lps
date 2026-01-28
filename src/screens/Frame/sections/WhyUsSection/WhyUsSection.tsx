import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyUsSection = (): JSX.Element => {
  const caseResults = [
    {
      charge: "Motorcycle DUI",
      caseNumber: "STATE V. N.B.",
      result: "NOT GUILTY",
      description: "Defendant was pulled over for speeding on his motorcycle and charged with DUI. We demanded a bench trial and the Court found him not guilty."
    },
    {
      charge: "DUI to Reckless Driving",
      caseNumber: "STATE V. R.S.",
      result: "REDUCED",
      description: "Defendant was charged with DUI and had his driver's license suspended following a single-vehicle accident. We negotiated a reduction to reckless driving and reinstatement of his license."
    },
    {
      charge: "Marijuana DUI",
      caseNumber: "STATE V. Z.P.",
      result: "DISMISSED",
      description: "Defendant was charged with DUI after marijuana was found in his vehicle. We successfully argued that there was no evidence of intoxication and resolved his case was a dismissal of the DUI and a fine only for the marijuana."
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Criminal Case Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseResults.map((caseItem, index) => {
            const getBadgeColor = (result: string) => {
              if (result === "NOT GUILTY") return "bg-green-600";
              if (result === "REDUCED") return "bg-green-600";
              if (result === "DISMISSED") return "bg-green-600";
              return "bg-green-600";
            };

            return (
              <Card key={index} className="bg-gray-50 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-heading text-wosnik-dark text-xl font-normal mb-2">
                      {caseItem.charge}
                    </h3>
                    <p className="font-body text-gray-600 text-sm italic mb-2">
                      {caseItem.caseNumber}
                    </p>
                    <div className={`inline-block ${getBadgeColor(caseItem.result)} text-white font-body font-semibold text-sm px-4 py-1 rounded uppercase`}>
                      {caseItem.result}
                    </div>
                  </div>
                  <p className="font-body text-gray-700 text-sm leading-relaxed">
                    {caseItem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
