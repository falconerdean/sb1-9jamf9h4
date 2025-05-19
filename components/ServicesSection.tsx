'use client';

import Image from 'next/image';
import mentalHealthImage from '@/public/images/services/mental-health copy.webp';
import substanceAbuseImage from '@/public/images/services/substance.webp';
import mensHealthImage from '@/public/images/services/mens-mental.webp';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  return (
    <section className="bg-[#F4FFF6] py-16">
      <div className="container-width px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 gap-16">
          {/* Mental Health Counseling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center min-h-[400px]">
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">Mental Health Counseling</h3>
              <p className="text-text-light text-lg md:text-xl mb-8 leading-relaxed">
                Our comprehensive mental health counseling services address a wide range of concerns including anxiety, depression, trauma, and relationship issues. We use evidence-based approaches tailored to your unique needs.
              </p>
            </div>
            <div className="relative p-4 bg-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] h-[400px]">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={mentalHealthImage}
                  alt="Mental Health Counseling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Substance Abuse Counseling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative p-4 bg-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] h-[400px]">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={substanceAbuseImage}
                  alt="Substance Abuse Counseling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center min-h-[400px]">
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">Substance Abuse Counseling</h3>
              <p className="text-text-light text-lg md:text-xl mb-8 leading-relaxed">
                Our substance abuse counseling program offers compassionate support for recovery. We provide individualized treatment plans, group therapy, and ongoing support for sustainable sobriety.
              </p>
            </div>
          </div>

          {/* Men's Mental Health */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center min-h-[400px]">
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">Men's Mental Health</h3>
              <p className="text-text-light text-lg md:text-xl mb-8 leading-relaxed">
                Specialized counseling services designed to address the unique mental health challenges faced by men. We create a safe, judgment-free space to explore emotions and develop healthy coping strategies.
              </p>
            </div>
            <div className="relative p-4 bg-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] h-[400px]">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={mensHealthImage}
                  alt="Men's Mental Health"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}