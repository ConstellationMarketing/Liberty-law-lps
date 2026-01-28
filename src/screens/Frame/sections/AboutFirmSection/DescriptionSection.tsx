import React from "react";
import { Users, Award, Shield, Heart } from "lucide-react";

export const DescriptionSection = (): JSX.Element => {
  // Data for paragraphs to enable mapping
  const paragraphs = [
    "Before you agree to anything with the prosecution, let our Springfield criminal defense law firm review your case. With deep experience in the legal system of Illinois, our attorneys promise to deliver clients an honest assessment of their situation and a clear path forward, commiting ourselves to your defense. Attorney Sarah Johnson has years of experience representing clients in Sangamon County and Illinois; let our firm put it to work for you.",
    "You may come across other lawyers who don't have a clear specialty or practice areas they are experienced in. The Illinois attorney and their law firm may do a little personal injury, some estate planning, divorce, or family law. If you've been charged with a crime, your best bet is finding representation with a reputation for success.",
    "Constellation Law Firm has a broad area of coverage, with this office conveniently located in Springfield, the state capital. Our firm represents clients against different criminal law charges such as DUI, drug charges, violent crimes, sex offenses, and theft offenses, including burglary and robbery. An experienced Springfield criminal defense lawyer like Sarah Johnson can help you understand the criminal charges brought against you and guide you through the whole process while fighting for the best possible outcome.",
    "Contact us today about your court matter and speak with a professional attorney close to where you live. We are serving Springfield and can help individuals and families in Decatur, Chatham, Rochester, Sherman, Auburn, Pawnee, and more. We represent individuals in all types of situations. Even if you've been arrested in a surrounding area, our high-quality staff can most likely help.",
    "The phone call is free, our Springfield, Illinois, law firm would love to hear your story and use our experience to help.",
  ];

  const highlights = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Years of experience in Georgia's legal system"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful defense cases"
    },
    {
      icon: Shield,
      title: "Comprehensive Defense",
      description: "Full range of criminal defense services"
    },
    {
      icon: Heart,
      title: "Personal Attention",
      description: "Every client receives dedicated, personalized care"
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal text-[#434343] text-center mb-6 font-['Playfair_Display',Helvetica] leading-[50px]">
            About Constellation Law
          </h2>
          <div className="w-24 h-1 bg-[#ff8a00] mx-auto mb-8"></div>
          <h3 className="text-2xl font-normal text-[#182246] mb-8 font-['Montserrat',Helvetica] leading-[32px]">
            Our team is here for one reason: you.
          </h3>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#ff8a00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#e67d00] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-normal text-[#182246] mb-2 font-['Montserrat',Helvetica]">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 font-['Montserrat',Helvetica]">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((paragraph, index) => (
            <div key={`paragraph-${index}`} className="mb-8">
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#ff8a00] p-6 hover:shadow-md transition-shadow duration-300">
                <p className="text-lg font-medium text-black font-['Montserrat',Helvetica] leading-[28.8px]">
                  {paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-[#182246] rounded-2xl p-12">
          <h3 className="text-3xl font-normal text-white mb-4 font-['Playfair_Display',Helvetica]">
            Ready to Discuss Your Case?
          </h3>
          <p className="text-xl text-[#cbd5e0] mb-8 font-['Montserrat',Helvetica] max-w-2xl mx-auto">
            The phone call is free. Our Springfield, Illinois law firm would love to hear your story and use our experience to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:6784036418"
              className="bg-[#ff8a00] hover:bg-[#e67d00] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (678) 403-6418
            </a>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#182246] hover:bg-[#1a2654] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Consultation
            </button>
            <span className="text-[#cbd5e0] font-['Montserrat',Helvetica]">
              Available 24/7 • Free Consultation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};