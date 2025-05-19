'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formName = "contact-form";
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#BAAC85] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 transform transition-transform duration-300 hover:translate-y-[-4px]">
      <h3 className="text-2xl font-serif text-white mb-6">Contact Us with Questions or to Schedule a Free Consultation</h3>
      
      <form
        name={formName}
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value={formName} />
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
            Your Name
          </label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Enter your name"
            className="w-full"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="Enter your email"
            className="w-full"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="Enter your phone number"
            className="w-full"
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
            Your Message
          </label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="How can we help you?"
            className="w-full"
            rows={4}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-orange hover:bg-orange-dark text-white font-medium py-3 rounded-full transition-colors duration-200"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending message..." : "Send message"}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}