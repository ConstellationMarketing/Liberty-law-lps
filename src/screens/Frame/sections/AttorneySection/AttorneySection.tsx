import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#efefef] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Meet Attorney David Liberty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[400px]">
            <img
              src="/peter-wosnik-attorney-wosnik-law-1x1-1-1024x1024.jpg"
              alt="David Liberty, Attorney"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              David Liberty is an accomplished criminal defense attorney and founding partner of Liberty Law P.C. He has successfully defended clients facing a wide range of charges including DUI, drug offenses, domestic violence, and other criminal matters in Illinois.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              With extensive experience in criminal defense, David provides strategic legal representation tailored to each client's unique situation. His background and knowledge of the legal system provide valuable insight into building effective defense strategies.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              David is committed to protecting his clients' rights and achieving the best possible outcomes. He takes a personalized approach to every case, ensuring that each client receives dedicated attention and aggressive representation.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Active in the legal community, David brings dedicated advocacy to every criminal defense case. He is committed to providing exceptional legal representation to clients throughout the Naperville area and surrounding communities.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-wosnik-accent hover:bg-black text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent hover:border-black transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
