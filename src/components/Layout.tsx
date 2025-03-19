
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { setupScrollReveal, setupParallax, setupLazyImageLoading } from '../utils/animations';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize animations when component mounts
    const cleanupScrollReveal = setupScrollReveal('.reveal');
    const cleanupParallax = setupParallax();
    const cleanupLazyLoading = setupLazyImageLoading();

    // Clean up animations when component unmounts
    return () => {
      cleanupScrollReveal?.();
      cleanupParallax?.();
      cleanupLazyLoading?.();
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
