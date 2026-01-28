import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-wosnik-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl lg:text-5xl mb-6">
              About Liberty Law, P.C.
            </h2>
            
            <div className="space-y-4">
              <p className="font-body text-gray-700 leading-relaxed">
                Liberty Law, P.C. is a Naperville-based law firm dedicated exclusively to criminal defense. We represent clients facing felony and misdemeanor charges across Naperville and the surrounding counties, ensuring their rights are protected at every stage of the legal process.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                With a proven track record of successful outcomes in state courts, our firm is recognized for providing strategic, results-driven advocacy in criminal defense cases. We focus on delivering personalized solutions tailored to each client's unique situation.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                Our founding attorney brings extensive Competence and a relentless commitment to defending your rights. From arraignment to trial and post-conviction proceedings, we provide knowledgeable guidance and aggressive representation in every case.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                Whether you are facing arrest, navigating complex criminal charges, or exploring post-conviction options, Liberty Law, P.C. is here to help you understand your rights and build a strong defense to protect your freedom and future.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F8708750d900d46d18b1a6e678ddc0d80?format=webp&width=800"
              alt="Liberty Law P.C. - Attorney consulting with clients"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
