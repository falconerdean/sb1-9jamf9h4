'use client';

import { Button } from '@/components/ui/button';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#F4FFF6] py-24">
      <div className="container-width px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Section */}
          <div>
            <h2 className="text-[45px] md:text-[65px] font-serif text-primary mb-8">
              Reach Out Today!
            </h2>
            <p className="text-[#8a9a83] text-[clamp(1rem,2vw,1.6rem)] leading-[1.3] font-semibold">
              Ready to begin your journey to wellness? Whether you have questions about our services, 
              insurance coverage, or would like to schedule a consultation, we're here to support you 
              every step of the way. Your path to better mental health starts with a simple conversation.
            </p>
            <Button 
              className="mt-8 bg-orange hover:bg-orange-dark text-white px-8 py-4 text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              View Our Contact Page
            </Button>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}