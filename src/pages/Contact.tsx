
import React from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Our Location',
      details: ['123 Auto Service Road', 'Cartown, CT 12345'],
      action: {
        text: 'Get Directions',
        link: 'https://maps.google.com',
      },
    },
    {
      icon: <Phone className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Phone Number',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
      action: {
        text: 'Call Us',
        link: 'tel:+15551234567',
      },
    },
    {
      icon: <Mail className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Email Address',
      details: ['info@paulstarrautospares.com', 'service@paulstarrautospares.com'],
      action: {
        text: 'Send Email',
        link: 'mailto:info@paulstarrautospares.com',
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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Get In Touch With Us"
        subtitle="We're here to answer your questions and provide the support you need"
        ctaText="Call Now"
        ctaLink="tel:+15551234567"
        image="https://images.unsplash.com/photo-1486927678348-e44d54e12b26?ixlib=rb-4.0.3"
      />

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Reach Out To Our Team</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              Whether you have questions about our services, need to schedule an appointment, or want to discuss a custom project, we're here to help.
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
                  Have a question or need assistance? Fill out the form below, and our team will get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-soft h-[450px] reveal">
              {/* Replace with actual Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1647532256650!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Paulstarr Auto Spares location"
              ></iframe>
            </div>
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
                Schedule your service appointment today and experience the Paulstarr Auto Spares difference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
                <Link
                  to="/booking"
                  className="px-8 py-3 bg-paulstarr-accent text-white font-medium rounded-md hover:bg-paulstarr-700 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Book Now
                </Link>
                <a
                  href="tel:+15551234567"
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
