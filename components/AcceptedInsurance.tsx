'use client';

import Image from 'next/image';
import aetnaLogo from '@/public/images/logos/aetna.png';
import bcbsLogo from '@/public/images/logos/BCBSMA_Logo.png';
import carelonLogo from '@/public/images/logos/carelon-logo.png';
import cignaLogo from '@/public/images/logos/Cigna-Logo.png';
import oscarLogo from '@/public/images/logos/oscar.png';
import oxfordLogo from '@/public/images/logos/oxford-health-plans-logo-png-transparent.png';
import unitedLogo from '@/public/images/logos/united-healthcare.png';
import questLogo from '@/public/images/logos/quest-logo-light.png';

const insuranceLogos = [
  { name: 'Aetna Insurance', logo: aetnaLogo, width: 180 },
  { name: 'Massachusetts Insurance', logo: bcbsLogo, width: 160 },
  { name: 'Carelon Insurance', logo: carelonLogo, width: 190 },
  { name: 'Cigna Insurance', logo: cignaLogo, width: 200 },
  { name: 'Oscar Insurance', logo: oscarLogo, width: 170 },
  { name: 'Oxford Health Insurance', logo: oxfordLogo, width: 200 },
  { name: 'United Healthcare Insurance', logo: unitedLogo, width: 190 },
  { name: 'Quest Insurance', logo: questLogo, width: 180 }
];

export function AcceptedInsurance() {
  return (
    <section className="bg-[#F4FFF6] py-16">
      <div className="max-w-[1200px] w-full mx-auto px-[5%]">
        <h2 className="text-[36px] font-medium font-serif text-[#4d5d41] mb-6">
          Accepted Insurance
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[40px] gap-y-[60px] my-[50px]">
          {insuranceLogos.map((logo, index) => (
            <div 
              key={index}
              className="flex justify-center items-center h-[60px]"
            >
              <div 
                className="relative w-full transition-transform duration-200 hover:scale-105"
                style={{
                  maxWidth: `${logo.width}px`,
                  height: '55px'
                }}
              >
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  style={{ 
                    filter: 'brightness(0) saturate(100%) invert(39%) sepia(19%) saturate(669%) hue-rotate(64deg) brightness(94%) contrast(89%)'
                  }}
                  sizes={`(max-width: 640px) 180px,
                          (max-width: 768px) 140px,
                          (max-width: 1024px) 160px,
                          ${logo.width}px`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#333333] text-base">
            Don't see your insurance provider? Contact us to discuss alternative payment options and sliding scale fees.
          </p>
        </div>
      </div>
    </section>
  );
}