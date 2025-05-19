'use client';

import mentalHealthImage from '@/public/images/services/mental-health copy.webp';
import substanceAbuseImage from '@/public/images/services/substance.webp';
import mensHealthImage from '@/public/images/services/mens-mental.webp';
import badgeImage from '@/public/images/badge.png';
import { Button } from '@/components/ui/button';
import { ContactSection } from '@/components/ContactSection';
import { AcceptedInsurance } from '@/components/AcceptedInsurance';
import { ServiceCard } from '@/components/ServiceCard';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
   {
     title: "Mental Health Counseling",
     description: "Professional counseling services to help you navigate life's challenges and improve your mental well-being.",
     image: mentalHealthImage,
     points: [
       "Individual therapy for anxiety, depression, and stress management",
      "ADHD counseling",
       "Relationship counseling and interpersonal skills development",
       "Work-life balance and career-related stress management",
       "Grief and loss counseling",
       "Self-esteem and personal growth support"
     ]
   },
   {
     title: "Substance Abuse Counseling",
     description: "Comprehensive support for individuals struggling with substance use and addiction, focusing on recovery and sustainable sobriety.",
     image: substanceAbuseImage,
     points: [
       "Individual addiction counseling and recovery support",
       "Dual diagnosis treatment for co-occurring disorders",
       "Relapse prevention strategies and coping skills",
       "Family support and education",
       "Recovery maintenance and aftercare planning",
       "Substance abuse assessments and referrals"
     ]
   },
   {
     title: "Men's Mental Health",
     description: "Specialized counseling services designed to address the unique mental health challenges faced by men in today's world.",
     image: mensHealthImage,
     points: [
       "Depression and anxiety treatment tailored for men",
       "Anger management and emotional regulation",
       "Work-related stress and career challenges",
       "Relationship and family dynamics",
       "Identity and personal development",
       "Breaking stigma around men's mental health"
     ]
   },
   {
     title: "Military-Focused Care",
     description: "Specialized support for active duty service members, veterans, and military families, addressing the unique challenges of military life.",
    image: badgeImage,
     points: [
       "Understanding of military culture and values",
       "Support for deployment and reintegration",
       "Transition to civilian life assistance",
       "Trauma-informed care for service members",
       "Family support during military transitions",
       "PTSD and combat stress management"
     ]
   }
  ];

  return (
    <div className="p-4 sm:p-8 md:p-16 bg-[#F4FFF6]/30">
      <div className="container-width px-8">
        <div className="w-[95%] max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Our Services
          </h1>
          <p className="text-text-light text-lg">
            At Kind Consciousness Counseling Services, we offer comprehensive mental health support 
            through evidence-based practices and compassionate care. Each service is tailored to 
            meet your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8 w-full max-w-[800px] lg:max-w-none mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              badgeImage={service.title === "Military-Focused Care" ? badgeImage : undefined}
            />
          ))}
        </div>

        <div className="my-16 text-center px-[2.5%] md:px-0">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-2xl font-serif text-primary mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-text-light mb-8">
              Schedule a free consultation to discuss how we can help you achieve your mental health goals. 
              We accept most major insurance plans and offer flexible scheduling options.
            </p>
            <Button 
              className="bg-orange hover:bg-orange-dark text-white px-6 sm:px-12 py-6 text-lg whitespace-normal h-auto"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#F4FFF6]">
        <ContactSection />
        <AcceptedInsurance />
      </div>
    </div>
  );
}