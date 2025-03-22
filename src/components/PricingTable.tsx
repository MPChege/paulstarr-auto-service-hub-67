
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, Check } from 'lucide-react';
import Car3DModel from './3d/Car3DModel';

interface PricingItem {
  service: string;
  category: string;
  description: string;
  price?: string | null;  // Optional price field
  priceRange?: { min: string; max: string };
  notes?: string;
}

interface PricingTableProps {
  items: PricingItem[];
}

const PricingTable: React.FC<PricingTableProps> = ({ items }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Extract unique categories
  const categories = ['all', ...new Set(items.map(item => item.category))];
  
  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  // Function to ensure KES prefix for prices
  const formatPrice = (price: string): string => {
    if (price.includes('KES')) return price;
    // If it has KSh, replace with KES
    if (price.includes('KSh')) return price.replace('KSh', 'KES');
    // If it has $, replace with KES
    if (price.includes('$')) return price.replace('$', 'KES ');
    return `KES ${price}`;
  };

  return (
    <div className="w-full">
      {/* 3D Car Model */}
      <div className="mb-10">
        <Car3DModel className="w-full h-64 md:h-80" />
      </div>
      
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Pricing table */}
      <div className="overflow-hidden rounded-xl border border-blue-200 bg-white shadow-soft">
        <div className="grid grid-cols-12 bg-blue-50 py-4 px-6 text-sm font-semibold text-blue-800">
          <div className="col-span-5 md:col-span-6">Service</div>
          <div className="col-span-5 md:col-span-4">Description</div>
          <div className="col-span-2 text-right">Price</div>
        </div>
        
        <div className="divide-y divide-blue-100">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 py-4 px-6 transition-colors hover:bg-blue-50"
            >
              <div className="col-span-5 md:col-span-6 flex flex-col">
                <span className="font-medium text-blue-900">{item.service}</span>
                <span className="text-xs text-blue-500 mt-1">{item.category}</span>
              </div>
              
              <div className="col-span-5 md:col-span-4 text-sm text-blue-600">
                {item.description}
                {item.notes && (
                  <div className="group relative inline-block ml-2">
                    <Info size={14} className="inline text-blue-400 cursor-help" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-48 p-2 bg-blue-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {item.notes}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="col-span-2 text-right font-medium">
                {item.price ? (
                  <span className="text-blue-900">{formatPrice(item.price)}</span>
                ) : item.priceRange ? (
                  <span className="text-blue-900">{formatPrice(item.priceRange.min)} - {formatPrice(item.priceRange.max)}</span>
                ) : (
                  <span className="text-blue-500">Varies</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-blue-600 mb-4">Need a specific quote for your vehicle?</p>
        <button
          onClick={() => navigate('/booking')}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-800 transition-all"
        >
          Request a Custom Quote
        </button>
      </div>
    </div>
  );
};

export default PricingTable;
