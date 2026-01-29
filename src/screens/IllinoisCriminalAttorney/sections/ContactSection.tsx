import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContactSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to URL-encoded string for Netlify
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (response.ok) {
        // Redirect to custom thank you page
        navigate("/thank-you");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section id="contact-form" className="w-full bg-wosnik-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            Contact Liberty Law P.C.
          </h2>
          <p className="font-body text-gray-700 text-lg max-w-3xl mx-auto">
            Let's discuss your case - Get trusted criminal defense guidance today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-heading text-wosnik-dark text-2xl mb-6">
              Request a Free Consultation
            </h3>

            <form
              name="consultation-request"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="consultation-request" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wosnik-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wosnik-accent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wosnik-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wosnik-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="font-heading text-wosnik-dark text-2xl mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-wosnik-accent flex-shrink-0 mt-1 mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-body text-gray-700 font-semibold">Phone</p>
                    <a
                      href="tel:6302836421"
                      className="font-body text-wosnik-accent hover:text-wosnik-accent/80 text-lg"
                    >
                      (630) 283-6421
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-wosnik-accent flex-shrink-0 mt-1 mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-body text-gray-700 font-semibold">Email</p>
                    <a
                      href="mailto:david@libertylawfirm.net"
                      className="font-body text-wosnik-accent hover:text-wosnik-accent/80"
                    >
                      david@libertylawfirm.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-wosnik-accent flex-shrink-0 mt-1 mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-body text-gray-700 font-semibold">Address</p>
                    <p className="font-body text-gray-700">
                      1700 Park St., Suite 203<br />
                      Naperville, IL 60563
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.367823234473!2d-88.15063892297552!3d41.798836071250534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e57aaadbc6c4d%3A0x60da79918247a767!2sLiberty%20Law%2C%20P.C.!5e0!3m2!1sen!2srs!4v1769620403275!5m2!1sen!2srs"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liberty Law P.C. Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
