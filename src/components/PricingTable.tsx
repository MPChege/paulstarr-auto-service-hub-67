
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, Check } from 'lucide-react';
import Car3DModel from './3d/Car3DModel';

interface PricingItem {
  service: string;
  category: string;
  description: string;
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
      
      {/* Service showcase grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 reveal"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                  {item.category}
                </span>
                <Check className="text-green-500" size={18} />
              </div>
              
              <h3 className="font-bold text-blue-900 text-lg mb-3">{item.service}</h3>
              
              <p className="text-blue-600 text-sm mb-4 flex-grow">{item.description}</p>
              
              {item.notes && (
                <div className="group relative inline-block mb-4">
                  <div className="flex items-center text-blue-400 text-xs">
                    <Info size={12} className="mr-1" />
                    <span className="cursor-help">Additional info</span>
                  </div>
                  <div className="absolute bottom-full left-0 w-64 p-3 bg-blue-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    {item.notes}
                  </div>
                </div>
              )}
              
              <button
                onClick={() => navigate('/booking')}
                className="w-full py-2 mt-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
              >
                Book Service
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-blue-600 mb-4 text-lg">Ready to experience our premium service?</p>
        <button
          onClick={() => navigate('/booking')}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default PricingTable;
