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
                At Liberty Law, P.C., we are dedicated to defending individuals charged with criminal offenses 
                in Naperville and throughout DuPage, Kane, Will, Kendall, Grundy, and DeKalb Counties. When your 
                freedom, reputation, and future are on the line, you need an experienced advocate who understands 
                the stakes and fights tirelessly on your behalf.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                Our firm has a proven track record of achieving favorable outcomes for clients facing a wide range 
                of criminal charges — from DUI and traffic violations to serious felonies. We handle every case 
                with the attention, preparation, and aggressive representation it deserves.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                We believe that everyone deserves a strong defense, no matter the charge. Our approach combines 
                thorough investigation, strategic negotiation, and courtroom advocacy to protect your rights and 
                pursue the best possible resolution.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                Whether you're facing your first criminal charge or dealing with complex legal issues, Liberty Law, 
                P.C. is here to guide you through the process with clarity, confidence, and commitment.
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
