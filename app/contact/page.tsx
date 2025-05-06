'use client';

import { ContactForm } from '@/components/ContactForm';
import { AcceptedInsurance } from '@/components/AcceptedInsurance';

export default function ContactPage() {
  return (
    <div className="pb-16">
      <div className="bg-[#F4FFF6]/30 py-16">
        <div className="container-width px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-center">
              Contact Us
            </h1>
            <p className="text-text-light text-lg text-center mb-12">
              We're here to help you take the first step on your journey to better mental health. 
              Fill out the form below, and we'll respond to your inquiry within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Info Section */}
              <div>
                <h2 className="text-2xl font-serif text-primary mb-4">
                  Get in Touch
                </h2>
                <p className="text-text-light mb-6">
                  Whether you have questions about our services, insurance coverage, or would like to schedule a consultation, 
                  we're here to support you every step of the way.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-orange font-bold">Location:</span>
                    <span className="text-text-light">Manchester, NJ 08759</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-orange font-bold">Phone:</span>
                    <a href="tel:856-437-0274" className="text-text-light hover:text-orange transition-colors">
                      856-437-0274
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-orange font-bold">Email:</span>
                    <a href="mailto:Kevin.Ford@KindConsciousness.org" className="text-text-light hover:text-orange transition-colors">
                      Kevin.Ford@KindConsciousness.org
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-primary mb-3">Available Online</h3>
                <div className="space-y-2">
                  <p className="text-text-light"><span className="text-orange font-medium">Monday & Tuesday:</span> 10:00am - 5:30pm</p>
                  <p className="text-text-light"><span className="text-orange font-medium">Wednesday & Thursday:</span> 9:30am - 9:00pm</p>
                  <p className="text-text-light"><span className="text-orange font-medium">Friday:</span> 10:00am - 3:30pm</p>
                  <p className="text-text-light"><span className="text-orange font-medium">Saturday:</span> Off</p>
                  <p className="text-text-light"><span className="text-orange font-medium">Sunday:</span> 8:00am - 11:00am</p>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4FFF6]">
        <AcceptedInsurance />
      </div>
    </div>
  );
}