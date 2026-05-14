import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-wosnik-dark/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:6302836421"
              className="flex min-h-[52px] items-center justify-center rounded-full border border-wosnik-accent bg-wosnik-accent px-4 py-3 text-center font-inter text-xs font-medium uppercase tracking-[2px] text-white transition-all duration-150 hover:border-black hover:bg-black md:text-sm"
            >
              Call Now (630) 283-6421
            </a>
            <button
              type="button"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="min-h-[52px] rounded-full border border-white px-4 py-3 text-center font-inter text-xs font-medium uppercase tracking-[2px] text-white transition-all duration-150 hover:bg-white hover:text-wosnik-dark md:text-sm"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full bg-wosnik-dark py-8 pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="font-body text-white text-sm">
              © Liberty Law P.C. - 2026, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
