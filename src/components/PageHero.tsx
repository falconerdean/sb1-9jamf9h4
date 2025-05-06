import React from 'react';
import background from '../img/background2.webp';

interface PageHeroProps {
  children: React.ReactNode;
  imageSrc?: string;
}

export function PageHero({ children, imageSrc = background }: PageHeroProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50" />
      </div>
      
      <div className="relative">
        {children}
      </div>
    </div>
  );
}