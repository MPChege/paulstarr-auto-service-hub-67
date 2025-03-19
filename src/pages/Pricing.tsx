import React from 'react';
import Hero from '@/components/Hero';
import PricingTable from '@/components/PricingTable';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, CreditCard, Wallet } from 'lucide-react';

const Pricing: React.FC = () => {
  const pricingItems = [
    // Car Repairs
    {
      service: 'Oil Change',
      category: 'repairs',
      description: 'Full synthetic oil change with filter',
      price: 'KES 5,500',
      notes: 'Price may vary based on oil type and quantity required',
    },
    {
      service: 'Brake Service',
      category: 'repairs',
      description: 'Brake pad replacement (per axle)',
      priceRange: { min: 'KES 9,800', max: 'KES 18,500' },
      notes: 'Additional costs for rotors if needed',
    },
    {
      service: 'Engine Diagnostics',
      category: 'repairs',
      description: 'Computer diagnostic scan',
      price: 'KES 9,200',
    },
    {
      service: 'Battery Replacement',
      category: 'repairs',
      description: 'Including testing and installation',
      priceRange: { min: 'KES 15,000', max: 'KES 25,000' },
    },
    {
      service: 'Alternator Replacement',
      category: 'repairs',
      description: 'Parts and labor included',
      priceRange: { min: 'KES 30,000', max: 'KES 50,000' },
    },
    {
      service: 'Starter Replacement',
      category: 'repairs',
      description: 'Parts and labor included',
      priceRange: { min: 'KES 25,000', max: 'KES 43,000' },
    },
    {
      service: 'Toyota Timing Belt Replacement',
      category: 'repairs',
      description: 'For Toyota Corolla and similar models',
      priceRange: { min: 'KES 20,000', max: 'KES 35,000' },
    },
    {
      service: 'Subaru Head Gasket Repair',
      category: 'repairs',
      description: 'Complete head gasket replacement',
      priceRange: { min: 'KES 75,000', max: 'KES 120,000' },
    },
    {
      service: 'Mercedes Electrical System Diagnosis',
      category: 'repairs',
      description: 'Full electrical system check',
      price: 'KES 15,000',
    },
    
    // Painting Services
    {
      service: 'Full Body Paint',
      category: 'painting',
      description: 'Complete vehicle paint job',
      priceRange: { min: 'KES 180,000', max: 'KES 420,000' },
      notes: 'Price varies based on vehicle size and paint type',
    },
    {
      service: 'Panel Painting',
      category: 'painting',
      description: 'Single panel paint and repair',
      priceRange: { min: 'KES 25,000', max: 'KES 60,000' },
    },
    {
      service: 'Paint Protection',
      category: 'painting',
      description: 'Ceramic coating application',
      priceRange: { min: 'KES 60,000', max: 'KES 150,000' },
    },
    {
      service: 'Scratch Repair',
      category: 'painting',
      description: 'Minor scratch and paint touch-up',
      priceRange: { min: 'KES 6,000', max: 'KES 18,000' },
    },
    {
      service: 'Toyota Color Matching',
      category: 'painting',
      description: 'Precise color matching for Toyota models',
      price: 'KES 8,000',
    },
    {
      service: 'Mercedes Premium Paint',
      category: 'painting',
      description: 'Premium paint for Mercedes-Benz vehicles',
      priceRange: { min: 'KES 250,000', max: 'KES 450,000' },
    },
    
    // Regular Servicing
    {
      service: 'Basic Service',
      category: 'servicing',
      description: 'Oil change, filter replacement, inspection',
      price: 'KES 9,800',
    },
    {
      service: 'Full Service',
      category: 'servicing',
      description: 'Comprehensive vehicle check and service',
      price: 'KES 22,000',
    },
    {
      service: 'Major Service',
      category: 'servicing',
      description: 'Complete vehicle overhaul',
      priceRange: { min: 'KES 35,000', max: 'KES 60,000' },
      notes: 'Includes all fluids, filters, and detailed inspection',
    },
    {
      service: 'Air Conditioning Service',
      category: 'servicing',
      description: 'AC system check and recharge',
      price: 'KES 15,000',
    },
    {
      service: 'Toyota Corolla/Fielder Service',
      category: 'servicing',
      description: 'Specialized service for Toyota Corolla and Fielder models',
      price: 'KES 12,000',
    },
    {
      service: 'Toyota Prado/Land Cruiser Service',
      category: 'servicing',
      description: 'Full service for Toyota Prado and Land Cruiser',
      price: 'KES 25,000',
    },
    {
      service: 'Subaru Forester/Outback Service',
      category: 'servicing',
      description: 'Specialized service for Subaru models',
      price: 'KES 18,000',
    },
    {
      service: 'Mercedes C-Class/E-Class Service',
      category: 'servicing',
      description: 'Premium service for Mercedes-Benz vehicles',
      priceRange: { min: 'KES 30,000', max: 'KES 45,000' },
    },
    
    // Modifications
    {
      service: 'Performance Exhaust',
      category: 'modifications',
      description: 'Custom exhaust system installation',
      priceRange: { min: 'KES 50,000', max: 'KES 150,000' },
    },
    {
      service: 'ECU Tuning',
      category: 'modifications',
      description: 'Engine management optimization',
      priceRange: { min: 'KES 35,000', max: 'KES 100,000' },
    },
    {
      service: 'Suspension Upgrade',
      category: 'modifications',
      description: 'Coilover or lowering spring installation',
      priceRange: { min: 'KES 75,000', max: 'KES 180,000' },
    },
    {
      service: 'Wheel Package',
      category: 'modifications',
      description: 'Custom wheels and tires',
      priceRange: { min: 'KES 100,000', max: 'KES 300,000' },
      notes: 'Price varies based on wheel and tire selection',
    },
    {
      service: 'Toyota Hilux/Fortuner Off-Road Package',
      category: 'modifications',
      description: 'Complete off-road modification package',
      priceRange: { min: 'KES 200,000', max: 'KES 500,000' },
    },
    {
      service: 'Subaru WRX/STI Performance Tune',
      category: 'modifications',
      description: 'Performance enhancements for Subaru turbo models',
      priceRange: { min: 'KES 120,000', max: 'KES 250,000' },
    },
  ];

  const paymentMethods = [
    {
      icon: <CreditCard className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Multiple Payment Options',
      description: 'We accept M-Pesa, bank transfers, credit cards, and cash for your convenience.',
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Flexible Payment Plans',
      description: 'Ask about our financing options for larger repairs and services.',
    },
    {
      icon: <Clock className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Quick Processing',
      description: 'Fast and secure payment processing to get you back on the road.',
    },
    {
      icon: <Wallet className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Price Match Guarantee',
      description: "We'll match any comparable service price from authorized competitors in Nairobi.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Transparent Pricing For Quality Service"
        subtitle="Competitive rates for all our professional auto services in Kenya"
        ctaText="Book Now"
        ctaLink="/booking"
        image="https://images.unsplash.com/photo-1597766325363-8a88739265bb?ixlib=rb-4.0.3"
      />

      {/* Pricing Table Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Our Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Service Price List</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              Explore our comprehensive pricing for all services. All prices are in Kenyan Shillings and include labor unless otherwise noted.
            </p>
          </div>

          <PricingTable items={pricingItems} />
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-20 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-paulstarr-accent text-sm font-medium mb-4 reveal">Payment Methods</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Flexible Payment Options</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              We offer various payment methods to make your service experience as convenient as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-paulstarr-50 flex items-center justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-medium text-paulstarr-900 mb-2">{method.title}</h3>
                <p className="text-paulstarr-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-paulstarr-900 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">Need a Custom Quote?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
                Contact us for a detailed estimate based on your specific vehicle and service needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-700 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/booking"
                  className="px-8 py-3 bg-white text-paulstarr-900 font-medium rounded-md hover:bg-paulstarr-100 transition-all"
                >
                  Book Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
