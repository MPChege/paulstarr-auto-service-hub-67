import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Gallery from '@/components/Gallery';
import { Wrench, PaintBucket, Settings, ArrowRight, Phone, Calendar, Users, Hammer, Car } from 'lucide-react';
import { setupScrollReveal } from '@/utils/animations';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setupScrollReveal('.reveal');
  }, []);

  const services = [
    {
      title: 'Engine Overhaul & Mechanical Repairs',
      description: 'Full engine rebuilds and mechanical repairs that last. We show you the problem, explain why it happened, and fix it right the first time.',
      icon: <Wrench size={18} />,
      image: '/lovable-uploads/b2dae066-82cf-4255-a062-0cbe92ed7092.png',
      features: ['Engine Rebuilds', 'Clutch & Gearbox', 'Cooling System', 'Routine Maintenance'],
    },
    {
      title: 'Panel Beating & Spray Painting',
      description: 'Collision repairs that erase every trace of damage. Professional panel beating and spray painting to dealership standards.',
      icon: <PaintBucket size={18} />,
      image: '/lovable-uploads/fc7137cb-758e-4d76-a8ef-61a423d180c0.png',
      features: ['Full Body Repair', 'Color Matching', 'Dent Removal', 'Spray Painting'],
    },
    {
      title: 'Suspension & Steering Repairs',
      description: "Nairobi's potholes destroy suspensions. We build heavy-duty setups built for rough roads so your car handles and rides properly.",
      icon: <Hammer size={18} />,
      image: '/lovable-uploads/13b6d8c7-a433-4d8b-9b79-eaa0462265a6.png',
      features: ['Shock Absorbers', 'Wheel Alignment', 'Steering Rack', 'Bushings & Joints'],
    },
    {
      title: 'Computerized Diagnostics',
      description: 'We scan, diagnose and give you photos and printouts before we fix anything — no mysteries, no inflated quotes.',
      icon: <Settings size={18} />,
      image: '/lovable-uploads/af2ec558-cf59-4376-86d2-c458f9815053.png',
      features: ['OBD Scanning', 'Fault Code Reading', 'Pre-purchase Inspection', 'Electrical Faults'],
    }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      date: 'July 15, 2023',
      service: 'Car Repair',
      rating: 5,
      text: 'Absolutely amazing service! They diagnosed and fixed a problem that two other shops couldn\'t figure out. Fair pricing and excellent communication throughout the process.',
    },
    {
      name: 'Sarah Williams',
      date: 'June 3, 2023',
      service: 'Car Painting',
      rating: 5,
      text: 'The paint job on my car looks better than when it was new. Attention to detail is incredible and the staff was professional and friendly. Highly recommend!',
    },
    {
      name: 'David Martinez',
      date: 'August 22, 2023',
      service: 'Regular Servicing',
      rating: 4,
      text: 'Great regular maintenance service. They explained everything they were doing and even showed me the worn parts they replaced. Will definitely be back.',
    },
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/345f5c29-ac04-462f-afb7-a37e6ef4863d.png",
      alt: "Car repair work",
      caption: "Expert engine repair services"
    },
    {
      src: "/lovable-uploads/fc7137cb-758e-4d76-a8ef-61a423d180c0.png",
      alt: "Car painting process",
      caption: "Professional auto painting"
    },
    {
      src: "/lovable-uploads/af2ec558-cf59-4376-86d2-c458f9815053.png",
      alt: "Car modification",
      caption: "Custom performance modifications"
    },
    {
      src: "/lovable-uploads/b2dae066-82cf-4255-a062-0cbe92ed7092.png",
      alt: "Car repair services",
      caption: "Comprehensive mechanical repairs"
    },
    {
      src: "/lovable-uploads/13b6d8c7-a433-4d8b-9b79-eaa0462265a6.png",
      alt: "Regular servicing",
      caption: "Routine maintenance and servicing"
    }
  ];

  const stats = [
    { value: '12+', label: 'Years of Experience', icon: <Users size={24} className="text-paulstarr-accent" /> },
    { value: '5000+', label: 'Cars Serviced', icon: <Car size={24} className="text-paulstarr-accent" /> },
    { value: '97%', label: 'Customer Satisfaction', icon: <Phone size={24} className="text-paulstarr-accent" /> },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Fixing Cars & Trucks For Over 12 Years"
        subtitle="Engine rebuilds, panel beating, diagnostics & mechanical repairs — all under one roof. Dealership precision at garage prices, Utawala Eastern Bypass."
        ctaText="Book an Appointment"
        ctaLink="/booking"
        secondaryCta={{ text: 'Explore Services', link: '/services' }}
      />

      {/* Services Section */}
      <section className="py-14 md:py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Comprehensive Auto Services</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              From routine maintenance to complex repairs and custom modifications, our expert team provides quality service for all your automotive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                features={service.features}
                link="/booking"
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/services')}
              className="group inline-flex items-center px-6 py-3 rounded-md border border-paulstarr-accent text-paulstarr-accent hover:bg-paulstarr-accent hover:text-white transition-all duration-300"
            >
              View All Services
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 md:py-16 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-paulstarr-accent text-sm font-medium mb-4 reveal">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-6 reveal">We Fix the Problems Nairobi Creates</h2>
              <p className="text-paulstarr-600 mb-8 reveal">
                Utawala's potholes destroy suspensions. Stop-and-go traffic from Mombasa Road to Thika Road kills clutches and overheats engines. Dusty conditions clog air filters faster than anywhere else. 12 years in this city taught us what actually breaks — and how to make it last.
              </p>

              <div className="space-y-4 reveal">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900 mb-1">Transparent Before We Touch It</h3>
                    <p className="text-paulstarr-600">We show you photos and scans of what's broken before we fix it — and return the old parts as proof.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900 mb-1">One Roof, All Services</h3>
                    <p className="text-paulstarr-600">Engine rebuilds, panel beating, diagnostics, and mechanical repairs — stop bouncing between workshops.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900 mb-1">Dealership Precision, Garage Prices</h3>
                    <p className="text-paulstarr-600">Expert service across all major car brands without the dealership markup.</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => navigate('/booking')}
                className="mt-10 px-6 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-800 transition-all transform hover:translate-y-[-2px] hover:shadow-lg reveal"
              >
                Schedule Service
              </button>
            </div>
            
            <div className="relative reveal">
              <div className="relative rounded-xl overflow-hidden shadow-elevated">
                <img 
                  src="/lovable-uploads/345f5c29-ac04-462f-afb7-a37e6ef4863d.png" 
                  alt="Paulstar Auto-Care workshop" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paulstarr-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          {stat.icon}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-elevated hidden md:block">
                <div className="flex items-center">
                  <Calendar size={24} className="text-paulstarr-accent mr-3" />
                  <div>
                    <p className="text-sm text-paulstarr-500">Working Hours</p>
                    <p className="font-medium text-paulstarr-900">Mon–Sat, 8:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              Don't just take our word for it. Hear from our satisfied customers about their experiences with Paulstarr Auto Spares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                date={testimonial.date}
                service={testimonial.service}
                rating={testimonial.rating}
                text={testimonial.text}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery images={galleryImages} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 parallax">
          <div 
            className="parallax-bg" 
            data-speed="0.3"
            style={{
              backgroundImage: `url('/lovable-uploads/af2ec558-cf59-4376-86d2-c458f9815053.png')`,
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="absolute inset-0 bg-paulstarr-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">Ready to Get Your Car Serviced?</h2>
            <p className="text-xl text-white/90 mb-8 reveal">
              Stop bouncing between workshops. Get engine rebuilds, panel beating, diagnostics, and mechanical repairs all under one roof — done right the first time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
              <button
                onClick={() => navigate('/booking')}
                className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-700 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Book an Appointment
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-white text-paulstarr-900 font-medium rounded-md hover:bg-paulstarr-100 transition-all"
              >
                Contact Us
              </button>
            </div>
            
            <div className="mt-8 inline-block bg-yellow-400/90 rounded-lg px-6 py-3 text-blue-900 font-bold">
              Priority Service: +254 726 243626
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

// Helper component for Check icons
const Check: React.FC<{ size: number; className?: string }> = ({ size, className }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};
