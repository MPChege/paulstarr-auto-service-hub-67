
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Book Now',
  ctaLink = '/booking',
  image = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=60',
  secondaryCta,
}) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();
  
  // Array of professional car images
  const carImages = [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=60', // Toyota Land Cruiser
    'https://images.unsplash.com/photo-1605893477799-b99e3b400cb6?auto=format&fit=crop&w=1200&q=60', // Mercedes GLE
    'https://images.unsplash.com/photo-1669558698869-ac66c694f288?auto=format&fit=crop&w=1200&q=60', // Lexus
    'https://images.unsplash.com/photo-1575650980311-5943dab4f57c?auto=format&fit=crop&w=1200&q=60', // Car maintenance
  ];

  useEffect(() => {
    // Preload the initial image
    const img = new Image();
    img.src = image;
    img.onload = () => setIsImageLoaded(true);
    
    // Rotate through images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [image, carImages.length]);
  
  // When image index changes, preload the new image
  useEffect(() => {
    const img = new Image();
    img.src = carImages[currentImageIndex];
    img.onload = () => setIsImageLoaded(true);
  }, [currentImageIndex, carImages]);

  const handleCtaClick = () => {
    navigate(ctaLink);
  };

  const handleSecondaryCta = () => {
    if (secondaryCta) {
      navigate(secondaryCta.link);
    }
  };

  return (
    <div className="relative min-h-[500px] md:min-h-[600px] h-[calc(100vh-70px)] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="parallax h-full">
          <div
            className="parallax-bg transition-all duration-1000"
            data-speed="0.5"
            style={{
              backgroundImage: `url(${carImages[currentImageIndex]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-900/80"></div>
        </div>
      </div>

      {/* Decorative elements - simplified for mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-yellow-400/30 via-blue-500/20 to-blue-700/30 backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-700/30 via-blue-500/20 to-yellow-400/30 backdrop-blur-sm"></div>
        </>
      )}
      
      {/* Animated circular accents - simplified for mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400/10 backdrop-blur-md -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 backdrop-blur-md translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '3s' }}></div>
        </>
      )}

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-yellow-400 text-xs md:text-sm font-medium mb-4 md:mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Premium Auto Services
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-all transform hover:translate-y-[-2px] hover:shadow-lg shadow-blue-700/30"
            >
              {ctaText}
            </button>
            
            {secondaryCta && (
              <button
                onClick={handleSecondaryCta}
                className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center justify-center px-5 py-3 md:px-6 md:py-3 text-white font-medium rounded-md border border-yellow-400/50 bg-yellow-400/10 hover:bg-yellow-400/20 transition-all shadow-yellow-500/20 hover:shadow-lg"
              >
                {secondaryCta.text}
                <ArrowRight size={18} className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-20 md:bottom-28 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-10 opacity-0 animate-fade-in" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
        {carImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-yellow-400 scale-125 shadow-md shadow-yellow-400/50' 
                : 'bg-white/40'
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>
        <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
        <div className="h-12 w-6 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
