import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            Meet Attorney David Liberty
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F3882d3e3483c4524a873012d9c8cd4b8?format=webp&width=800"
              alt="Attorney David Liberty"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div>
            <div className="space-y-4">
              <p className="font-body text-gray-700 leading-relaxed">
                Attorney David Liberty is an Qualified Naperville criminal defense lawyer who has represented clients facing felony and misdemeanor charges across DuPage, Kane, Will, Kendall, and Grundy counties.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                His background as a former prosecutor and extensive knowledge in criminal defense give him unique insight into how cases are evaluated and tried. This allows him to craft aggressive, tailored defense strategies for each client.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                David earned his Juris Doctor from Chicago-Kent College of Law in 2014, where he was recognized for outstanding service to the legal community. His career also includes work with the Cook County Public Defender's Homicide Task Force, providing him with hands-on knowledge in complex criminal matters.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                From felony charges to misdemeanor cases, Attorney David Liberty combines strategic thinking, in-depth legal knowledge, and relentless advocacy to protect every client's rights, freedom, and future.
              </p>
            </div>

            <div className="mt-8">
              <button
                className="bg-wosnik-accent hover:bg-black text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent hover:border-black transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
