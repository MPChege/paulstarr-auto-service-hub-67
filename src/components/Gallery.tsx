
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, className }) => {
  return (
    <section className={cn("py-16 bg-white", className)} id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal-delay">See Our Work</h2>
          <p className="max-w-2xl mx-auto text-paulstarr-600 reveal-slow">
            Browse through our gallery showcasing our quality workmanship and attention to detail on various car repair and modification projects.
          </p>
        </div>

        <div className="mx-auto max-w-5xl reveal-delay">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative overflow-hidden rounded-lg shadow-xl h-64 transition-all duration-500 hover:shadow-2xl card-hover group reveal"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {image.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                        <p className="text-white p-4 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.caption}</p>
                      </div>
                    )}
                    <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-blue-500/50 transition-all duration-300 rounded-lg"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 reveal-slow">
              <CarouselPrevious className="relative static left-0 right-0 mr-2 translate-y-0 hover:scale-110 transition-transform duration-300" />
              <CarouselNext className="relative static left-0 right-0 ml-2 translate-y-0 hover:scale-110 transition-transform duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
