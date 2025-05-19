'use client';

import { Button } from '@/components/ui/button';
import heroBackground from '@/public/images/herobackground.jpg';
import { ContactFormEmbed } from '@/components/ContactFormEmbed';

export function HeroSection() {
  return (
    <section 
      className="bg-white py-16"
      style={{
        backgroundImage: `url(${heroBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-width px-8 text-center">
        <h1 className="text-[#2C241B] mb-12 mx-auto max-w-[95%] flex flex-col items-center gap-2">
          <span className="font-['Allura'] text-[clamp(3.5rem,10vw,7rem)] leading-[1.1] block">
            Kind Consciousness
          </span>
          <span className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.2] block font-light">
            Counseling Services
          </span>
        </h1>
        <div className="bg-[#F4FFF6] p-4 md:p-6 rounded-3xl">
          <div className="text-[#536c46] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.4] max-w-[1600px] mx-auto mb-8">
            <p className="mb-6">
              We're so glad you're here. Life can be complex and challenging, but you don't have to face it alone. This is a space where your feelings, experiences, and story matter.
            </p>
            <p className="mb-6">
              At Kind Consciousness Counseling Services, we believe in the power of compassion, connection, and hope. No matter where you are on your journey, we're here to walk alongside you—offering understanding, support, and the tools to help you thrive.
            </p>
            <p>
              You are seen. You are valued. And you deserve care. Let's take this step toward healing and growth together.
            </p>
          </div>
          <Button 
            className="bg-[#e8963f] hover:bg-orange-dark text-white px-8 md:px-12 py-4 text-[clamp(1rem,1.5vw,1.25rem)] rounded-full transition-colors duration-200"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}