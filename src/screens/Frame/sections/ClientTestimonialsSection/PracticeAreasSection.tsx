import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Quote, Star } from "lucide-react";

export const PracticeAreasSection = (): JSX.Element => {
  // Client testimonials data
  const testimonials = [
    {
      text: "Sarah Johnson is a phenomenal attorney I literally hired her 1 Day before my boyfriend's court date and did the best job I've seen so far. We've dealt with other lawyers and have never had a more positive result than this. Her and her assistant were Awesome! Thank you so much!! Great results! I highly recommend her!!!!!!!!",
      author: "Jennifer M.",
    },
    {
      text: "Ms. Sarah Johnson is an exceptional attorney and has my utmost trust. Her staff is phenomenal and keeps clients informed of the process throughout a case. I cannot recommend anyone better than her for a defense lawyer.",
      author: "Michael R.",
    },
    {
      text: "Everything was perfect from beginning to end.",
      author: "David L.",
    }
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1130px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-normal text-[#434343] mb-4 font-['Playfair_Display',Helvetica]">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-[#ff8a00] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 font-['Montserrat',Helvetica]">
            Don't just take our word for it. Here's what real clients have to say about their experience with Constellation Law.
          </p>
          
          {/* Star Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#434343] ml-2">5.0</span>
            <span className="text-gray-600 font-['Montserrat',Helvetica]">Google Reviews</span>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white relative overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-[#ff8a00]" />
                </div>
                
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow mb-6">
                  <p className="font-['Roboto',Helvetica] font-normal text-gray-700 text-lg leading-[27px] italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-['Montserrat',Helvetica] font-bold text-[#434343] text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 font-['Montserrat',Helvetica]">
                    Verified Google Review
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};