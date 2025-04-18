import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

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
    } else if (!formData.email.includes('@')) {
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

      try {
        // First, save to database
        const { error: dbError } = await supabase
          .from('contact_submissions')
          .insert([formData]);

        if (dbError) {
          throw new Error(`Database error: ${dbError.message}`);
        }

        // Then, send email
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || 'Failed to send email');
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

  return (
    <AnimatePresence>
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div 
            className="absolute inset-0 bg-theme-background/60 backdrop-blur-md"
            onClick={() => setShowContactModal(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-theme-background rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-theme-secondary/10 shadow-xl"
          >
            <div className="sticky top-0 bg-theme-background z-10 px-6 py-4 border-b border-theme-secondary/10">
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute right-4 top-4 text-theme-secondary/60 hover:text-theme-secondary"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold text-theme-secondary">Let us help you!</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                    errors.name ? 'border-red-500' : 'border-theme-secondary/10'
                  } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                  Studio Name
                </label>
                <input
                  type="text"
                  name="studio_name"
                  value={formData.studio_name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                    errors.studio_name ? 'border-red-500' : 'border-theme-secondary/10'
                  } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                  placeholder="Your Pilates Studio"
                />
                {errors.studio_name && (
                  <p className="mt-1 text-sm text-red-500">{errors.studio_name}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                      errors.city ? 'border-red-500' : 'border-theme-secondary/10'
                    } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                      errors.state ? 'border-red-500' : 'border-theme-secondary/10'
                    } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                  >
                    <option value="">Select State</option>
                    {states.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                {(errors.city || errors.state) && (
                  <p className="col-span-2 -mt-2 text-sm text-red-500">
                    {errors.city || errors.state}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                      errors.phone_number ? 'border-red-500' : 'border-theme-secondary/10'
                    } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone_number && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone_number}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                      errors.email ? 'border-red-500' : 'border-theme-secondary/10'
                    } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                    placeholder="studio@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                    errors.service ? 'border-red-500' : 'border-theme-secondary/10'
                  } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                >
                  <option value="">Select a service</option>
                  <option value="repair">Repair/Maintenance</option>
                  <option value="install">Install/Relocation</option>
                  <option value="premier">Premier Maintenance Partnership</option>
                  <option value="other">Other Questions</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-theme-secondary/80 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-3 py-2 rounded-lg bg-theme-background/50 border ${
                    errors.message ? 'border-red-500' : 'border-theme-secondary/10'
                  } text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent`}
                  placeholder="Tell us about your studio's needs..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-theme-primary text-theme-secondary py-2.5 rounded-lg transition-all flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
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
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
