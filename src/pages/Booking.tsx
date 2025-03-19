
import React from 'react';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import { PhoneCall, CalendarDays, Clock, MapPin } from 'lucide-react';

const Booking: React.FC = () => {
  const bookingInfo = [
    {
      icon: <PhoneCall className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Phone Booking',
      description: 'Call us directly at (123) 456-7890 for immediate assistance.',
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Online Booking',
      description: 'Book your preferred date and time online with instant confirmation.',
    },
    {
      icon: <Clock className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Service Hours',
      description: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM, Sun: Closed',
    },
    {
      icon: <MapPin className="w-6 h-6 text-paulstarr-accent" />,
      title: 'Location',
      description: '123 Auto Service Road, Cartown, CT 12345',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Book Your Service Appointment"
        subtitle="Schedule your vehicle service with our expert team"
        image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3"
      />

      {/* Booking Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-paulstarr-50 text-paulstarr-accent text-sm font-medium mb-4 reveal">Book Now</span>
            <h2 className="text-3xl md:text-4xl font-bold text-paulstarr-900 mb-4 reveal">Easy Booking Process</h2>
            <p className="max-w-2xl mx-auto text-paulstarr-600 reveal">
              Choose your preferred booking method and let us take care of your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {bookingInfo.map((info, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-paulstarr-50 flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-medium text-paulstarr-900 mb-2">{info.title}</h3>
                <p className="text-paulstarr-600">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-elevated p-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-paulstarr-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-paulstarr-accent text-sm font-medium mb-4 reveal">Important Information</span>
              <h2 className="text-3xl font-bold text-paulstarr-900 mb-6 reveal">What to Expect</h2>
              <div className="space-y-4 reveal">
                <p className="text-paulstarr-600">
                  When you book an appointment with Paulstarr Auto Spares, here's what you can expect:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Confirmation email with appointment details and preparation instructions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Initial inspection and detailed cost estimate before work begins
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Regular updates on service progress
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Final quality check and service review upon completion
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-paulstarr-accent text-sm font-medium mb-4 reveal">Cancellation Policy</span>
              <h2 className="text-3xl font-bold text-paulstarr-900 mb-6 reveal">Flexible Rescheduling</h2>
              <div className="space-y-4 reveal">
                <p className="text-paulstarr-600">
                  We understand that plans can change. Our booking policy includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Free cancellation up to 24 hours before your appointment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Easy rescheduling through our online system or phone
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Priority rebooking for cancelled appointments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-paulstarr-accent/10 flex items-center justify-center mt-1 mr-3">
                      <span className="block w-2 h-2 rounded-full bg-paulstarr-accent"></span>
                    </span>
                    <span className="text-paulstarr-600">
                      Emergency service options available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
