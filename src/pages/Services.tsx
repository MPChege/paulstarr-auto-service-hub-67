
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import { Wrench, PaintBucket, Settings, Check, ArrowRight, Hammer } from 'lucide-react';
import { setupScrollReveal } from '@/utils/animations';

const Services: React.FC = () => {
  useEffect(() => {
    setupScrollReveal('.reveal');
  }, []);

  const categories = [
    {
      id: 'engine-mechanical',
      title: 'Engine Overhaul & Mechanical Repairs',
      description: 'Full engine rebuilds and mechanical repairs backed by proof you can see and hold in your hands.',
      image: '/lovable-uploads/b2dae066-82cf-4255-a062-0cbe92ed7092.png',
      icon: <Wrench size={24} />,
      services: [
        { name: 'Engine Overhaul & Rebuild', description: 'Complete engine strip-down, inspection, and rebuild to factory spec. Old parts returned as proof.' },
        { name: 'Cooling System Service', description: 'Radiator flush, thermostat replacement, coolant refresh — prevents overheating in Nairobi traffic.' },
        { name: 'Clutch & Transmission Repairs', description: 'Clutch replacement, gearbox rebuild, and automatic transmission servicing for all makes.' },
        { name: 'Routine Service & Maintenance', description: 'Oil changes, filters, spark plugs, and full vehicle health checks to keep breakdowns away.' },
      ],
    },
    {
      id: 'panel-beating',
      title: 'Panel Beating & Spray Painting',
      description: 'Collision repairs that erase every trace of damage, finished to dealership standards.',
      image: '/lovable-uploads/fc7137cb-758e-4d76-a8ef-61a423d180c0.png',
      icon: <PaintBucket size={24} />,
      services: [
        { name: 'Panel Beating', description: 'Frame straightening and panel reshaping after accidents or impact damage — no trace left behind.' },
        { name: 'Full Spray Painting', description: 'Complete vehicle repaint with matched colour, primer coat, and UV-resistant clear finish.' },
        { name: 'Dent & Scratch Repair', description: 'Localised dent removal and scratch touch-up for minor collision and parking damage.' },
        { name: 'Colour Matching', description: 'Computerised colour matching ensures seamless blends with factory paint on any panel.' },
      ],
    },
    {
      id: 'suspension-steering',
      title: 'Suspension & Steering Repairs',
      description: "Built for Nairobi's roads — heavy-duty repairs that handle potholes, rough terrain and constant loading.",
      image: '/lovable-uploads/af2ec558-cf59-4376-86d2-c458f9815053.png',
      icon: <Hammer size={24} />,
      services: [
        { name: 'Shock Absorber Replacement', description: 'OEM and heavy-duty aftermarket shocks for smooth riding on rough Nairobi roads.' },
        { name: 'Wheel Alignment & Balancing', description: 'Computer-aided alignment to prevent uneven tyre wear and improve steering precision.' },
        { name: 'Steering Rack & Column Repair', description: 'Full steering system inspection and repair — power steering fluid, rack, and column joints.' },
        { name: 'Bushings, Ball Joints & Control Arms', description: 'Replacement of worn suspension linkages that cause vibration, pulling, and tyre wear.' },
      ],
    },
    {
      id: 'brake-system',
      title: 'Brake System Service',
      description: 'Brake systems built for constant stopping in Nairobi traffic — safety you can feel and trust.',
      image: '/lovable-uploads/13b6d8c7-a433-4d8b-9b79-eaa0462265a6.png',
      icon: <Settings size={24} />,
      services: [
        { name: 'Brake Pad & Disc Replacement', description: 'High-quality pads and discs for all vehicle types — we inspect before quoting.' },
        { name: 'Brake Fluid Flush', description: 'Old brake fluid attracts moisture and reduces stopping power. We flush and refill to spec.' },
        { name: 'ABS System Diagnosis & Repair', description: 'Scan and repair ABS faults to restore electronic braking safety systems.' },
        { name: 'Handbrake & Cable Adjustment', description: 'Cable adjustment and drum shoe replacement for reliable parking brake performance.' },
      ],
    },
    {
      id: 'diagnostics-electrical',
      title: 'Computerized Diagnostics & Electrical Repairs',
      description: 'We scan, show you the fault with photos, and explain it before we touch anything.',
      image: '/lovable-uploads/345f5c29-ac04-462f-afb7-a37e6ef4863d.png',
      icon: <Settings size={24} />,
      services: [
        { name: 'OBD Diagnostic Scan', description: 'Full ECU scan across all vehicle systems — engine, transmission, ABS, airbags and more.' },
        { name: 'Electrical System Repairs', description: 'Wiring faults, short circuits, fuse replacements, and component-level electrical repairs.' },
        { name: 'Battery & Alternator Testing', description: 'Load-test battery health, check alternator output, and replace if needed.' },
        { name: 'Pre-Purchase Inspection', description: 'Thorough mechanical and electrical check before you buy a used car — know what you\'re getting.' },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Engine rebuilds, panel beating, diagnostics and mechanical repairs — dealership precision at garage prices, Utawala Eastern Bypass."
        ctaText="Get a Free Quote"
        ctaLink="/booking"
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
                          <h4 className="text-lg font-semibold text-paulstarr-900 mb-2">{service.name}</h4>
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
              <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-6 reveal">The Paulstar Promise</h2>
              <p className="text-paulstarr-600 mb-8 reveal">
                For 12 years, Paulstar Auto-Care has been the garage Nairobi drivers trust when honesty matters more than markup. Every vehicle gets the same obsessive care and transparent service. No runaround. No surprise bills.
              </p>

              <div className="space-y-4 reveal">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900">Show You Before We Fix It</h3>
                    <p className="text-paulstarr-600">Photos and diagnostic scans shared with you before any work begins — and old parts returned as proof.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900">Transparent Quotes, No Surprises</h3>
                    <p className="text-paulstarr-600">Clear pricing before we start. No inflated quotes, no mystery charges.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-paulstarr-900">Expert Technicians, All Major Brands</h3>
                    <p className="text-paulstarr-600">Our team treats your car like it's their own — delivering expert service across all major car brands.</p>
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
