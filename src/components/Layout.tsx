
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  setupScrollReveal, 
  setupParallax, 
  setupLazyImageLoading,
  setupScrollProgress,
  setupScrollToTop,
  setupNavbarScroll
} from '../utils/animations';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize all scroll-based animations and features
    const cleanupScrollReveal = setupScrollReveal('.reveal', { threshold: 0.15 });
    const cleanupParallax = setupParallax();
    const cleanupLazyLoading = setupLazyImageLoading();
    const cleanupScrollProgress = setupScrollProgress();
    const cleanupScrollToTop = setupScrollToTop();
    const cleanupNavbarScroll = setupNavbarScroll();

    // Enhanced reveal animations for different elements
    const cleanupScrollRevealDelay = setupScrollReveal('.reveal-delay', { 
      threshold: 0.1, 
      delay: 200 
    });
    const cleanupScrollRevealSlow = setupScrollReveal('.reveal-slow', { 
      threshold: 0.2, 
      delay: 100 
    });

    // Clean up all animations when component unmounts
    return () => {
      cleanupScrollReveal?.();
      cleanupParallax?.();
      cleanupLazyLoading?.();
      cleanupScrollProgress?.();
      cleanupScrollToTop?.();
      cleanupNavbarScroll?.();
      cleanupScrollRevealDelay?.();
      cleanupScrollRevealSlow?.();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
