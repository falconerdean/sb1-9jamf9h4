'use client';

import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  points: string[];
  badgeImage?: string | StaticImageData;
}

export function ServiceCard({ title, description, image, points, badgeImage }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden h-full p-4 sm:p-5 w-full relative">
      <h3 className="text-2xl font-serif text-primary mb-3 min-h-[64px] flex items-center justify-center text-center">{title}</h3>
      <div className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-rows-[auto_1fr_auto] h-full gap-3">
        <p className="text-text-light min-h-[96px]">{description}</p>
        <ul className="space-y-1 mb-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-orange rounded-full flex-shrink-0" />
              <span className="text-text-light">{point}</span>
            </li>
          ))}
        </ul>

        <Button 
          className="w-full bg-orange hover:bg-orange-dark text-white whitespace-normal h-auto py-2.5"
          onClick={() => window.location.href = '/contact'}
        >
          Schedule a Free Consultation
        </Button>
      </div>
    </div>
  );
}