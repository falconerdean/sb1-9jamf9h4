'use client';

import React from 'react';
import { Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const TestimonialCard = ({ text, rating }: { text: string; rating: number }) => (
  <div className="w-[300px] mx-3 bg-[#F4FFF6] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col h-[280px]">
    <p className="text-[#59654F] text-lg leading-relaxed break-words flex-grow">
      "{text}"
    </p>
    <div className="flex gap-2 mt-4">
      {[...Array(rating)].map((_, i) => (
        <Star 
          key={i} 
          className="fill-[#E8963F] text-[#E8963F]" 
          size={48}
          aria-hidden="true"
        />
      ))}
    </div>
  </div>
);

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Kevin is exactly the kind of person I was looking for. We spend the right amount of time discussing and exploring my issues and finding solutions for them.",
      rating: 5
    },
    {
      text: "Kevin has been instrumental in my mental health progress. I've never felt judged by him. Every session he leaves me with comfort in that I'm getting healthier.",
      rating: 5
    },
    {
      text: "He's absolutely amazing. Very understanding and I do look forward to our sessions.",
      rating: 5
    },
    {
      text: "Has been very helpful speaking with Kevin. He has assisted me and given me valuable direction.",
      rating: 5
    },
    {
      text: "He's absolutely amazing. Very understanding and I do look forward to our sessions.",
      rating: 5
    },
    {
      text: "Kevin has been instrumental in my mental health progress. I've never felt judged by him. Every session he leaves me with comfort in that I'm getting healthier.",
      rating: 5
    }
  ];

  return (
    <section className="bg-[#899B7A] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl text-white font-serif mb-4">
          What Our Clients<br />Say About Us
        </h2>
        
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#899B7A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#899B7A] to-transparent z-10" />
          
          {/* Scrolling container */}
          <Marquee speed={25} gradient={false} pauseOnHover={true} className="py-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}