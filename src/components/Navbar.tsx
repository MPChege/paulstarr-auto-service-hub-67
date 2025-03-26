
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo with hover effect */}
          <NavLink 
            to="/" 
            className="flex items-center relative"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div className="overflow-hidden relative">
              <img 
                src="/lovable-uploads/5a3ada10-d36c-4d38-ae24-7e0489eb4cc0.png" 
                alt="Paulstar Auto-Care Logo" 
                className={`h-10 md:h-12 transition-all duration-300 ${
                  logoHovered ? 'scale-110 transform' : 'scale-100'
                }`}
              />
              {logoHovered && (
                <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse-ring"></div>
              )}
            </div>
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
              className={`ml-4 px-5 py-2 rounded-md ${
                scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                  : 'bg-white text-blue-700'
              } font-medium transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1`}
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 focus:outline-none`}
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
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="h-full flex flex-col px-4 pt-8 pb-6 space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-xl font-medium transition-all ${isActive ? 'text-blue-600' : 'text-gray-800'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          <NavLink 
            to="/booking" 
            className="mt-4 py-3 w-full rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-center shadow-lg"
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
