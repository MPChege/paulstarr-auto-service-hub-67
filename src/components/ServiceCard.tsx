
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features?: string[];
  pricing?: string;
  link?: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  image,
  features = [],
  pricing,
  link = '/booking',
  index,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="reveal card-hover card-shine relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl group"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image Background */}
      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 transform group-hover:scale-110 group-hover:blur-sm" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/50 to-blue-900/90"></div>
      
      {/* Initial Content (Visible by default) */}
      <div className="relative z-10 p-6 h-full flex flex-col transition-all duration-500 transform group-hover:translate-y-[-100%]">
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-600/30">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-white/90 mb-4">{description}</p>
        
        {pricing && <p className="mt-auto font-semibold text-white mb-4">Starting at <span className="text-yellow-400">{pricing}</span></p>}
        
        <button
          onClick={() => navigate(link)}
          className="w-full py-2 rounded-md transition-all duration-300 border border-yellow-400/50 bg-yellow-400/10 text-white hover:bg-yellow-400 hover:text-blue-900 flex items-center justify-center"
        >
          View Details
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Hover Content (Slides up on hover) */}
      <div className="relative z-10 p-6 h-full flex flex-col transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-600/30">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-yellow-400 mb-3">Services Included:</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {pricing && <p className="mt-auto font-medium text-white mb-4">Starting at <span className="text-yellow-400 font-bold">{pricing}</span></p>}
        
        <button
          onClick={() => navigate(link)}
          className="w-full py-3 rounded-md transition-all duration-300 bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-400/30"
        >
          Book Service
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
