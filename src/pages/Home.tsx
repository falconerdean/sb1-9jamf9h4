import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import mushroomsImage from '../img/mushrooms.webp';
import therapyImage from '../img/therapy.webp';
import sexTherapyImage from '../img/pexels-visoesdomundo-2494701.jpg';
import pathImage from '../img/path.webp';

const features = [
  {
    title: 'Natural Medicine Assisted Therapy',
    description: 'Our agency provides our clientele with experienced Licensed Professional Counselors and Clinical Facilitators to guide their journey to health and recovery. Get relief from depression, anxiety, and the symptoms of PTSD.',
    image: mushroomsImage,
    cta: 'Learn More'
  },
  {
    title: 'Assessment',
    description: 'August Advice provides assessments to support veteran VA claims regarding mental health. We utilize both instruments and interviews to craft supporting documents for your claim.',
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg',
    cta: 'Learn More'
  },
  {
    title: 'Individual Counseling',
    description: 'August Advice provides both individual, marital, and family counseling. We provide services for both conventional and specialized issues such as neurodivergence, PTSD, Trauma, Depression, and anxiety.',
    image: therapyImage,
    cta: 'Learn More'
  }
];

const statistics = [
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    value: '80%',
    label: 'of people search for healthcare providers online',
    description: "If your website isn't optimized, potential clients won't find you."
  },
  {
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=800&q=80',
    value: '75%',
    label: 'judge credibility based on website design',
    description: 'A professional, modern site makes you trustworthy and approachable.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    value: '57%',
    label: "won't recommend businesses with poor mobile sites",
    description: "If your site isn't fast and mobile-friendly, you could be losing referrals."
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        {/* Hero Section */}
        <section className="min-h-[600px] flex items-center px-4 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="max-w-4xl mx-auto fade-in">
                <h1 className="hero-text text-white mb-4">
                  Natural Medicine-Assisted Therapy
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  August Advice is a professional counseling service providing treatment for mental health conditions using both conventional and psychedelic-assisted therapy.
                </p>
                <img 
                  src="/img/transparentlogo.png" 
                  alt="August Advice Therapy Logo" 
                  className="hero-logo"
                />
                <Link to="/contact" className="primary-button inline-flex mx-auto mt-8">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageHero>

      {/* Services Section */}
      <section className="pt-12 pb-24 bg-[#2A7C6F]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Services</h2>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="group flex flex-col rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-[110px] px-5 flex items-center justify-center">
                    <h3 className="text-2xl font-semibold text-[rgb(var(--color-midnight-green))] text-center overflow-hidden text-ellipsis">{feature.title}</h3>
                  </div>
                  <div className="relative overflow-hidden h-[250px] w-full">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between mt-0">
                    <p className="text-[rgb(var(--color-midnight-green))/0.8]">{feature.description}</p>
                    <div className="mt-6">
                    <Link 
                      to={`/services${
                        index === 0 ? '#natural-medicine' :
                        index === 1 ? '#sex-therapy' :
                        '#individual-therapy'
                      }`}
                      className="inline-flex items-center justify-center px-6 py-2 bg-[rgb(var(--color-persian-green))] text-white rounded-full transform transition-transform duration-300 hover:-translate-y-1 font-medium"
                    >
                      {feature.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-12 pb-12 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-[rgb(var(--color-light-sea-green)/0.1)] text-center">
              <h2 className="section-title text-center">Mission Statement</h2>
              <h3 className="text-xl md:text-2xl font-display font-light text-[rgb(var(--color-midnight-green))] mb-6">Setting you on the right path to healing and personal growth.</h3>
              <p className="text-lg md:text-xl leading-relaxed text-[rgb(var(--color-midnight-green))/0.8] mb-12 text-center">At August Advice Counseling, we help individuals and families improve their mental and emotional function through self-awareness and skill improvement. We achieve the goal of inner peace by combining innovative approaches in mental health, personal compassion and sensory awareness.</p>
              <div className="max-w-4xl mx-auto rounded-2xl shadow-lg overflow-hidden aspect-video mb-12">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/u31qwQUeGuM"
                  title="Vincent Bruno introduces his practice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center max-w-4xl mx-auto">
                <div className="space-y-4 text-lg text-navy-700">
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-[rgb(var(--color-midnight-green))] mb-6 text-center">Our Integrated Method Includes</h4>
                  <div className="space-y-6 mt-4">
                    <div>
                      <h5 className="text-xl md:text-2xl font-display font-bold text-[rgb(var(--color-midnight-green))] mb-3 text-center">Traditional Talk Therapy</h5>
                      <p className="text-[rgb(var(--color-midnight-green))/0.8] leading-relaxed text-center">We utilize evidence-based treatment models such as Cognitive Perceptual and Cognitive Behavioral modalities. We also provide EMDR and Internal Family Systems work to help clients understand and manage their internal landscape.</p>
                    </div>
                    <div>
                      <h5 className="text-xl md:text-2xl font-display font-bold text-[rgb(var(--color-midnight-green))] mb-3 text-center">Tactile and Auditory Interventions</h5>
                      <p className="text-[rgb(var(--color-midnight-green))/0.8] leading-relaxed text-center">We work with our Autism Spectrum clientel on script development, social anxiety, and self-soothing and centering techniques.</p>
                    </div>
                    <div>
                      <h5 className="text-xl md:text-2xl font-display font-bold text-[rgb(var(--color-midnight-green))] mb-3 text-center">Natural Medicine-based Interventions</h5>
                      <p className="text-[rgb(var(--color-midnight-green))/0.8] leading-relaxed text-center">For the treatment of pre-verbal trauma, PTSD, Depression, and Anxiety are available in both the Colorado Natural Medicine model and the personal use space.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                <Link to="/services" className="primary-button">
                  Discover Our Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/about" className="secondary-button">
                  Background &amp; Qualifications
                  <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-teal-700/90 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
                <div className="relative">
                  <img
                    src="/img/headshot.webp"
                    alt="Vincent Bruno" 
                    className="rounded-2xl shadow-2xl w-full mx-auto"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-900/20 to-transparent"></div>
                  <div className="bg-teal-800/50 rounded-xl p-6 mt-8">
                    <h4 className="text-2xl font-display font-bold mb-4 text-teal-100">Credentials & Certifications</h4>
                    <ul className="space-y-2 text-white">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                        <span>Licensed Professional Counselor #LPC 0005602</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                        <span>Licensed Clinical Facilitator #NMCF 0000008</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                        <span>Certified Autism Treatment provider</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                        <span>Domestic Violence Full Operating Provider (ret 2020)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="text-5xl font-display mb-2 text-white font-semibold drop-shadow-lg">The Founder</h2>
                  <h3 className="text-2xl font-display mb-6 text-teal-100">Vincent Bruno, Licensed Therapist</h3>
                  <p className="text-xl leading-relaxed text-white mb-4">
                    Vincent Bruno has provided counseling services to adults and children in Colorado since 2011. Initially, Vince worked as a play therapist with abused children placed in the foster care system. His career included court testimony related to child abuse, intimate partner violence, impacts of trauma on children's brain development, and the state-mandated treatment of adult abusers as a Colorado State Domestic Violence Full Treatment Provider.
                  </p>
                  <p className="text-xl leading-relaxed text-white mb-4">
                    During his 10 years in the Domestic Violence and child abuse field Vince worked with the Departmet of Human Services and the Family Advocacy program to treat active duty members struggling with mental health and intimate partner violence issues. This engagement with active duty members fueled his passion to help those who serve and continues to be his primary goal.
                  </p>
                  <Link to="/about" className="inline-flex items-center text-white hover:text-teal-100 transition-colors font-medium">
                    Learn more about our approach
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}