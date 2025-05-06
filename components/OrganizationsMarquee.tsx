'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import zocdocLogo from '@/public/images/orgs/zocdoc-logo-zocdoc.png';
import therapistLogo from '@/public/images/orgs/therapist.png';
import psychologyTodayLogo from '@/public/images/orgs/psychologytoday.png';
import headwayLogo from '@/public/images/orgs/headway-logo.png';
import georgianCourtLogo from '@/public/images/orgs/georgian-court-university-logo.png';

const organizations = [
  { name: "ZocDoc", logo: zocdocLogo, width: 200 },
  { name: "Therapist.com", logo: therapistLogo, width: 220 },
  { name: "Psychology Today", logo: psychologyTodayLogo, width: 240 },
  { name: "Headway", logo: headwayLogo, width: 180 },
  { name: "Georgian Court University", logo: georgianCourtLogo, width: 260 }
];

export function OrganizationsMarquee() {
  return (
    <section className="bg-[#F4FFF6] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F4FFF6] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F4FFF6] to-transparent z-10" />
          
          {/* Scrolling container */}
          <Marquee direction="right" speed={25} gradient={false} pauseOnHover={true} className="py-8">
            {/* Organizations */}
            {organizations.map((org, index) => (
              <div
                key={index}
                className="mx-16 flex-shrink-0 transform transition-all duration-300 hover:scale-105"
                style={{ width: org.width + 'px' }}
              >
                <div className="relative h-[80px]">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    fill
                    className="object-contain"
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(39%) sepia(19%) saturate(669%) hue-rotate(64deg) brightness(94%) contrast(89%)'
                    }}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}