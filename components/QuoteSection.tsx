'use client';

import { Button } from '@/components/ui/button';
import { ContactFormEmbed } from './ContactFormEmbed';

export function QuoteSection() {
  return (
    <section className="bg-[#F4FFF6] py-16">
      <div className="container-width px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Quote and Description Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-16">
              <div className="relative flex justify-center">
                <span className="absolute -top-8 left-0 text-[80px] text-[#536c46]/30 quote-text">"</span>
                <blockquote className="text-3xl md:text-6xl lg:text-7xl quote-text leading-tight mx-12">
                  <span className="text-[#536c46]">Nothing is </span>
                  <span className="text-orange">Impossible</span>
                  <span className="text-[#536c46]">.</span><br />
                  <span className="text-[#536c46]">The word itself says,</span><br />
                  <span className="text-orange">I'm possible!</span>
                </blockquote>
                <span className="absolute -bottom-12 right-0 text-[80px] text-[#536c46]/30 quote-text">"</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[#8a9a83] text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.3] font-semibold">
                A <span className="text-[#E8963F]">New Jersey</span> based psychology practice specializing in <span className="text-[#E8963F]">mental health counseling</span>, <span className="text-[#E8963F]">substance abuse counseling</span>, and <span className="text-[#E8963F]">men's mental health</span> issues for individuals 16 and older.
              </p>
              <Button 
                className="mt-8 bg-orange hover:bg-orange-dark text-white px-8 py-4 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Contact Form Column */}
          <div>
            <ContactFormEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}