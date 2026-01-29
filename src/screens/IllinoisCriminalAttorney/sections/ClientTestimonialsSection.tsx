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
    },
    {
      name: "Jenest Espino",
      rating: 5,
      timeAgo: "6 months ago",
      text: "David was great in helping my boyfriend and I close on a house. He is a very patient man and very helpful in understanding that my boyfriend preferred to email/text instead of call. During the closing process, David helped us understand how everything works in layman's terms. He also made sure to check in every now and then to see if the lenders would push through earlier, but again, David was very patient even when we were not.",
      source: "Google"
    },
    {
      name: "Juli Buckles",
      rating: 5,
      timeAgo: "4 months ago",
      text: "David exceeded our expectations! We were selling our home in AZ and moving back to IL to be with family and had some concerns about doing all the necessary paperwork remotely. We discussed our concerns with David and he quickly put us at ease. David provided excellent service, and was quick to respond to all of our questions using emails, texts and his secure communication software application. Due to David's knowledge and experience, the closing on our new home in Illinois was seamless. David thank you for helping make our dream come true!",
      source: "Google"
    },
    {
      name: "Michael Mejia",
      rating: 5,
      timeAgo: "3 months ago",
      text: "David at liberty law was absolutely amazing! They made selling my house fast and seemless. We had a bit of a weird situation where we needed to close in a hurry. David had it all done and ready for us in a 10 day time-frame. I know this was not normal for everyone but this is how fast and accurate they are when working for you. I will always recommend them. Thank you again for all the hard work.",
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
                <p className="font-body text-gray-700 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
