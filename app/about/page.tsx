'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { AcceptedInsurance } from '@/components/AcceptedInsurance';

const credentials = [
  "Licensed Professional Counselor (LPC)",
  "Licensed Clinical Alcohol and Drug Counselor (LCADC)",
  "17+ years of counseling experience",
  "Georgian Court University graduate",
  "Specializing in anxiety, depression, and substance abuse",
  "Telehealth services throughout New Jersey"
];

const values = [
  {
    title: "Compassionate Care",
    description: "Every individual deserves to be heard and understood. I provide a safe, non-judgmental space for healing and growth."
  },
  {
    title: "Evidence-Based Approach",
    description: "I combine proven therapeutic techniques with personalized strategies to help you achieve lasting positive change."
  },
  {
    title: "Accessibility",
    description: "Through telehealth services, I make professional counseling accessible to clients across New Jersey, fitting therapy into your schedule."
  }
];

export default function AboutPage() {
  return (
    <div className="">
      <div className="bg-[#F4FFF6]/30">
      {/* Hero Section */}
      <section className="container-width p-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">
              Meet Your Therapist
            </h1>
            <p className="text-[#536C46] text-xl leading-relaxed mb-8">
              Hi, I'm Kevin Ford, a dedicated mental health professional committed to helping individuals navigate life's challenges and achieve personal growth. With over 17 years of experience, I specialize in providing comprehensive mental health and substance abuse counseling services. I have specialized training and experience supporting active duty service members, veterans, and military families through their unique challenges and transitions. I also provide an inclusive, LGBTQIA+ affirming counseling space where all identities are respected and celebrated.
            </p>
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-orange w-5 h-5 flex-shrink-0" />
                  <span className="text-text-light">{credential}</span>
                </div>
              ))}
            </div>
            <Button 
              className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Free Consultation
            </Button>
          </div>
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="https://try-insite.github.io/site-data/kevin/keyheadshot.jpeg"
                alt="Kevin Ford - Licensed Professional Counselor"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Values Section */}
      <section className="bg-[#899B7A] py-24">
        <div className="container-width px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-16">
            My Approach to Therapy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <h3 className="text-2xl font-serif text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container-width px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
              Experience & Expertise
            </h2>
            <p className="text-text-light text-lg leading-relaxed mb-8">
              I am <span className="text-[#ED9E52]">Kevin M. Ford</span>, a <span className="text-[#ED9E52]">Licensed Professional Counselor</span> (LPC) as well as a <span className="text-[#ED9E52]">Licensed Clinical Alcohol and Drug Counselor</span> (LCADC) with 17 years of experience, providing telehealth services to clients in <span className="text-[#ED9E52]">New Jersey</span>. I graduated from Georgian Court University in Lakewood, NJ. Despite currently living in Pennsylvania, I lived in <span className="text-[#ED9E52]">New Jersey</span> throughout most of my life.
            </p>
            <p className="text-text-light text-lg leading-relaxed mb-8">
              In my personal life, I enjoy spending time with my family, playing with my two school-aged children, most sports, time at the beach (cliche, I know), but I do truly find the beach (typically, Belmar) to be extremely peaceful and serene. The beach is my happy place.
            </p>
            <p className="text-text-light text-lg leading-relaxed mb-8">
              Throughout my professional career, I have had the opportunity to work within residential settings with both <span className="text-[#ED9E52]">adolescents</span> and <span className="text-[#ED9E52]">adults</span> as well as in general outpatient for both <span className="text-[#ED9E52]">substance abuse</span> and <span className="text-[#ED9E52]">mental health</span> programs.
            </p>
            <p className="text-text-light text-lg leading-relaxed mb-12">
              My approach is rooted in my general care and concern for people. Through <span className="text-[#ED9E52]">virtual therapy</span>, I offer convenient and accessible care, allowing clients to receive support from the comfort of their own homes. My goal is to create a compassionate and empowering space for <span className="text-[#ED9E52]">personal growth</span> and <span className="text-[#ED9E52]">lasting change</span>.
            </p>
            <Button 
              className="bg-orange hover:bg-orange-dark text-white px-12 py-6 text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Begin Your Journey Today
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-[#F4FFF6]">
        <ContactSection />
        <AcceptedInsurance />
      </div>
    </div>
  );
}