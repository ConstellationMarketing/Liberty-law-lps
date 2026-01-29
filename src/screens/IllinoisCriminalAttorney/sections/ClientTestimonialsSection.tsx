import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Star } from "lucide-react";

export const ClientTestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Tony Davis",
      rating: 5,
      timeAgo: "8 months ago",
      text: "David assisted me with a traffic matter. His courteous, prompt, and professional manner made it easy. His fees were at the top of the scale I'd be willing to pay, but he gave a discount for upfront payment. Thank you, David. I'll recommend you to anyone who needs your services.",
      source: "Google"
    }
  ];

  return (
    <section className="w-full bg-wosnik-light py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Client Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-wosnik-accent rounded-full flex items-center justify-center">
                    <span className="font-body text-wosnik-dark font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body text-wosnik-dark font-semibold text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="font-body text-gray-500 text-xs">
                      {testimonial.timeAgo}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-wosnik-accent font-body text-2xl font-bold">G</span>
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed line-clamp-4">
                  {testimonial.text}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJTWy8rapXDogRZ6dHgpF52mA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-wosnik-accent hover:underline text-sm mt-2 inline-block"
                >
                  Read more
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
