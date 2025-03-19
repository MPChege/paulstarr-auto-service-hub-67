
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

// Create a custom cursor element
const createCustomCursor = () => {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  
  const cursorRing = document.createElement('div');
  cursorRing.classList.add('cursor-ring');
  
  cursor.appendChild(cursorDot);
  cursor.appendChild(cursorRing);
  
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
};

const queryClient = new QueryClient();

const App = () => {
  // Initialize any global effects
  useEffect(() => {
    // Preload any necessary resources
    const images = [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1605893477799-b99e3b400cb6?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1669558698869-ac66c694f288?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1575650980311-5943dab4f57c?auto=format&fit=crop&w=1200&q=60',
    ];
    
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    
    // Add custom styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .custom-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        pointer-events: none;
        z-index: 9999;
      }
      
      .cursor-dot {
        position: absolute;
        top: -4px;
        left: -4px;
        width: 8px;
        height: 8px;
        background-color: #3b82f6;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
      
      .cursor-ring {
        position: absolute;
        top: -20px;
        left: -20px;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(59, 130, 246, 0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0.5;
        transition: transform 0.2s ease-out, opacity 0.2s ease-out;
      }
      
      a:hover ~ .custom-cursor .cursor-ring,
      button:hover ~ .custom-cursor .cursor-ring {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0.7;
        border-color: rgba(234, 179, 8, 0.6);
      }
    `;
    
    document.head.appendChild(style);
    
    // Uncomment to enable custom cursor
    // createCustomCursor();
    
    // Add scroll-triggered animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" closeButton />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
