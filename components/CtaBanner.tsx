'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://try-insite.github.io/site-data/kevin/life.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-[400px] md:min-h-[600px] lg:min-h-[800px] flex items-start pt-16">
        <div className="container-width px-8 w-full">
          <div className="max-w-4xl">
            <h2 className="text-[45px] lg:text-[65px] font-serif font-[400] leading-tight mb-8 md:mb-0 text-white">
              Spend less time worrying<br />
              and more time living
            </h2>
            <div className="flex flex-col items-start gap-4 mt-8 pb-12 md:pb-0">
              <a 
                href="tel:856-437-0274" 
                className="flex items-center justify-center gap-2 text-lg text-white hover:text-orange transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>856-437-0274</span>
              </a>
              <Button 
                className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-lg w-full sm:w-auto"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}