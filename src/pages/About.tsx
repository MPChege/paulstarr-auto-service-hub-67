import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/Hero';
import { setupScrollReveal } from '@/utils/animations';
import { Phone, MapPin, Clock, Check } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setupScrollReveal('.reveal');
  }, []);

  const values = [
    {
      title: 'Show You Before We Fix It',
      description: 'We share photos and diagnostic scans of every fault we find before any work begins — and return old parts as proof.',
    },
    {
      title: 'No Mystery Pricing',
      description: 'Clear written quotes before we start. No inflated estimates, no hidden charges added at collection.',
    },
    {
      title: 'Fixed Right First Time',
      description: 'We don\'t just mask symptoms — we find the root cause, explain it, and repair it properly so it doesn\'t come back.',
    },
    {
      title: 'Built for Nairobi Roads',
      description: '12 years in Utawala taught us exactly what Nairobi traffic and roads do to vehicles — and how to make repairs last.',
    },
  ];

  return (
    <div className="w-full">
      <Hero
        title="Our Story"
        subtitle="Fixing Cars & Trucks For Over 12 Years — One Honest Diagnosis at a Time"
        ctaText="Book an Appointment"
        ctaLink="/booking"
        secondaryCta={{ text: 'Our Services', link: '/services' }}
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-6">
                Paulstar Auto-Care Started With a Simple Belief
              </h2>
              <p className="text-paulstarr-600 mb-5 text-lg">
                Car owners deserve to see what's broken before paying to fix it. No mysteries. No inflated quotes. No crossing your fingers and hoping the repair actually worked.
              </p>
              <p className="text-paulstarr-600 mb-5">
                From our Utawala workshop along the Eastern Bypass, we've built our reputation one honest diagnosis at a time. Engine rebuilds that last. Panel beating that erases every trace of damage. Mechanical repairs backed by proof you can see and hold in your hands.
              </p>
              <p className="text-paulstarr-600 mb-8">
                We're not the garage that tells you everything's fine when it isn't — or tells you everything's broken when it's not. We're the ones who show you the problem, explain why it happened, and fix it right the first time.
              </p>
              <button
                onClick={() => navigate('/booking')}
                className="px-6 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-800 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Make an Appointment
              </button>
            </div>

            <div className="relative reveal">
              <img
                src="/lovable-uploads/345f5c29-ac04-462f-afb7-a37e6ef4863d.png"
                alt="Paulstar Auto-Care workshop"
                className="w-full h-[480px] object-cover rounded-xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paulstarr-900/60 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">12+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">5000+</div>
                    <div className="text-sm text-white/80">Cars Serviced</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">97%</div>
                    <div className="text-sm text-white/80">Satisfied Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-paulstarr-accent text-sm font-medium mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4">We Fix the Problems Nairobi Creates</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600">
              Utawala's potholes destroy suspensions. Stop-and-go traffic kills clutches and overheats engines. 12 years in this city taught us what actually breaks — and how to make it last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft border border-paulstarr-100 reveal">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-paulstarr-50 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check size={20} className="text-paulstarr-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-paulstarr-900 mb-2">{value.title}</h3>
                    <p className="text-paulstarr-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Paulstar Promise */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4">The Paulstar Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-6">Your Car's In Good Hands Here</h2>
            <p className="text-paulstarr-600 text-lg mb-6">
              For 12 years, Paulstar Auto-Care has been the garage Nairobi drivers trust when honesty matters more than markup. We show you what's broken with photos and scans before we fix it — and we return the old parts to prove it.
            </p>
            <p className="text-paulstarr-600 mb-10">
              Engine rebuilds, collision repairs, brake jobs, or just an oil change — every vehicle gets the same obsessive care and transparent service. No runaround. No surprise bills. Just expert technicians who treat your car like it's their own.
            </p>
            <button
              onClick={() => navigate('/booking')}
              className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-800 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Book an Appointment Today
            </button>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-paulstarr-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="reveal">
              <MapPin size={32} className="text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Find Us</h3>
              <p className="text-white/70 text-sm">
                Utawala along the Eastern Bypass,<br />
                opposite Fun City Gardens &amp; next to<br />
                BE Petrol Station, Nairobi
              </p>
            </div>
            <div className="reveal">
              <Phone size={32} className="text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:+254726243626" className="text-white/70 hover:text-yellow-400 transition-colors">
                +254 726 243626
              </a>
            </div>
            <div className="reveal">
              <Clock size={32} className="text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-white/70 text-sm">
                Mon – Sat: 8:00 AM – 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
