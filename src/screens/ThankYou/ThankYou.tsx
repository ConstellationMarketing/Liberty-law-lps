import React from "react";
import { CheckCircle } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-wosnik-light flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="font-heading text-wosnik-dark text-4xl md:text-5xl font-normal mb-6">
            Thank You!
          </h1>

          <p className="font-body text-wosnik-dark text-lg mb-4">
            We've received your message and appreciate you contacting us.
          </p>

          <p className="font-body text-gray-600 text-base mb-8">
            One of our experienced attorneys will review your case and get back to you as soon as possible. We typically respond within 24 hours during business days.
          </p>

          <div className="bg-wosnik-accent/10 border border-wosnik-accent/30 rounded-lg p-6 mb-8">
            <p className="font-body text-wosnik-dark font-semibold mb-2">
              Need Immediate Assistance?
            </p>
            <a
              href="tel:6784036418"
              className="font-heading text-wosnik-accent text-2xl font-semibold hover:opacity-80 transition-opacity"
            >
              (678) 403-6418
            </a>
            <p className="font-body text-gray-600 text-sm mt-2">
              Available 24/7
            </p>
          </div>

          <a
            href="/"
            className="inline-block bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px]"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};
