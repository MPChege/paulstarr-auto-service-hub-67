
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paulstarr-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-paulstarr-accent">Paulstar</span> Auto Care
            </h3>
            <p className="text-paulstarr-300 mb-4">
              Fixing cars & trucks for over 12 years. Honest diagnostics, transparent quotes, and repairs done right the first time.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Paulstar-Auto-Care-Limited-100054297457146/" className="text-white hover:text-paulstarr-accent transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-paulstarr-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-paulstarr-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://wa.me/254726243626" className="text-white hover:text-paulstarr-accent transition-colors" target="_blank" rel="noopener noreferrer">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-paulstarr-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-paulstarr-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/service-charter" className="text-paulstarr-300 hover:text-white transition-colors">Service Charter</Link></li>
              <li><Link to="/our-staff" className="text-paulstarr-300 hover:text-white transition-colors">Our Staff</Link></li>
              <li><Link to="/booking" className="text-paulstarr-300 hover:text-white transition-colors">Free Quote</Link></li>
              <li><Link to="/contact" className="text-paulstarr-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Engine Overhaul & Mechanical Repairs</Link></li>
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Panel Beating & Spray Painting</Link></li>
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Suspension & Steering Repairs</Link></li>
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Brake System Service</Link></li>
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Computerized Diagnostics</Link></li>
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Clutch & Transmission Repairs</Link></li>
              <li><Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Electrical System Repairs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-paulstarr-accent mr-2 mt-1 flex-shrink-0" />
                <span className="text-paulstarr-300">
                  Utawala along the Eastern Bypass,<br />
                  opposite Fun City Gardens &amp; next to<br />
                  BE Petrol Station, Nairobi 00100, Kenya.
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-paulstarr-accent mr-2 flex-shrink-0" />
                <a href="tel:+254726243626" className="text-paulstarr-300 hover:text-white transition-colors">
                  +254 726 243626
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-paulstarr-accent mr-2 flex-shrink-0" />
                <a href="mailto:info@paulstarautocare.co.ke" className="text-paulstarr-300 hover:text-white transition-colors">
                  info@paulstarautocare.co.ke
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-paulstarr-accent mr-2 mt-1 flex-shrink-0" />
                <div className="text-paulstarr-300">
                  <p>Week Days: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 8:00 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paulstarr-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-paulstarr-400 text-sm">
              &copy; 2026 Paulstar Auto Care Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link to="/service-charter" className="text-paulstarr-400 hover:text-white transition-colors">Service Charter</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-paulstarr-400 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
