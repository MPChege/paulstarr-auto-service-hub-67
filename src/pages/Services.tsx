import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import { Wrench, PaintBucket, Settings, Check, ArrowRight, Hammer } from 'lucide-react';
import { setupScrollReveal } from '@/utils/animations';

const Services: React.FC = () => {
  useEffect(() => {
    setupScrollReveal('.reveal');
  }, []);

  // Service categories
  const categories = [
    {
      id: 'repairs',
      title: 'Car Repairs',
      description: 'Our certified technicians provide comprehensive repair services to fix any issues with your vehicle.',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3',
      icon: <Wrench size={24} />,
      services: [
        {
          name: 'Engine Repair',
          description: 'Complete diagnostics and repair of engine issues, from minor fixes to major overhauls.',
          pricing: 'From $80',
        },
        {
          name: 'Brake Service',
          description: 'Inspection and repair of brake pads, rotors, calipers, and brake lines to ensure your safety.',
          pricing: 'From $60',
        },
        {
          name: 'Electrical System',
          description: 'Troubleshooting and repair of electrical issues, including battery, alternator, and starter problems.',
          pricing: 'From $50',
        },
        {
          name: 'Suspension & Steering',
          description: 'Repair and replacement of suspension components for a smoother ride and better handling.',
          pricing: 'From $75',
        },
        {
          name: 'Transmission Repair',
          description: 'Expert diagnosis and repair of manual and automatic transmission problems.',
          pricing: 'From $150',
        },
        {
          name: 'AC & Heating',
          description: 'Repair and maintenance of your vehicle\'s climate control system for year-round comfort.',
          pricing: 'From $90',
        },
      ],
    },
    {
      id: 'painting',
      title: 'Car Painting',
      description: 'Premium auto painting services to restore your car\'s appearance or give it a completely new look.',
      image: 'https://images.unsplash.com/photo-1603069260957-2facb1168ae0?ixlib=rb-4.0.3',
      icon: <PaintBucket size={24} />,
      services: [
        {
          name: 'Full Body Paint',
          description: 'Complete repaint of your vehicle with premium paint and clear coat for lasting protection.',
          pricing: 'From $1,200',
        },
        {
          name: 'Color Matching',
          description: 'Precise color matching technology to ensure repairs blend seamlessly with your existing paint.',
          pricing: 'From $150',
        },
        {
          name: 'Custom Finishes',
          description: 'Specialty paint finishes including metallic, pearl, matte, and custom color options.',
          pricing: 'From $1,500',
        },
        {
          name: 'Scratch & Dent Repair',
          description: 'Repair of scratches, dents, and minor collision damage with paint touch-up.',
          pricing: 'From $80',
        },
      ],
    },
    {
      id: 'servicing',
      title: 'Regular Servicing',
      description: 'Routine maintenance services to keep your vehicle running smoothly and prevent costly repairs.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3',
      icon: <Hammer size={24} />,
      services: [
        {
          name: 'Oil Change',
          description: 'Regular oil and filter changes using high-quality oils to keep your engine running smoothly.',
          pricing: 'From $30',
        },
        {
          name: 'Tune-Up',
          description: 'Comprehensive engine tune-up service including spark plugs, filters, and system checks.',
          pricing: 'From $90',
        },
        {
          name: 'Tire Service',
          description: 'Tire rotation, balancing, and alignment to extend tire life and improve handling.',
          pricing: 'From $40',
        },
        {
          name: 'Fluid Service',
          description: 'Inspection and replacement of engine fluids including coolant, brake fluid, and transmission fluid.',
          pricing: 'From $50',
        },
        {
          name: 'Battery Service',
          description: 'Battery testing, charging, and replacement to ensure reliable starts every time.',
          pricing: 'From $25',
        },
      ],
    },
    {
      id: 'modifications',
      title: 'Car Modifications',
      description: 'Custom modifications to enhance your vehicle\'s performance, aesthetics, and functionality.',
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3',
      icon: <Settings size={24} />,
      services: [
        {
          name: 'Performance Upgrades',
          description: 'Engine performance modifications including air intakes, exhausts, and ECU tuning.',
          pricing: 'From $250',
        },
        {
          name: 'Custom Exhaust',
          description: 'Custom exhaust system design and installation for improved sound and performance.',
          pricing: 'From $350',
        },
        {
          name: 'Suspension Upgrades',
          description: 'Lowering springs, coilovers, and performance shock absorbers for better handling.',
          pricing: 'From $400',
        },
        {
          name: 'Interior Customization',
          description: 'Custom upholstery, audio systems, lighting, and convenience feature installation.',
          pricing: 'From $200',
        },
        {
          name: 'Wheel & Tire Packages',
          description: 'Custom wheels and performance tires to improve looks and handling.',
          pricing: 'From $800',
        },
        {
          name: 'Body Kits & Styling',
          description: 'Aerodynamic body kits, spoilers, and custom styling elements to enhance appearance.',
          pricing: 'From $500',
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Our Comprehensive Services"
        subtitle="Expert auto services for all your vehicle needs"
        ctaText="Book Now"
        ctaLink="/booking"
        image="https://images.unsplash.com/photo-1562259929-75edcbcfd2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Services We Offer</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              Discover our range of professional auto services designed to keep your vehicle in perfect condition.
            </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-20">
            {categories.map((category, index) => (
              <div key={category.id} className="reveal" id={category.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-elevated">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paulstarr-900/60"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-paulstarr-accent/90 backdrop-blur-sm flex items-center justify-center">
                            {category.icon}
                          </div>
                          <h3 className="text-2xl font-bold ml-3">{category.title}</h3>
                        </div>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-6">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex}
                          className="p-6 bg-white rounded-xl border border-paulstarr-100 shadow-soft hover:shadow-elevated transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-paulstarr-900">{service.name}</h4>
                            <span className="px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium">
                              {service.pricing}
                            </span>
                          </div>
                          <p className="text-paulstarr-600">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="py-20 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-paulstarr-accent text-sm font-medium mb-4 reveal">Our Guarantee</span>
              <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-6 reveal">Quality Service Guarantee</h2>
              <p className="text-paulstarr-600 mb-8 reveal">
                We stand behind our work with a comprehensive service guarantee. Our team of certified professionals ensures that every job is completed to the highest standards of quality and craftsmanship.
              </p>

              <div className="space-y-4 reveal">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900">Warranty on Parts & Labor</h3>
                    <p className="text-paulstarr-600">All repairs come with a comprehensive warranty on both parts and labor.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900">Transparent Pricing</h3>
                    <p className="text-paulstarr-600">No hidden fees or surprises. We provide detailed estimates before starting work.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900">Expert Technicians</h3>
                    <p className="text-paulstarr-600">Our ASE-certified technicians have years of experience and continuous training.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative reveal">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Quality service"
                className="rounded-xl shadow-elevated"
              />

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-elevated max-w-xs hidden lg:block">
                <h4 className="text-lg font-semibold text-paulstarr-900 mb-2">Need Emergency Service?</h4>
                <p className="text-paulstarr-600 mb-4">Our team is available for urgent repairs and roadside assistance.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-paulstarr-accent font-medium hover:text-paulstarr-800 transition-colors"
                >
                  Contact Us Now
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-paulstarr-900 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">Ready to Experience Our Service?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
                Book an appointment today and let our expert team take care of your vehicle.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
                <Link
                  to="/booking"
                  className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-700 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Book an Appointment
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-white text-paulstarr-900 font-medium rounded-md hover:bg-paulstarr-100 transition-all"
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

export default Services;
