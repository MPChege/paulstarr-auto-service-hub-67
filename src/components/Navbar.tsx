
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Car } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        : 'text-gray-800'
    }`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white">
              <Car size={20} />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gradient-blue">Paulstarr</span> <span className="text-gray-800">Auto</span>
            </span>
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
              className="ml-4 px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
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
