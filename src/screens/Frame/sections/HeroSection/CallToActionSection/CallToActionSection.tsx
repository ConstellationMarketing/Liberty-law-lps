import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[400px] md:h-[478px] bg-blend-darken [background:url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%)]">
      {/* Navigation Bar */}
      <div className="relative w-full h-[60px] md:h-[83px] bg-white">
        <div className="absolute w-[180px] md:w-[250px] h-6 md:h-9 top-[17px] md:top-[23px] left-4 md:left-24">
          <img 
            src="/logo.png" 
            alt="Constellation Law - A Criminal Defense Law Firm" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute h-[60px] md:h-[83px] top-0 right-0 bg-[#182246] flex items-center">
          <div className="w-[160px] md:w-[216px] h-[60px] md:h-[83px] bg-[#182246] flex flex-col items-center justify-center px-2">
            <a
              href="tel:6784036418"
              className="text-sm md:text-[21px] text-center tracking-[1px] md:tracking-[3.00px] leading-[16px] md:leading-[23.1px] [font-family:'Montserrat',Helvetica] font-medium text-white hover:text-[#ff8a00] transition-colors duration-300"
            >
              (678) 403-6418
            </a>
            <p className="mt-1 [font-family:'Playfair_Display',Helvetica] font-medium text-white text-[8px] md:text-[11px] text-center tracking-[2px] md:tracking-[4.00px] leading-[12px] md:leading-[19.8px]">
              CALL YOUR ATTORNEY
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-[1130px] mx-auto mt-8 md:mt-[74px] px-4 md:px-8">
        <p className="[text-shadow:0px_0px_6.9px_#00000066] [font-family:'Playfair_Display',Helvetica] font-medium text-[#cbd5e0] text-lg md:text-[23px] tracking-[-0.5px] md:tracking-[-1.00px] leading-[22px] md:leading-[25.3px] text-center md:text-left">
          Trusted Criminal Defense in Springfield
        </p>

        <h1 className="mt-4 md:mt-[30px] [text-shadow:0px_0px_16.5px_#00000066] [font-family:'Montserrat',Helvetica] font-medium text-white text-2xl md:text-4xl lg:text-[55px] tracking-[0] leading-[28px] md:leading-[44px] lg:leading-[60.5px] text-center md:text-left">
          Experienced. Respected. Relentless in Your Defense.
        </h1>

        <Button 
          className="mt-6 md:mt-[38px] w-full md:w-[347px] h-12 md:h-[59px] bg-[#ff8a00] rounded-[100px] border-2 border-solid hover:bg-[#e67e00] [font-family:'Montserrat',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-[24px] md:leading-[30.6px] mx-auto md:mx-0 block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule a Free Consultation
        </Button>
      </div>
    </section>
  );
};
