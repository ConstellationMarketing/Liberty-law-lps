import React from "react";
import { Button } from "../../../../components/ui/button";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#182246] py-8 md:py-16">
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center gap-6 md:gap-8 px-4">
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="font-['Playfair_Display',Helvetica] font-normal text-2xl md:text-3xl lg:text-5xl text-white text-center leading-[28px] md:leading-[35px] lg:leading-[50px] mb-3 md:mb-4">
            You Deserve a Lawyer Who Fights for You
          </h2>
          <p className="font-['Montserrat',Helvetica] font-medium text-base md:text-lg lg:text-xl text-[#cbd5e0] text-center leading-[24px] md:leading-[27px] lg:leading-[30px] max-w-2xl mx-auto">
            Don't face criminal charges alone. Get the experienced, aggressive defense you deserve. Call now for your free consultation.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="font-['Playfair_Display',Helvetica] font-medium text-xl md:text-2xl lg:text-3xl text-white text-center leading-[24px] md:leading-[30px] lg:leading-[39.6px] mb-4 md:mb-6">
            Call Us Now
          </h3>
          
          <Button
            className="bg-[#ff8a00] hover:bg-[#e67d00] text-white rounded-[100px] border-2 border-solid px-6 md:px-12 py-3 md:py-6 h-auto shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="font-['Montserrat',Helvetica] font-bold text-base md:text-lg lg:text-xl text-center leading-[24px] md:leading-[27px] lg:leading-[30.6px]">
              Get Your Free Consultation
            </span>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-4 md:mt-6">
          <p className="font-['Montserrat',Helvetica] font-medium text-base md:text-lg text-[#cbd5e0] text-center leading-[24px] md:leading-[27px]">
            Available 24/7 • Free Consultation • No Obligation
          </p>
          <p className="font-['Montserrat',Helvetica] font-medium text-sm md:text-base text-white text-center leading-[20px] md:leading-[24px] mt-2">
            Serving Springfield, Decatur, Chatham, Rochester, Sherman, Auburn, Pawnee & Surrounding Areas
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ff8a00] font-['Montserrat',Helvetica]">
              Years of Experience
            </div>
            <div className="text-white font-['Montserrat',Helvetica] mt-1 text-sm md:text-base">
              Defending Clients in Georgia
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ff8a00] font-['Montserrat',Helvetica]">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="text-white font-['Montserrat',Helvetica] mt-1 text-sm md:text-base">
              5-Star Google Reviews
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ff8a00] font-['Montserrat',Helvetica]">
              100%
            </div>
            <div className="text-white font-['Montserrat',Helvetica] mt-1 text-sm md:text-base">
              Dedicated to Your Defense
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};