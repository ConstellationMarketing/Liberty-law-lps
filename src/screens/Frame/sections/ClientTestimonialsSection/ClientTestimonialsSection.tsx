import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Star } from "lucide-react";

export const ClientTestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Minna Price Jones",
      rating: 5,
      timeAgo: "12 months ago",
      text: "My God My God!! Let me say this PLEASE DO NOT hesitate to reach out this law firm. I wanted to take a moment to express my heartfelt gratitude to Mr. Peter Wosnik for his outstanding support and expertise during a challenging time in my life. I was facing serious charges for the first time, and my mental health was in turmoil. With no knowledge of the law, I felt lost and overwhelmed.\n\nMr. Wosnik truly became a blessing for my family and me. His patience, compassion, and dedication not only guided me through this difficult process but ultimately saved my life. His deep knowledge and expertise in law gave me the confidence I so desperately needed during a time of uncertainty.\n\nI highly recommend reaching out to Mr. Wosnik's firm, as they are truly professional and results-driven. Please be sure to comply with everything he requests—his dedication and hard work have had a profound impact on my life, and I am eternally grateful for it.\n\nThank you, Mr. Wosnik. You will forever be in my prayers for continued prosperity and success.",
      source: "Google"
    },
    {
      name: "Sadondra Smith",
      rating: 5,
      timeAgo: "12 months ago",
      text: "Peter Wosnik is the best. He definitely made me feel comfortable with all the decisions about my case. He kept me informed about everything that was going on with the case. His staff is calming and nice his receptionist made sure I was notified with emails very professional. Any questions I asked they were answered with very understanding manner. I definitely recommend Wosnik Law Thank you so much, Peter!",
      source: "Google"
    },
    {
      name: "Journey Green",
      rating: 5,
      timeAgo: "1 year ago",
      text: "Let me start by saying if you want a responsive team this is the one! From the very first phone call they were amazing. Mr. Wosnik is extremely personable, understanding, and trustworthy. He helped me when I really needed it. If you need an attorney for any case, call them. You won't be sorry!",
      source: "Google"
    },
    {
      name: "Sarah Jones",
      rating: 5,
      timeAgo: "1 year ago",
      text: "Robby King was great! Very attentive and responsive to my divorce case. Very helpful and got me the exact outcome I wanted. I would recommend him to anyone.",
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
                  href="https://www.google.com/search?q=wosnik+law+georgia&sca_esv=aaa09739d5691e40&ei=h5cgafvqEIaN-d8PgayLmQ0&ved=0ahUKEwi7yo-B2YORAxWGRv4FHQHWItMQ4dUDCBE&uact=5&oq=wosnik+law+georgia&gs_lp=Egxnd3Mtd2l6LXNlcnAiEndvc25payBsYXcgZ2VvcmdpYTIFECEYoAEyBRAhGKABMgUQIRigAUjODlCgAljODXABeAGQAQCYAX6gAdMGqgEDMi42uAEDyAEA-AEBmAIJoALwBsICChAAGLADGNYEGEfCAgUQABiABMICBhAAGBYYHsICBRAAGO8FwgIIEAAYgAQYogTCAgsQABiABBiGAxiKBcICBBAhGBXCAgcQIRigARgKmAMAiAYBkAYIkgcDMi43oAeCHLIHAzEuN7gH6wbCBwUxLjYuMsgHEQ&sclient=gws-wiz-serp#lrd=0x88f5d1e30a86d521:0x5c677f5df8116ea0,1,,,,"
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