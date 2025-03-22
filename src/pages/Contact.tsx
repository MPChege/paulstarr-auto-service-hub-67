
import React from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, ArrowRight, Globe, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Our Location',
      details: ['Plot 6 Amuwo Odofin Industrial Scheme', 'Amuwo Odofin, Lagos, Nigeria'],
      action: {
        text: 'Get Directions',
        link: 'https://maps.google.com/?q=Plot+6+Amuwo+Odofin+Industrial+Scheme,Lagos',
      },
    },
    {
      icon: <Phone className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Phone Number',
      details: ['+234 1 280 0471', '+234 803 720 0001'],
      action: {
        text: 'Call Us',
        link: 'tel:+2348037200001',
      },
    },
    {
      icon: <Mail className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Email Address',
      details: ['info@paulstarautocare.com', 'service@paulstarautocare.com'],
      action: {
        text: 'Send Email',
        link: 'mailto:info@paulstarautocare.com',
      },
    },
    {
      icon: <Clock className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 3:00 PM', 'Sunday: Closed'],
      action: {
        text: 'Book Appointment',
        link: '/booking',
        isInternal: true,
      },
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: 'Facebook',
      url: 'https://www.facebook.com/p/Paulstar-Auto-Care-Limited-100054297457146/',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: 'Website',
      url: 'https://paulstarautocare.com',
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Get In Touch With Us"
        subtitle="We're here to provide quality auto services at the best prices"
        ctaText="Call Now"
        ctaLink="tel:+2348037200001"
        image="https://images.unsplash.com/photo-1486927678348-e44d54e12b26?ixlib=rb-4.0.3"
      />

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Reach Out To Our Team</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              For quality car repair, maintenance, and auto care services in Lagos, contact Paulstar Auto Care Limited today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactDetails.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-soft border border-paulstarr-100 transition-all duration-300 hover:shadow-elevated reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-paulstarr-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-paulstarr-900 mb-2">{item.title}</h3>
                <div className="mb-4">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-paulstarr-600">{detail}</p>
                  ))}
                </div>
                {item.action && (
                  item.action.isInternal ? (
                    <Link to={item.action.link} className="flex items-center text-paulstarr-accent hover:text-paulstarr-700 font-medium">
                      {item.action.text} <ArrowRight size={16} className="ml-1" />
                    </Link>
                  ) : (
                    <a href={item.action.link} className="flex items-center text-paulstarr-accent hover:text-paulstarr-700 font-medium" target="_blank" rel="noopener noreferrer">
                      {item.action.text} <ArrowRight size={16} className="ml-1" />
                    </a>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-paulstarr-50 text-paulstarr-800 rounded-full hover:bg-paulstarr-100 transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-paulstarr-900 mb-4">Send Us A Message</h2>
                <p className="text-paulstarr-600">
                  Have a question about our services or need to schedule a repair? Fill out the form below, and our team will get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-soft h-[450px] reveal">
              {/* Updated Google Maps embed with the actual location in Lagos */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6332003881474!2d3.296022914326056!3d6.438753095344578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b890001e4c957%3A0x7e9f222e3b43284a!2sAmuwo%20Odofin%20Industrial%20Scheme%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680812345678!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Paulstar Auto Care Limited location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-paulstarr-900 mb-4 reveal">Our Auto Care Services</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              At Paulstar Auto Care Limited, we offer comprehensive auto services in Lagos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {["Vehicle Maintenance", "Auto Diagnostics", "Engine Repair", "Brake Services", "Electrical Repairs", "Paint Services"].map((service, index) => (
              <div key={index} className="p-6 border border-paulstarr-100 rounded-lg shadow-soft hover:shadow-elevated transition-all">
                <h3 className="text-lg font-medium text-paulstarr-900 mb-2">{service}</h3>
                <p className="text-paulstarr-600">Professional and timely service from experienced technicians.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-paulstarr-900 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">Ready To Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
                Schedule your service appointment today with Paulstar Auto Care Limited, Lagos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
                <Link
                  to="/booking"
                  className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-700 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Book Now
                </Link>
                <a
                  href="tel:+2348037200001"
                  className="px-8 py-3 bg-white text-paulstarr-900 font-medium rounded-md hover:bg-paulstarr-100 transition-all"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
