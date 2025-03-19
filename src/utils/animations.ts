
interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

// Fade in animation for elements as they come into view
export const setupScrollReveal = (selector: string, options: RevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }
};

// Parallax effect for background images
export const setupParallax = () => {
  if (typeof window !== 'undefined') {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    const handleScroll = () => {
      parallaxElements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        const windowHeight = window.innerHeight;
        
        if (elementTop <= windowHeight && elementTop >= -elementRect.height) {
          const speed = element.getAttribute('data-speed') || '0.5';
          const yPos = -(elementTop * parseFloat(speed));
          // Cast to HTMLElement to access style property
          (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
};

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};

// Custom image loading with blur effect
export const setupLazyImageLoading = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.classList.add('fade-in');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    lazyImages.forEach((image) => {
      imageObserver.observe(image);
    });
    
    return () => {
      lazyImages.forEach((image) => {
        imageObserver.unobserve(image);
      });
    };
  }
};
