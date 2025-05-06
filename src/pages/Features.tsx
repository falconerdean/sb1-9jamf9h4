import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import {
  Palette,
  Layout,
  Sliders,
  Megaphone,
  Calendar,
  Smartphone,
  Search,
  CreditCard,
  Users,
  LineChart,
  Globe,
  ArrowRight
} from 'lucide-react';

const featureCategories = [
  {
    title: "Attract More of the Right Clients",
    icon: Layout,
    description: "We help you focus and position yourself as an expert, so the right clients come to you.",
    features: [
      {
        title: 'Your Reputation Matters',
        description: 'We help you optimize your Psychology Today profile to rank higher in searches and attract more clients, while building your credibility through positive reviews.'
      },
      {
        title: 'A Referral Network Built for You',
        description: 'Connect with doctors, psychiatrists, and other therapists who are looking for providers like you to refer their clients to.'
      },
      {
        title: 'Get More Private-Pay Clients',
        description: 'We help you find more self-pay clients so you can charge what you\'re worth without the insurance paperwork hassle.'
      }
    ]
  },
  {
    title: "Grow Your Reach, Attract More Clients",
    description: "Tools and strategies to expand your practice",
    features: [
      {
        title: 'Done-for-You Physician Outreach',
        description: 'We personally connect with local healthcare providers to build your referral network.'
      },
      {
        title: 'Google My Business Optimization',
        description: 'Rank higher in local searches to attract more clients in your area.'
      },
      {
        title: 'Custom Website & SEO Improvements',
        description: 'We optimize your website for better performance and visibility on Google.'
      }
    ]
  },
  {
    title: "Seamless Integration with Your Existing Tools",
    description: "Powerful tools to make practice management easier",
    features: [
      {
        title: 'Seamless Appointment Integration',
        description: 'Connect your scheduling system for easy online booking, or let us help you set one up.'
      },
      {
        title: 'Connect Your Client Portal',
        description: 'Integrate your client portal for a seamless experience with billing, scheduling, and more.'
      },
      {
        title: 'Keep Your Site Up to Date',
        description: 'Need updates? Just email or call us, and we\'ll handle everything for you.'
      }
    ]
  }
];

const statistics = [
  {
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    value: '97%',
    label: 'of clients search online first',
    description: 'Having a professional website is essential for attracting new clients'
  },
  {
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=800&q=80',
    value: '75%',
    label: 'judge credibility by website design',
    description: 'Your website shapes how potential clients view your practice'
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    value: '68%',
    label: 'prefer booking appointments online',
    description: 'Make it easy for clients to connect with you'
  }
];

export function Features() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero imageSrc="https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=2070">
        {/* Hero Section */}
        <div className="text-center pt-32 pb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Improve Your Online Reputation & Visibility Effortlessly
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We create a professional website that reflects your expertise, attracts clients, and requires no effort to maintain. We handle everything, so you can focus on your practice.
          </p>
        </div>

        {/* Feature Categories on top of hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {featureCategories.map((category, index) => (
            <div key={index} className="mt-8 first:mt-4">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  {index !== 0 && category.icon && <category.icon className="h-8 w-8 text-teal-600" />}
                  <h2 className={`text-3xl font-bold ${index === 0 || index === 1 || index === 2 ? 'text-white' : 'text-navy-800'}`}>{category.title}</h2>
                </div>
                <p className={`text-lg ${index === 0 || index === 1 || index === 2 ? 'text-white' : 'text-navy-600'}`}>{category.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h3 className="text-2xl font-bold text-navy-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-navy-600 text-lg">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">Why a Professional Website Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-warm-100">
                <div className="h-48 overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="text-4xl font-bold text-navy-800 mb-4">{stat.value}</div>
                  <div className="text-lg font-medium text-navy-700 mb-2">{stat.label}</div>
                  <p className="text-navy-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center bg-warm-50 rounded-3xl mb-24 mx-4">
        <h2 className="text-3xl font-bold text-navy-800">Ready to Elevate Your Practice?</h2>
        <p className="mt-4 text-lg text-navy-600 max-w-2xl mx-auto">
          Join thousands of therapists who have already transformed their online presence with our platform.
        </p>
        <Link to="/contact" className="inline-block mt-8 bg-teal-600 hover:bg-teal-700 text-white text-lg px-12 py-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105">
          Get Started Today
        </Link>
      </div>
    </div>
  );
}