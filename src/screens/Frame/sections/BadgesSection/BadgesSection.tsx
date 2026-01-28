import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const BadgesSection = (): JSX.Element => {
  const badges = [
    { src: "/avvo-2022-badge.jpg", alt: "Avvo Clients' Choice Award 2022" },
    { src: "/avvo-2020-badge.jpg", alt: "Avvo Clients' Choice Award 2020" },
    { src: "/avvo-2019-badge.jpg", alt: "Avvo Clients' Choice Award 2019" },
    { src: "/rising-star-badge.jpg", alt: "Super Lawyers Rising Stars" },
    { src: "/avvo-c-badge.jpg", alt: "Avvo Reviews" },
    { src: "/avvo-10-badge.jpg", alt: "Avvo Rating 10.0 Top Attorney" },
    { src: "/bog-badge.jpg", alt: "Best of Georgia 2022" },
    { src: "/justia-badge.jpg", alt: "Justia 10.0 Lawyer Rating" },
    { src: "/top-40-badge.jpg", alt: "Top 40 Under 40 Trial Lawyers" },
    { src: "/ncdd-badge.jpg", alt: "National College for DUI Defense" },
    { src: "/gacdl-badge.jpg", alt: "Georgia Association of Criminal Defense Lawyers Member 2020" },
  ];

  return (
    <section className="w-full bg-white py-6 md:py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {badges.map((badge, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-2 flex items-center justify-center h-32">
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-wosnik-accent text-wosnik-dark hover:bg-wosnik-accent/80 border-wosnik-accent" />
            <CarouselNext className="right-0 bg-wosnik-accent text-wosnik-dark hover:bg-wosnik-accent/80 border-wosnik-accent" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
