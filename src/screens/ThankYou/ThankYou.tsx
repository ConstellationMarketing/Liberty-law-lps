import React from "react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-wosnik-light">
      {/* Navigation Bar */}
      <div className="relative w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F5af7e492db8347e48dcdefbb3332a950?format=webp&width=400"
              alt="Liberty Law P.C."
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="font-body text-[#04304c] text-xs uppercase tracking-wider">Naperville's Trusted Criminal Defense</p>
            <a
              href="tel:6302836421"
              className="font-body text-wosnik-dark hover:text-wosnik-accent transition-colors text-lg font-semibold"
            >
              (630) 283-6421
            </a>
          </div>
        </div>
      </div>

      {/* Thank You Content */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-wosnik-accent rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-wosnik-dark text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            Thank You for Contacting Us
          </h1>

          {/* Subheading */}
          <p className="font-body text-gray-700 text-xl md:text-2xl mb-8">
            We've received your message and will respond shortly.
          </p>

          {/* Message */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="font-body text-gray-700 text-lg leading-relaxed mb-4">
              Your consultation request has been successfully submitted. A member of our team will review your 
              information and contact you within 24 hours to discuss your case.
            </p>
            <p className="font-body text-gray-700 text-lg leading-relaxed mb-4">
              At Liberty Law, P.C., we understand the urgency of criminal matters. If you need immediate assistance, 
              please don't hesitate to call us directly.
            </p>
            <p className="font-body text-gray-700 text-lg leading-relaxed">
              We look forward to speaking with you and providing the strong legal defense you deserve.
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div>
              <p className="font-body text-gray-700 text-base mb-4">
                Need immediate assistance?
              </p>
              <a
                href="tel:6302836421"
                className="inline-block bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-base px-10 py-4 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px]"
              >
                Call (630) 283-6421
              </a>
            </div>

            <div>
              <a
                href="/lp-criminal-attorney-il"
                className="inline-block font-body text-wosnik-dark hover:text-wosnik-accent transition-colors text-base underline"
              >
                ← Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-wosnik-dark py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="font-body text-white text-sm">
              © Liberty Law P.C. - 2025, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
