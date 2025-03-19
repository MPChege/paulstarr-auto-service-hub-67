
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  date: string;
  service: string;
  rating: number;
  text: string;
  image?: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  date,
  service,
  rating,
  text,
  image,
  index,
}) => {
  return (
    <div 
      className="reveal bg-white p-6 rounded-xl shadow-soft border border-paulstarr-100 transition-all duration-300 hover:shadow-elevated"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-paulstarr-100 flex items-center justify-center mr-4">
              <span className="text-paulstarr-500 font-medium">
                {name.split(' ').map(part => part[0]).join('').toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <p className="font-medium text-paulstarr-900">{name}</p>
            <p className="text-sm text-paulstarr-500">{date}</p>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-paulstarr-50 text-xs font-medium text-paulstarr-700">
          {service}
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? 'text-amber-400 fill-amber-400' : 'text-paulstarr-200'
            } mr-0.5`}
          />
        ))}
      </div>
      
      <p className="text-paulstarr-600">{text}</p>
    </div>
  );
};

export default TestimonialCard;
