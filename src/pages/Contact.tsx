
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import { setupScrollReveal } from '@/utils/animations';
import {
  MapPin, Phone, Mail, Clock,
  Facebook, Instagram, MessageCircle,
  ArrowRight, Navigation,
} from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    setupScrollReveal('.reveal');
  }, []);

  return (
    <div className="w-full">

      {/* ── Page Header ── */}
      <section className="bg-paulstarr-900 pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/af2ec558-cf59-4376-86d2-c458f9815053.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Talk About Your Car
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Drop us a message, call directly, or find us at our Utawala workshop. We're here Mon–Sat, 8 AM–6 PM.
            </p>

            {/* Quick-action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+254726243626"
                className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-paulstarr-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all hover:shadow-lg"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/254726243626"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-all hover:shadow-lg"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/place/Paulstar+auto+care-+limited/@-1.2751665,36.9728319,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-white/20 transition-all"
              >
                <Navigation size={18} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Details ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Contact Form — wider */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-soft p-8 reveal">
              <h2 className="text-2xl font-bold text-paulstarr-900 mb-1">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill in your details and we'll get back to you shortly. For urgent jobs, call or WhatsApp directly.
              </p>
              <ContactForm />
            </div>

            {/* Contact Details — narrower */}
            <div className="lg:col-span-2 space-y-5 reveal">

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-paulstarr-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-paulstarr-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-paulstarr-900 mb-1">Find Us</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Utawala along the Eastern Bypass,<br />
                      opposite Fun City Gardens &amp; next to<br />
                      BE Petrol Station, Nairobi 00100
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Paulstar+auto+care-+limited/@-1.2751665,36.9728319,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-paulstarr-accent text-sm font-medium hover:underline"
                    >
                      Open in Maps <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-paulstarr-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-paulstarr-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-paulstarr-900 mb-1">Call or WhatsApp</h3>
                    <a href="tel:+254726243626" className="text-gray-500 text-sm hover:text-paulstarr-accent transition-colors block">
                      +254 726 243626
                    </a>
                    <a
                      href="https://wa.me/254726243626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <MessageCircle size={13} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-paulstarr-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-paulstarr-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-paulstarr-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@paulstarautocare.co.ke"
                      className="text-gray-500 text-sm hover:text-paulstarr-accent transition-colors"
                    >
                      info@paulstarautocare.co.ke
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-paulstarr-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-paulstarr-accent" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-semibold text-paulstarr-900 mb-3">Working Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Monday – Friday</span>
                        <span className="font-medium text-paulstarr-900">8:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Saturday</span>
                        <span className="font-medium text-paulstarr-900">8:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Sunday</span>
                        <span className="font-medium text-red-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <h3 className="font-semibold text-paulstarr-900 mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/p/Paulstar-Auto-Care-Limited-100054297457146/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    <Facebook size={16} /> Facebook
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-lg text-sm font-medium hover:bg-pink-100 transition-colors"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-Width Map ── */}
      <section className="reveal">
        <div className="w-full h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.799194976835!2d36.97283191487576!3d-1.2751664990715282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6b2ad93eae47%3A0x3ece2f71e58621fe!2sPaulstar%20auto%20care-%20limited!5e0!3m2!1sen!2sus!4v1693348765483!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Paulstar Auto Care — Utawala, Nairobi"
          />
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section className="py-12 bg-paulstarr-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Not sure what your car needs?</h2>
              <p className="text-white/60">Call us and describe the symptom — we'll tell you what to expect before you even drive in.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="tel:+254726243626"
                className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-paulstarr-900 font-bold rounded-lg hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                <Phone size={18} /> +254 726 243626
              </a>
              <Link
                to="/booking"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-white/20 transition-all whitespace-nowrap"
              >
                Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
