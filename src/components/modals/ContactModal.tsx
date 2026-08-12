import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  showContactModal: boolean;
  setShowContactModal: (show: boolean) => void;
}

interface FormData {
  name: string;
  studio_name: string;
  city: string;
  state: string;
  phone_number: string;
  email: string;
  service: string;
  message: string;
}

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export function ContactModal({ showContactModal, setShowContactModal }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studio_name: '',
    city: '',
    state: '',
    phone_number: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
    }

    if (!formData.studio_name.trim()) {
      newErrors.studio_name = 'Studio name is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      console.log('Form data being submitted:', formData);

      try {
        // First, save to database
        const { error: dbError } = await supabase
          .from('contact_submissions')
          .insert([{
            name: formData.name.trim(),
            studio_name: formData.studio_name.trim(),
            city: formData.city.trim(),
            state: formData.state,
            phone_number: formData.phone_number.trim(),
            email: formData.email.trim(),
            service: formData.service,
            message: formData.message.trim()
          }]);

        if (dbError) {
          console.error('Database error:', dbError);
          // Continue even if database fails, just log it
          console.warn('Database save failed, continuing with email send');
        }

        // Then, send email
        console.log('Attempting to send email...');
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            studio_name: formData.studio_name.trim(),
            city: formData.city.trim(),
            state: formData.state,
            phone_number: formData.phone_number.trim(),
            email: formData.email.trim(),
            service: formData.service,
            message: formData.message.trim()
          })
        });

        console.log('Email response status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Email send failed:', errorData);
          throw new Error(errorData.error || 'Failed to send email');
        }

        const result = await response.json();
        console.log('Email send result:', result);

        if (!result.success) {
          throw new Error(result.error || 'Failed to process email');
        }

        setSubmitStatus('success');
        setTimeout(() => {
          setShowContactModal(false);
          setFormData({
            name: '',
            studio_name: '',
            city: '',
            state: '',
            phone_number: '',
            email: '',
            service: '',
            message: ''
          });
          setSubmitStatus('idle');
        }, 2000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Let us help you!</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="mb-1 block">
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(errors.name && "border-destructive")}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="studio_name" className="mb-1 block">
              Studio Name
            </Label>
            <Input
              id="studio_name"
              type="text"
              name="studio_name"
              value={formData.studio_name}
              onChange={handleChange}
              className={cn(errors.studio_name && "border-destructive")}
              placeholder="Your Pilates Studio"
            />
            {errors.studio_name && (
              <p className="mt-1 text-sm text-destructive">{errors.studio_name}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city" className="mb-1 block">
                City
              </Label>
              <Input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={cn(errors.city && "border-destructive")}
                placeholder="City"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-destructive">{errors.city}</p>
              )}
            </div>
            <div>
              <Label htmlFor="state" className="mb-1 block">
                State
              </Label>
              <Select
                value={formData.state}
                onValueChange={(v) => handleSelectChange('state', v)}
              >
                <SelectTrigger id="state" className={cn(errors.state && "border-destructive")}>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map(st => (
                    <SelectItem key={st} value={st}>{st}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && (
                <p className="mt-1 text-sm text-destructive">{errors.state}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone_number" className="mb-1 block">
                Phone Number
              </Label>
              <Input
                id="phone_number"
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className={cn(errors.phone_number && "border-destructive")}
                placeholder="(123) 456-7890"
              />
              {errors.phone_number && (
                <p className="mt-1 text-sm text-destructive">{errors.phone_number}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="mb-1 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={cn(errors.email && "border-destructive")}
                placeholder="studio@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="service" className="mb-1 block">
              Service Interest
            </Label>
            <Select
              value={formData.service}
              onValueChange={(v) => handleSelectChange('service', v)}
            >
              <SelectTrigger id="service" className={cn(errors.service && "border-destructive")}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="repair">Repair/Maintenance</SelectItem>
                <SelectItem value="install">Install/Relocation</SelectItem>
                <SelectItem value="premier">Premier Maintenance Partnership</SelectItem>
                <SelectItem value="inspection">Free 30 Minute Inspection/Evaluation</SelectItem>
                <SelectItem value="other">Other Questions</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="mt-1 text-sm text-destructive">{errors.service}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="mb-1 block">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className={cn(errors.message && "border-destructive")}
              placeholder="Tell us about your studio's needs..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              'Message Sent!'
            ) : submitStatus === 'error' ? (
              'Failed to Send - Try Again'
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
