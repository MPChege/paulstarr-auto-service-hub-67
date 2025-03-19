
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
      className="reveal group relative rounded-xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-elevated"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-paulstarr-100 transition-all duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="mb-4 flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-paulstarr-accent rounded-md text-white">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-paulstarr-900">{title}</h3>
        </div>
        
        <p className="text-paulstarr-600 mb-4">{description}</p>
        
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-paulstarr-800 mb-2">Services Included:</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check size={16} className="text-paulstarr-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-paulstarr-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {pricing && <p className="font-medium text-paulstarr-800 mb-6">Starting at <span className="text-paulstarr-accent">{pricing}</span></p>}
        
        <button
          onClick={() => navigate(link)}
          className="w-full py-2 mt-2 rounded-md transition-all duration-300 border border-paulstarr-accent text-paulstarr-accent hover:bg-paulstarr-accent hover:text-white flex items-center justify-center"
        >
          Book Service
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
