
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import PricingTable from '@/components/PricingTable';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, Users, Star, Award, Shield, Wrench, Palette, Settings, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const serviceItems = [
    // Car Repairs
    {
      service: 'Complete Engine Diagnostics',
      category: 'repairs',
      description: 'Advanced computer diagnostic scanning with detailed reporting and recommendations',
      notes: 'Includes comprehensive system analysis and performance optimization suggestions',
    },
    {
      service: 'Professional Oil Change Service',
      category: 'repairs',
      description: 'Premium synthetic oil change with high-quality filter replacement',
      notes: 'We use only certified oils suitable for your specific vehicle model',
    },
    {
      service: 'Advanced Brake System Service',
      category: 'repairs',
      description: 'Complete brake inspection, pad replacement, and system optimization',
      notes: 'Safety-first approach with quality parts and professional installation',
    },
    {
      service: 'Electrical System Repair',
      category: 'repairs',
      description: 'Expert diagnosis and repair of all automotive electrical components',
      notes: 'Specialized in modern vehicle electrical systems and diagnostics',
    },
    
    // Painting Services
    {
      service: 'Premium Paint Restoration',
      category: 'painting',
      description: 'Complete vehicle paint restoration with color matching and protection',
      notes: 'Using premium automotive paints with long-lasting finish guarantee',
    },
    {
      service: 'Ceramic Paint Protection',
      category: 'painting',
      description: 'Advanced ceramic coating for ultimate paint protection and shine',
      notes: 'Professional-grade ceramic coating with multi-year protection',
    },
    {
      service: 'Custom Paint Solutions',
      category: 'painting',
      description: 'Bespoke painting services for unique and custom vehicle finishes',
      notes: 'From classic restorations to modern custom designs',
    },
    
    // Regular Servicing
    {
      service: 'Comprehensive Vehicle Service',
      category: 'servicing',
      description: 'Complete multi-point inspection and maintenance service',
      notes: 'Covers all major systems with detailed service report',
    },
    {
      service: 'Climate Control Service',
      category: 'servicing',
      description: 'AC system maintenance, repair, and performance optimization',
      notes: 'Includes refrigerant check, leak detection, and system cleaning',
    },
    {
      service: 'Preventive Maintenance',
      category: 'servicing',
      description: 'Scheduled maintenance to keep your vehicle running smoothly',
      notes: 'Customized maintenance schedule based on your driving patterns',
    },
    
    // Modifications
    {
      service: 'Performance Enhancement',
      category: 'modifications',
      description: 'Engine tuning and performance modifications for optimal power',
      notes: 'Safe and reliable performance upgrades with warranty coverage',
    },
    {
      service: 'Suspension Upgrades',
      category: 'modifications',
      description: 'Custom suspension solutions for improved handling and comfort',
      notes: 'Professional installation with alignment and testing included',
    },
    {
      service: 'Aesthetic Modifications',
      category: 'modifications',
      description: 'Custom styling and aesthetic enhancements for your vehicle',
      notes: 'From subtle improvements to complete transformations',
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in automotive care and customer satisfaction.',
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Quality Guarantee',
      description: 'All work backed by comprehensive warranty and quality assurance.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of specialized automotive experience.',
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Efficient Service',
      description: 'Quick turnaround times without compromising on quality or attention to detail.',
    },
  ];

  const stats = [
    { number: '2000+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { number: '15+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
    { number: '100%', label: 'Satisfaction Rate', icon: <Star className="w-6 h-6" /> },
  ];

  const serviceCategories = [
    { id: 'repairs', name: 'Repairs', icon: <Wrench className="w-5 h-5" />, color: 'bg-red-500' },
    { id: 'painting', name: 'Painting', icon: <Palette className="w-5 h-5" />, color: 'bg-purple-500' },
    { id: 'servicing', name: 'Servicing', icon: <Settings className="w-5 h-5" />, color: 'bg-blue-500' },
    { id: 'modifications', name: 'Modifications', icon: <Zap className="w-5 h-5" />, color: 'bg-yellow-500' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Premium Automotive Services"
        subtitle="Experience excellence in every detail with our comprehensive automotive care solutions"
        ctaText="Explore Services"
        ctaLink="#services"
        image="https://images.unsplash.com/photo-1597766325363-8a88739265bb?ixlib=rb-4.0.3"
      />

      {/* Stats Section */}
      <section className="py-16 bg-paulstarr-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center reveal"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-paulstarr-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-paulstarr-accent text-sm font-medium mb-4 reveal">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Excellence in Every Service</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              Discover what sets us apart in the automotive service industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-paulstarr-50 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-paulstarr-900 mb-3">{feature.title}</h3>
                <p className="text-paulstarr-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Service Categories</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              Comprehensive automotive solutions across all major service areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {serviceCategories.map((category, index) => (
              <div 
                key={category.id}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 reveal cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-paulstarr-900">{category.name}</h3>
              </div>
            ))}
          </div>

          {/* Service Showcase */}
          <div id="services">
            <PricingTable items={serviceItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-paulstarr-900 to-paulstarr-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">Ready to Experience Excellence?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
                Join thousands of satisfied customers who trust us with their automotive needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
                <Link
                  to="/booking"
                  className="px-8 py-4 bg-paulstarr-accent text-white font-medium rounded-lg hover:bg-paulstarr-700 transition-all transform hover:translate-y-[-2px] hover:shadow-xl"
                >
                  Book Your Service
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-paulstarr-900 font-medium rounded-lg hover:bg-paulstarr-100 transition-all"
                >
                  Contact Us
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
