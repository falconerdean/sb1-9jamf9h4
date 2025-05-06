'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/public/images/logo-transparent-bg-center-only.webp';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#59654F] text-white pt-16 relative">
      <div className="container mx-auto px-4 pb-6">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Logo Column (40%) */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start mb-12 lg:mb-0 lg:-mt-[100px]">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#372919] border-4 border-[#2a3921] shadow-lg overflow-hidden">
              <Image
                src={logoImage}
                alt="Kind Consciousness Counseling Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Column (60%) */}
          <div className="w-full lg:w-[60%] lg:pl-[80px]">
            <h2 className="text-[24px] leading-[34px] font-['Josefin_Sans'] font-bold text-[#F4FFF6] tracking-wide lg:text-[32px] lg:leading-[42px]">
              Kind Consciousness Counseling Services
            </h2>
            
            <div className="mt-8">
              <h3 className="text-[20px] font-['Josefin_Sans'] font-bold underline text-[#F4FFF6]">Primary Location</h3>
              <p className="text-[18px]">Manchester, NJ 08759</p>
              <a href="tel:856-437-0274" className="text-[18px] hover:text-[#E8963F] transition-colors block">856-437-0274</a>
              <p className="text-[18px]">Kevin.Ford@KindConsciousness.org</p>
            </div>

            <div className="mt-8">
              <h3 className="text-[20px] font-['Josefin_Sans'] font-bold text-[#F4FFF6]">Available Online Only</h3>
              <div className="mt-3">
                <p className="text-[18px]"><span className="text-[#E8963F]">Monday</span> & <span className="text-[#E8963F]">Tuesday</span> 10:00am - 5:30pm</p>
                <p className="text-[18px]"><span className="text-[#E8963F]">Wednesday</span> & <span className="text-[#E8963F]">Thursday</span> 9:30am - 9:00pm</p>
                <p className="text-[18px]"><span className="text-[#E8963F]">Friday</span> 10:00am - 3:30pm</p>
                <p className="text-[18px]"><span className="text-[#E8963F]">Saturday</span> Off</p>
                <p className="text-[18px]"><span className="text-[#E8963F]">Sunday</span> 8:00am - 11:00am</p>
              </div>
            </div>

            <Button 
              className="mt-8 bg-[#E8963F] hover:bg-[#d17e2f] text-white rounded-full px-12 py-3 text-[18px]"
              onClick={() => window.location.href = '/contact'}
            >
              Reach Out
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <p className="text-[14px]">© 2025 All Rights Reserved | Kind Consciousness Counseling Services, LLC.</p>
          <div className="mt-2 space-x-4">
            <Link 
              href="/privacy" 
              className="text-[14px] hover:text-[#E8963F] transition-colors underline inline-block"
            >
              Privacy & Terms
            </Link>
            <Link 
              href="/good-faith" 
              className="text-[14px] hover:text-[#E8963F] transition-colors underline inline-block"
            >
              Good Faith Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}