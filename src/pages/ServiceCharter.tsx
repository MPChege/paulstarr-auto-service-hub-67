import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/Hero';
import { setupScrollReveal } from '@/utils/animations';
import { Check, Phone } from 'lucide-react';

const ServiceCharter: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setupScrollReveal('.reveal');
  }, []);

  const commitments = [
    {
      number: '01',
      title: 'Show You the Problem First',
      description: 'Before any work begins, we will show you what is wrong — with photos, scans, or by walking you to the vehicle. You will never pay to fix something you haven\'t seen.',
    },
    {
      number: '02',
      title: 'Written Quote Before We Start',
      description: 'We provide a clear, itemised quote before touching your vehicle. No work begins without your approval. No surprise additions at collection.',
    },
    {
      number: '03',
      title: 'Return All Replaced Parts',
      description: 'Every part we remove during a repair is yours. We return them at collection so you can see exactly what was replaced and confirm the work was done.',
    },
    {
      number: '04',
      title: 'Honest Diagnosis — Nothing More',
      description: 'We will never tell you something is broken when it isn\'t. If we find other issues during the repair, we will inform you and quote separately before proceeding.',
    },
    {
      number: '05',
      title: 'One Workshop, All Services',
      description: 'Engine overhauls, panel beating, diagnostics, brakes, suspension — all under one roof. No bouncing between garages and no lost accountability.',
    },
    {
      number: '06',
      title: 'Dealership Precision at Garage Prices',
      description: 'We use the same tools, techniques and standards as authorised dealers. You get expert care without the authorised workshop markup.',
    },
    {
      number: '07',
      title: 'Respect Your Time',
      description: 'We will give you a realistic completion estimate and keep you updated if anything changes. Your time matters — we don\'t keep vehicles longer than necessary.',
    },
    {
      number: '08',
      title: 'Stand Behind Our Work',
      description: 'If a repair we carried out fails within a reasonable period under normal use, we will investigate and put it right. We stand behind every job we sign off on.',
    },
  ];

  return (
    <div className="w-full">
      <Hero
        title="Service Charter"
        subtitle="Our commitments to every customer, every vehicle, every time."
        ctaText="Get a Free Quote"
        ctaLink="/booking"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-6">What You Can Expect From Us</h2>
            <p className="text-paulstarr-600 text-lg">
              At Paulstar Auto-Care, honesty is not a marketing line — it's the foundation of every job we do. This charter sets out exactly what we commit to every time you bring your vehicle to us.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="py-4 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-paulstarr-50 rounded-xl border border-paulstarr-100 hover:shadow-elevated transition-all duration-300 reveal"
              >
                <div className="flex items-start">
                  <span className="text-4xl font-bold text-paulstarr-accent/20 mr-4 leading-none select-none">{item.number}</span>
                  <div>
                    <div className="flex items-center mb-2">
                      <Check size={18} className="text-paulstarr-accent mr-2 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-paulstarr-900">{item.title}</h3>
                    </div>
                    <p className="text-paulstarr-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-paulstarr-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hold Us to This Charter</h2>
            <p className="text-white/80 text-lg mb-8">
              If at any point your experience falls short of these commitments, speak to us directly. We take every concern seriously and we will make it right.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/booking')}
                className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-700 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Book an Appointment
              </button>
              <a
                href="tel:+254726243626"
                className="px-8 py-3 bg-white text-paulstarr-900 font-medium rounded-md hover:bg-paulstarr-100 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                +254 726 243626
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCharter;
