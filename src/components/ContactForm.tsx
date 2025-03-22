
import React, { useState, useEffect } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Debug render confirmation
  useEffect(() => {
    console.log('ContactForm component mounted');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We will contact you shortly.');
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-paulstarr-500" />
          <Input
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-paulstarr-500" />
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <MessageSquare size={18} className="absolute left-3 top-3 text-paulstarr-500" />
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-paulstarr-accent focus:border-transparent"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-paulstarr-accent hover:bg-paulstarr-800 focus:ring-paulstarr-accent"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <span className="loading-dot w-2 h-2 bg-white rounded-full mx-0.5 animate-pulse"></span>
            <span className="loading-dot w-2 h-2 bg-white rounded-full mx-0.5 animate-pulse delay-75"></span>
            <span className="loading-dot w-2 h-2 bg-white rounded-full mx-0.5 animate-pulse delay-150"></span>
          </span>
        ) : (
          <span className="flex items-center">
            Send Message
            <Send size={16} className="ml-2" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
