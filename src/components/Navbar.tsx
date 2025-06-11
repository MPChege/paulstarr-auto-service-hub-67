
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Handle navbar hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const getNavLinkClass = (isActive: boolean) => {
    return `relative px-3 py-2 text-base font-medium transition-all duration-300 hover:text-blue-600 group ${
      isActive 
        ? 'text-blue-600'
        : scrolled ? 'text-gray-800' : 'text-white'
    }`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      } ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ 
        transition: 'transform 0.3s ease-in-out, background-color 0.4s ease, backdrop-filter 0.4s ease' 
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a38ff821-3f72-4a68-b97f-7e567d02ebec.png" 
              alt="Paulstar Auto-Care Logo" 
              className="h-16 md:h-20 transition-all duration-300 hover:scale-105" 
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            ))}
            
            <NavLink 
              to="/booking" 
              className={`ml-4 px-5 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform ${
                scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-600/30' 
                  : 'bg-white text-blue-700 hover:shadow-white/30'
              } font-medium`}
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 focus:outline-none transition-colors duration-300`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-0" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="h-full flex flex-col px-4 pt-8 pb-6 space-y-6">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-xl font-medium transition-all duration-300 hover:text-blue-600 transform hover:translate-x-2 ${
                  isActive ? 'text-blue-600' : 'text-gray-800'
                }`
              }
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'fadeInLeft 0.5s ease forwards' : 'none'
              }}
            >
              {item.name}
            </NavLink>
          ))}
          
          <NavLink 
            to="/booking" 
            className="mt-4 py-3 w-full rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform"
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
