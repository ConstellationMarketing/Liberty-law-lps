import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#efefef] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Meet Attorney Peter J. Wosnik
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[400px]">
            <img
              src="/peter-wosnik-attorney-wosnik-law-1x1-1-1024x1024.jpg"
              alt="Peter J. Wosnik, Attorney"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Peter J. Wosnik is an accomplished trial lawyer and founding partner of Wosnik Law, LLC. He has achieved not guilty verdicts for clients facing charges including DUI, homicide by vehicle, child cruelty, sexual battery, drug trafficking, and aggravated assault.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              A 2017 graduate of Emory University School of Law and Candler School of Theology, Pete earned merit scholarships and served as president of Emory Law's Criminal Law Society. His internships with federal, county, and city prosecutors' offices provide valuable insight into prosecution strategies.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Pete has been recognized as a Rising Star by Super Lawyers since 2023, named to the National Trial Lawyers' Top 40 Under 40 Criminal Defense, and maintains a 10/10 AVVO rating. He serves as past president of the Walton County Bar Association.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Active in the community, Pete is a member of the Rotary Club of Monroe, the Criminal Law Section of the State Bar of Georgia, and serves on the board of Walton Empowers. He brings dedicated advocacy to every criminal defense and family law case.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
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
