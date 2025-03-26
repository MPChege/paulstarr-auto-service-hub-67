
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
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">See Our Work</h2>
          <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
            Browse through our gallery showcasing our quality workmanship and attention to detail on various car repair and modification projects.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
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
                  <div className="relative overflow-hidden rounded-lg shadow-xl h-64 transition-all duration-300 hover:shadow-2xl card-hover group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {image.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 font-medium text-sm">{image.caption}</p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 right-0 mr-2 translate-y-0" />
              <CarouselNext className="relative static left-0 right-0 ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
