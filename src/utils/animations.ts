
interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

// Enhanced fade in animation for elements as they come into view
export const setupScrollReveal = (selector: string, options: RevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay + (index * 100)); // Stagger animations
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

// Enhanced parallax effect for background images
export const setupParallax = () => {
  if (typeof window !== 'undefined') {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          parallaxElements.forEach((element) => {
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top;
            const windowHeight = window.innerHeight;
            
            if (elementTop <= windowHeight && elementTop >= -elementRect.height) {
              const speed = element.getAttribute('data-speed') || '0.5';
              const yPos = -(elementTop * parseFloat(speed));
              (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
};

// Smooth scroll to element with offset for navbar
export const scrollToElement = (elementId: string, offset: number = 80) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(elementId);
    
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }
};

// Scroll progress indicator
export const setupScrollProgress = () => {
  if (typeof window !== 'undefined') {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #eab308);
      z-index: 9999;
      transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateProgress);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }
};

// Scroll to top functionality
export const setupScrollToTop = () => {
  if (typeof window !== 'undefined') {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3b82f6, #1e40af);
      color: white;
      border: none;
      font-size: 20px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    `;

    scrollButton.addEventListener('mouseenter', () => {
      scrollButton.style.transform = 'scale(1.1)';
      scrollButton.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
    });

    scrollButton.addEventListener('mouseleave', () => {
      scrollButton.style.transform = 'scale(1)';
      scrollButton.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
    });

    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    document.body.appendChild(scrollButton);

    const toggleScrollButton = () => {
      if (window.pageYOffset > 300) {
        scrollButton.style.opacity = '1';
        scrollButton.style.visibility = 'visible';
      } else {
        scrollButton.style.opacity = '0';
        scrollButton.style.visibility = 'hidden';
      }
    };

    window.addEventListener('scroll', toggleScrollButton, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', toggleScrollButton);
      if (scrollButton.parentNode) {
        scrollButton.parentNode.removeChild(scrollButton);
      }
    };
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

// Navbar scroll effect
export const setupNavbarScroll = () => {
  if (typeof window !== 'undefined') {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
};
