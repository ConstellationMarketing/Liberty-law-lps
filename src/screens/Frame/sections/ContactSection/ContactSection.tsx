import React from "react";
import { Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ContactSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Submit to UseBasin
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
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
    <section id="contact" className="w-full bg-wosnik-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
            Contact Liberty Law P.C.
          </h2>
          <p className="font-body text-wosnik-dark text-lg">
            Call and speak with us today about your criminal or family law matter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
              Request Your Free Consultation
            </h3>
            <form
              id="contact-form"
              name="consultation-request"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="consultation-request" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-wosnik-accent hover:bg-black text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent hover:border-black transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-wosnik-dark font-medium">(678) 403-6418</p>
                    <p className="font-body text-gray-600 text-sm">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                Office Location
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-wosnik-dark font-medium mb-1">Walton County Location:</p>
                    <p className="font-body text-wosnik-dark">924 Cherokee Ave.</p>
                    <p className="font-body text-wosnik-dark mb-2">Monroe, GA 30655</p>
                    <p className="font-body text-gray-600 text-sm">(By Appointment Only)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-wosnik-dark font-medium mb-1">Gwinnett County Location:</p>
                    <p className="font-body text-wosnik-dark">279 W. Crogan St.</p>
                    <p className="font-body text-wosnik-dark">Lawrenceville, GA 30046</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3315.729589736112!2d-83.7009607!3d33.7934805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5d1e30a86d521%3A0x5c677f5df8116ea0!2sWosnik%20Law!5e0!3m2!1ssr!2srs!4v1763744943259!5m2!1ssr!2srs"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Liberty Law P.C. Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
