
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paulstarr-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-paulstarr-accent">Paulstarr</span> Auto
            </h3>
            <p className="text-paulstarr-300 mb-4">
              Premium auto repair, painting, servicing and modification to keep your vehicle in top condition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-paulstarr-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-paulstarr-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-paulstarr-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-paulstarr-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-paulstarr-300 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/booking" className="text-paulstarr-300 hover:text-white transition-colors">Book an Appointment</Link>
              </li>
              <li>
                <Link to="/contact" className="text-paulstarr-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Car Repairs</Link>
              </li>
              <li>
                <Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Car Painting</Link>
              </li>
              <li>
                <Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Regular Servicing</Link>
              </li>
              <li>
                <Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Car Modifications</Link>
              </li>
              <li>
                <Link to="/services" className="text-paulstarr-300 hover:text-white transition-colors">Diagnostics</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-paulstarr-accent mr-2 mt-1 flex-shrink-0" />
                <span className="text-paulstarr-300">
                  123 Auto Service Road<br />
                  Cartown, CT 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-paulstarr-accent mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-paulstarr-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-paulstarr-accent mr-2 flex-shrink-0" />
                <a href="mailto:info@paulstarrauto.com" className="text-paulstarr-300 hover:text-white transition-colors">
                  info@paulstarrauto.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-paulstarr-accent mr-2 mt-1 flex-shrink-0" />
                <div className="text-paulstarr-300">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paulstarr-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-paulstarr-400 text-sm">
              &copy; {year} Paulstarr Auto Spares. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-paulstarr-400 hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-paulstarr-400 hover:text-white transition-colors">Terms of Service</a>
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
