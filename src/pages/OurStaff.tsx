import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/Hero';
import { setupScrollReveal } from '@/utils/animations';
import { Wrench, ShieldCheck, Zap, PaintBucket } from 'lucide-react';

const staffMembers = [
  {
    name: 'Paul Ndegwa',
    role: 'Founder & Master Technician',
    speciality: 'Engine Overhaul & Mechanical',
    icon: <Wrench size={28} className="text-paulstarr-accent" />,
    bio: 'With over 12 years hands-on experience, Paul founded Paulstar Auto-Care on a single principle — show the customer the problem before you fix it. He leads all major engine rebuilds and complex diagnostics.',
    image: '/lovable-uploads/a38ff821-3f72-4a68-b97f-7e567d02ebec.png',
  },
  {
    name: 'James Mwangi',
    role: 'Senior Panel Beater',
    speciality: 'Panel Beating & Spray Painting',
    icon: <PaintBucket size={28} className="text-paulstarr-accent" />,
    bio: 'James has spent over 8 years perfecting collision repair and spray painting. His eye for detail and colour matching means every vehicle leaves the workshop looking factory-fresh.',
    image: '/lovable-uploads/345f5c29-ac04-462f-afb7-a37e6ef4863d.png',
  },
  {
    name: 'David Kariuki',
    role: 'Diagnostics & Electrical Specialist',
    speciality: 'Computerized Diagnostics & Electrics',
    icon: <Zap size={28} className="text-paulstarr-accent" />,
    bio: 'David runs all OBD scanning, electrical fault-finding and ECU diagnostics. He trained across multiple dealerships before joining Paulstar and brings dealership-level precision to every scan.',
    image: '/lovable-uploads/fc7137cb-758e-4d76-a8ef-61a423d180c0.png',
  },
  {
    name: 'Samuel Otieno',
    role: 'Suspension & Brake Technician',
    speciality: 'Suspension, Steering & Brake Systems',
    icon: <ShieldCheck size={28} className="text-paulstarr-accent" />,
    bio: 'Samuel specialises in suspension rebuilds and brake systems, with deep knowledge of the specific wear patterns Nairobi roads inflict on vehicles. He handles all alignment, shock replacement and brake work.',
    image: '/lovable-uploads/b2dae066-82cf-4255-a062-0cbe92ed7092.png',
  },
];

const OurStaff: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setupScrollReveal('.reveal');
  }, []);

  return (
    <div className="w-full">
      <Hero
        title="Our Staff"
        subtitle="Meet the expert technicians behind every honest diagnosis and quality repair at Paulstar Auto-Care."
        ctaText="Book an Appointment"
        ctaLink="/booking"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-6">Technicians Who Treat Your Car Like Their Own</h2>
            <p className="text-paulstarr-600 text-lg">
              Every member of the Paulstar team is chosen for their technical skill and their commitment to honest, transparent service. When your car is with us, it's in expert hands.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="bg-paulstarr-50 rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 reveal"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-1">
                    <div className="mr-3">{member.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-paulstarr-900">{member.name}</h3>
                      <p className="text-paulstarr-accent font-medium text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-paulstarr-500 font-medium uppercase tracking-wide mb-3 mt-2">{member.speciality}</p>
                  <p className="text-paulstarr-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-2xl md:text-3xl font-bold text-paulstarr-900 mb-4">Ready to Meet the Team?</h2>
            <p className="text-paulstarr-600 mb-8">
              Drop by our Utawala workshop or book an appointment and let our technicians take care of your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/booking')}
                className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-800 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Book an Appointment
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 border border-paulstarr-accent text-paulstarr-accent font-medium rounded-md hover:bg-paulstarr-accent hover:text-white transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStaff;
