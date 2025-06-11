
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { scrollToElement } from '../utils/animations';

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
  image,
  secondaryCta,
}) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  
  // Array of Paulstar Auto-Care images
  const carImages = [
    '/lovable-uploads/345f5c29-ac04-462f-afb7-a37e6ef4863d.png',
    '/lovable-uploads/fc7137cb-758e-4d76-a8ef-61a423d180c0.png',
    '/lovable-uploads/af2ec558-cf59-4376-86d2-c458f9815053.png',
    '/lovable-uploads/b2dae066-82cf-4255-a062-0cbe92ed7092.png',
    '/lovable-uploads/13b6d8c7-a433-4d8b-9b79-eaa0462265a6.png',
  ];

  useEffect(() => {
    // Preload the initial image
    const img = new Image();
    img.src = carImages[0];
    img.onload = () => setIsImageLoaded(true);
    
    // Rotate through images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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

  const handleScrollDown = () => {
    const nextSection = document.querySelector('section');
    if (nextSection) {
      scrollToElement(nextSection.id || 'next-section');
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[500px] md:min-h-[600px] h-[calc(100vh-70px)] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with enhanced parallax effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)` 
        }}
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

      {/* Decorative elements with scroll-based animation */}
      {!isMobile && (
        <>
          <div 
            className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-yellow-400/30 via-blue-500/20 to-blue-700/30 backdrop-blur-sm"
            style={{ 
              opacity: Math.max(0, 1 - scrollY / 300) 
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-700/30 via-blue-500/20 to-yellow-400/30 backdrop-blur-sm"
            style={{ 
              opacity: Math.max(0, 1 - scrollY / 300) 
            }}
          ></div>
        </>
      )}
      
      {/* Animated circular accents with scroll interaction */}
      {!isMobile && (
        <>
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400/10 backdrop-blur-md -translate-x-1/2 -translate-y-1/2 animate-pulse"
            style={{ 
              transform: `translate(-50%, -50%) scale(${Math.max(0.5, 1 - scrollY / 1000)})` 
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 backdrop-blur-md translate-x-1/2 translate-y-1/2 animate-pulse" 
            style={{ 
              animationDuration: '3s',
              transform: `translate(50%, 50%) scale(${Math.max(0.5, 1 - scrollY / 1000)})` 
            }}
          ></div>
        </>
      )}

      {/* Content with enhanced scroll animations */}
      <div 
        className="relative container mx-auto px-4 md:px-6 z-10"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-yellow-400 text-xs md:text-sm font-medium mb-4 md:mb-6 opacity-0 animate-fade-up reveal" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Professional Auto Care with a difference
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 opacity-0 animate-fade-up reveal" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 opacity-0 animate-fade-up reveal" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 opacity-0 animate-fade-up reveal" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg shadow-blue-700/30"
            >
              {ctaText}
            </button>
            
            {secondaryCta && (
              <button
                onClick={handleSecondaryCta}
                className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center justify-center px-5 py-3 md:px-6 md:py-3 text-white font-medium rounded-md border border-yellow-400/50 bg-yellow-400/10 hover:bg-yellow-400/20 transition-all duration-300 shadow-yellow-500/20 hover:shadow-lg"
              >
                {secondaryCta.text}
                <ArrowRight size={18} className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-20 md:bottom-28 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-10 opacity-0 animate-fade-in reveal" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
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

      {/* Contact Info Overlay */}
      <div className="absolute bottom-6 right-6 bg-yellow-400/90 rounded-lg px-4 py-3 text-sm md:text-base text-blue-900 font-medium shadow-lg reveal">
        <div className="text-center">
          <p>Utawala, Eastern Bypass</p>
          <p className="font-bold">0799 608098 / 0721 314825</p>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button 
        onClick={handleScrollDown}
        className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center opacity-0 animate-fade-in reveal hover:scale-110 transition-transform duration-300 cursor-pointer group" 
        style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}
      >
        <span className="text-white/80 text-sm mb-2 group-hover:text-yellow-400 transition-colors duration-300">Scroll to explore</span>
        <div className="h-12 w-6 border-2 border-white/30 rounded-full flex justify-center p-1 group-hover:border-yellow-400/50 transition-colors duration-300">
          <ChevronDown className="w-4 h-4 text-white animate-bounce group-hover:text-yellow-400" />
        </div>
      </button>
    </div>
  );
};

export default Hero;
