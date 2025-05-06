'use client';

import { Button } from '@/components/ui/button';
import heroBackground from '@/public/images/herobackground.jpg';
import { ContactFormEmbed } from '@/components/ContactFormEmbed';

export function HeroSection() {
  return (
    <section 
      className="bg-white py-8"
      style={{
        backgroundImage: `url(${heroBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-width px-8">
        <div className="w-full max-w-6xl mx-auto mt-4 mb-16 pt-8 pb-12 px-12 md:px-16 bg-[#889A7A] rounded-3xl shadow-sm relative overflow-hidden">
          <h1 className="text-white text-5xl md:text-6xl font-['Allura'] text-center mb-8">
            Kind Consciousness Counseling Services
          </h1>
          <div className="max-w-3xl mx-auto bg-[#F4FFF6] p-8 rounded-2xl">
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl quote-text leading-tight">
                <span className="text-[#536c46]">You are </span>
                <span className="text-orange">seen</span>
                <span className="text-[#536c46]">. You are </span>
                <span className="text-orange">valued</span>
                <span className="text-[#536c46]">. You deserve </span>
                <span className="text-orange">care</span>
                <span className="text-[#536c46]">. Let's take this step toward </span>
                <span className="text-orange">healing</span>
                <span className="text-[#536c46]"> and </span>
                <span className="text-orange">growth</span>
                <span className="text-[#536c46]"> together.</span>
              </blockquote>
              <p className="text-[#536c46] text-lg mt-6 leading-relaxed">
                At Kind Consciousness Counseling Services, we believe in the power of compassion, connection, and hope. No matter where you are on your journey, we're here to walk alongside you—offering understanding, support, and the tools to help you thrive.
              </p>
              <Button 
                className="bg-[#e8963f] hover:bg-orange-dark text-white px-8 sm:px-12 py-4 min-h-[4rem] rounded-full text-lg transition-colors duration-200 whitespace-normal h-auto mt-8"
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