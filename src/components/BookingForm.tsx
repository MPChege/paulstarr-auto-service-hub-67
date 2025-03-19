import React, { useState } from 'react';
import { CalendarIcon, Clock, Car, Wrench, User, Mail, Phone, Check } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface BookingFormProps {
  services?: { id: string; name: string }[];
}

const BookingForm: React.FC<BookingFormProps> = ({
  services = [
    { id: 'repair', name: 'Car Repairs' },
    { id: 'painting', name: 'Painting' },
    { id: 'servicing', name: 'Servicing' },
    { id: 'modifications', name: 'Modifications' },
  ],
}) => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // Common car makes in Kenya
  const commonCarMakes = [
    'Toyota', 'Subaru', 'Mercedes-Benz', 'Nissan', 'Mitsubishi', 
    'Honda', 'Mazda', 'Isuzu', 'Volkswagen', 'Land Rover', 'Lexus'
  ];

  // Car models based on make
  const getCarModels = (make: string) => {
    switch (make) {
      case 'Toyota':
        return [
          'Corolla', 'Fielder', 'Premio', 'Vitz', 'Prado', 
          'Land Cruiser', 'Hilux', 'Fortuner', 'RAV4', 'Wish', 
          'Noah', 'Voxy', 'Hiace', 'Harrier', 'Probox', 'Succeed',
          'Land Cruiser V8', 'Alphard', 'Crown', 'Mark X', 'Belta'
        ];
      case 'Subaru':
        return [
          'Forester', 'Outback', 'Impreza', 'Legacy', 'XV', 
          'WRX', 'STI', 'Levorg', 'Crosstrek', 'Tribeca'
        ];
      case 'Mercedes-Benz':
        return [
          'C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE',
          'G-Wagon', 'ML', 'A-Class', 'B-Class', 'GLS',
          'GLK', 'CLA', 'GLA', 'Maybach'
        ];
      case 'Lexus':
        return [
          'LX 570', 'RX 350', 'IS 250', 'ES 350', 'GX 460',
          'NX 200t', 'LS 460', 'RC 350', 'UX 200'
        ];
      default:
        return [];
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!service || !date || !time) {
        toast.error('Please fill all fields');
        return;
      }
    } else if (step === 2) {
      if (!carMake || !carModel || !carYear) {
        toast.error('Please fill all fields');
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Booking submitted successfully! We will contact you shortly.');
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setCarMake('');
      setCarModel('');
      setCarYear('');
      setService('');
      setDate(undefined);
      setTime('');
      setMessage('');
      setStep(1);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  step >= i 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-100 text-blue-400'
                }`}
              >
                {step > i ? <Check size={18} /> : i}
              </div>
              <span className={`mt-2 text-sm ${step >= i ? 'text-blue-900' : 'text-blue-400'}`}>
                {i === 1 ? 'Service & Date' : i === 2 ? 'Vehicle Info' : 'Your Details'}
              </span>
            </div>
          ))}
        </div>
        <div className="relative h-1 bg-blue-100 mt-4">
          <div 
            className="absolute h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 pb-8">
        {/* Step 1: Service selection and date */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      <div className="flex items-center">
                        <Wrench size={16} className="mr-2 text-blue-600" />
                        {service.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-blue-600" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Select Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger id="time" className="w-full">
                  <SelectValue placeholder="Select time">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-blue-600" />
                      {time || "Select time"}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-blue-600" />
                        {slot}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Vehicle information */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="carMake">Car Make</Label>
              <Select value={carMake} onValueChange={setCarMake}>
                <SelectTrigger id="carMake" className="w-full">
                  <SelectValue placeholder="Select car make">
                    <div className="flex items-center">
                      <Car size={16} className="mr-2 text-blue-600" />
                      {carMake || "Select car make"}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {commonCarMakes.map((make) => (
                    <SelectItem key={make} value={make}>
                      <div className="flex items-center">
                        <Car size={16} className="mr-2 text-blue-600" />
                        {make}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="carModel">Car Model</Label>
              <Select 
                value={carModel} 
                onValueChange={setCarModel}
                disabled={!carMake}
              >
                <SelectTrigger id="carModel" className="w-full">
                  <SelectValue placeholder={carMake ? "Select car model" : "Select car make first"} />
                </SelectTrigger>
                <SelectContent>
                  {carMake && getCarModels(carMake).map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="carYear">Year</Label>
              <Select value={carYear} onValueChange={setCarYear}>
                <SelectTrigger id="carYear" className="w-full">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 25 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details (Optional)</Label>
              <textarea
                id="message"
                rows={3}
                placeholder="Please describe any specific issues or requests..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Step 3: Contact information */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                <Input
                  id="phone"
                  placeholder="07XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-blue-600 mb-4">
                By submitting this form, you agree to be contacted regarding your appointment.
              </p>
            </div>
          </div>
        )}

        {/* Form navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              className="px-6"
            >
              Previous
            </Button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="px-6 bg-blue-600 hover:bg-blue-800 focus:ring-blue-600"
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              className="px-6 bg-blue-600 hover:bg-blue-800 focus:ring-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book Appointment'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

