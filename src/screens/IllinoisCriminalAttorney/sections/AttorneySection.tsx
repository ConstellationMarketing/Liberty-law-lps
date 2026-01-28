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
                David Liberty is a skilled criminal defense attorney serving clients in Naperville and the surrounding 
                Illinois counties. With years of experience in criminal law, David has successfully defended clients 
                facing a wide range of charges, from misdemeanors to serious felonies.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                David's background includes extensive work in both state and federal courts. He has handled complex 
                criminal matters including DUI defense, drug crimes, theft offenses, violent crimes, and white-collar 
                criminal cases. His approach is built on thorough preparation, strategic thinking, and aggressive advocacy 
                for every client.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                A graduate of Chicago-Kent College of Law (2014), David is licensed to practice in all Illinois state 
                courts and brings a deep understanding of local court procedures, prosecutors, and judges throughout the 
                Naperville area. This local insight is invaluable in developing effective defense strategies tailored to 
                each jurisdiction.
              </p>

              <p className="font-body text-gray-700 leading-relaxed">
                David is committed to protecting his clients' rights at every stage of the criminal process. Whether 
                negotiating with prosecutors for reduced charges or fighting for acquittal at trial, he approaches every 
                case with dedication and a focus on achieving the best possible outcome for his clients.
              </p>
            </div>

            <div className="mt-8">
              <button
                className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap"
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
