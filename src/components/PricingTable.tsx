
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, Check } from 'lucide-react';

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

  return (
    <div className="w-full">
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-paulstarr-accent text-white'
                : 'bg-paulstarr-100 text-paulstarr-700 hover:bg-paulstarr-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Pricing table */}
      <div className="overflow-hidden rounded-xl border border-paulstarr-200 bg-white shadow-soft">
        <div className="grid grid-cols-12 bg-paulstarr-50 py-4 px-6 text-sm font-semibold text-paulstarr-800">
          <div className="col-span-5 md:col-span-6">Service</div>
          <div className="col-span-5 md:col-span-4">Description</div>
          <div className="col-span-2 text-right">Price</div>
        </div>
        
        <div className="divide-y divide-paulstarr-100">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 py-4 px-6 transition-colors hover:bg-paulstarr-50"
            >
              <div className="col-span-5 md:col-span-6 flex flex-col">
                <span className="font-medium text-paulstarr-900">{item.service}</span>
                <span className="text-xs text-paulstarr-500 mt-1">{item.category}</span>
              </div>
              
              <div className="col-span-5 md:col-span-4 text-sm text-paulstarr-600">
                {item.description}
                {item.notes && (
                  <div className="group relative inline-block ml-2">
                    <Info size={14} className="inline text-paulstarr-400 cursor-help" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-48 p-2 bg-paulstarr-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {item.notes}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="col-span-2 text-right font-medium">
                {item.price ? (
                  <span className="text-paulstarr-900">{item.price}</span>
                ) : item.priceRange ? (
                  <span className="text-paulstarr-900">{item.priceRange.min} - {item.priceRange.max}</span>
                ) : (
                  <span className="text-paulstarr-500">Varies</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-paulstarr-600 mb-4">Need a specific quote for your vehicle?</p>
        <button
          onClick={() => navigate('/booking')}
          className="px-6 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-800 transition-all"
        >
          Request a Custom Quote
        </button>
      </div>
    </div>
  );
};

export default PricingTable;
