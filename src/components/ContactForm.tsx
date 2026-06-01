
import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const services = [
  'Engine Overhaul & Mechanical Repairs',
  'Panel Beating & Spray Painting',
  'Suspension & Steering Repairs',
  'Brake System Service',
  'Routine Service & Maintenance',
  'Computerized Diagnostics',
  'Clutch & Transmission Repairs',
  'Cooling System Service',
  'Electrical System Repairs',
  'Other / Not Sure',
];

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error('Please fill in your name, phone number and message.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent! We\'ll call you back shortly.');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    }, 1500);
  };

  const inputClass = 'w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">Full Name *</Label>
        <div className="relative">
          <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input id="name" placeholder="Your full name" value={form.name} onChange={set('name')} className="pl-9" />
        </div>
      </div>

      {/* Phone + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">Phone Number *</Label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="phone" type="tel" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={set('phone')} className="pl-9" />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">Email (optional)</Label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} className="pl-9" />
          </div>
        </div>
      </div>

      {/* Service */}
      <div>
        <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-1 block">Service Needed</Label>
        <div className="relative">
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <select
            id="service"
            value={form.service}
            onChange={set('service')}
            className={`${inputClass} appearance-none pr-9`}
          >
            <option value="">Select a service…</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">Message *</Label>
        <div className="relative">
          <MessageSquare size={16} className="absolute left-3 top-3 text-gray-400" />
          <textarea
            id="message"
            rows={4}
            placeholder="Describe your vehicle's issue or what you need…"
            value={form.message}
            onChange={set('message')}
            className={`${inputClass} pl-9 resize-none`}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending…
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Send Message <Send size={16} />
          </span>
        )}
      </Button>

      <p className="text-xs text-gray-400 text-center">We typically respond within a few hours during working hours.</p>
    </form>
  );
};

export default ContactForm;
