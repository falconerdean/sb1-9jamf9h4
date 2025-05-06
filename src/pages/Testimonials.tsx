import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell, Ph.D.',
    title: 'Clinical Psychologist',
    practice: 'Mindful Therapy Practice',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    quote: "Switching to TherapistSites was the best decision for my practice. The design process was seamless, and my website perfectly captures the welcoming atmosphere I want to convey. I've seen a 40% increase in client inquiries since launching.",
    rating: 5,
    specialty: 'Individual Therapy'
  },
  {
    name: 'Dr. Michael Chen, Psy.D.',
    title: 'Family Therapist',
    practice: 'Wellness Counseling Center',
    location: 'Portland, OR',
    image: '/img/headshot.webp',
    quote: "The HIPAA compliance and client management tools have transformed how I run my practice. The online scheduling system alone has saved me countless hours. My clients frequently comment on how professional and easy-to-use the website is.",
    rating: 5,
    specialty: 'Family Therapy'
  },
  {
    name: 'Dr. Emma Rodriguez, LMFT',
    title: 'Marriage & Family Therapist',
    practice: 'Family Therapy Solutions',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: "The marketing features have been a game-changer. Since implementing their SEO strategies, I've consistently ranked on the first page for local therapy searches. The ROI has been remarkable - my practice is now at full capacity with a waiting list.",
    rating: 5,
    specialty: 'Couples Therapy'
  },
  {
    name: 'Dr. James Wilson, Ph.D.',
    title: 'Cognitive Behavioral Therapist',
    practice: 'Mind & Wellness Center',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    quote: "What impressed me most was how they captured the essence of my practice in the design. The website feels both professional and approachable, which is exactly what I wanted. The ongoing support has been exceptional.",
    rating: 5,
    specialty: 'Cognitive Behavioral Therapy'
  },
  {
    name: 'Dr. Lisa Thompson, LCSW',
    title: 'Clinical Social Worker',
    practice: 'Healing Paths Therapy',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    quote: "As someone who isn't tech-savvy, I was worried about managing a website. TherapistSites made it incredibly simple. Their team handled everything, and now I can easily update my site whenever needed. It's been a wonderful experience.",
    rating: 5,
    specialty: 'Group Therapy'
  },
  {
    name: 'Dr. Robert Kim, Ph.D.',
    title: 'Trauma Specialist',
    practice: 'Resilience Therapy Center',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    quote: "The integrated payment system and scheduling tools have streamlined my practice operations significantly. My clients appreciate the professional online experience, and I love how everything is HIPAA compliant and secure.",
    rating: 5,
    specialty: 'Trauma Therapy'
  }
];

export function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        {/* Hero Section */}
        <div className="text-center pt-32 pb-48">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Trusted by Mental Health Professionals
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Hear from therapists who have transformed their online presence and grown their practices with our platform.
          </p>
        </div>
      </PageHero>

      {/* Featured Testimonial - Now overlapping with hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-warm-100">
            <div className="grid md:grid-cols-2">
              <div className="relative h-full min-h-[300px]">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-teal-600/10" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote className="h-12 w-12 text-teal-600/20 mb-6" />
                <blockquote className="text-xl text-navy-900 mb-6">
                  {testimonials[0].quote}
                </blockquote>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">{testimonials[0].name}</h3>
                  <p className="text-navy-600">{testimonials[0].title}</p>
                  <p className="text-navy-600">{testimonials[0].practice}, {testimonials[0].location}</p>
                  <span className="inline-block mt-2 text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {testimonials[0].specialty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {testimonials.slice(1, -1).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-navy-900">{testimonial.name}</h3>
                    <p className="text-navy-600 text-sm">{testimonial.title}</p>
                    <p className="text-navy-600 text-sm">{testimonial.practice}</p>
                    <p className="text-navy-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-teal-600/20 mb-4" />
                <blockquote className="text-navy-700 mb-4">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {testimonial.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Last Testimonial */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-warm-100">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote className="h-12 w-12 text-teal-600/20 mb-6" />
                <blockquote className="text-xl text-navy-900 mb-6">
                  {testimonials[testimonials.length - 1].quote}
                </blockquote>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonials[testimonials.length - 1].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">{testimonials[testimonials.length - 1].name}</h3>
                  <p className="text-navy-600">{testimonials[testimonials.length - 1].title}</p>
                  <p className="text-navy-600">{testimonials[testimonials.length - 1].practice}, {testimonials[testimonials.length - 1].location}</p>
                  <span className="inline-block mt-2 text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {testimonials[testimonials.length - 1].specialty}
                  </span>
                </div>
              </div>
              <div className="relative h-full min-h-[300px]">
                <img
                  src={testimonials[testimonials.length - 1].image}
                  alt={testimonials[testimonials.length - 1].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-teal-600/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center pb-20">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Join Our Growing Community of Therapists
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto mb-8">
            Transform your online presence and grow your practice with our comprehensive platform.
          </p>
          <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-12 py-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 inline-block">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}