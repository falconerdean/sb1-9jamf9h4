import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Check, Star, Palette, Globe, Megaphone, Shield, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: '✨ Custom Website Design',
    subtitle: 'One-Time Purchase',
    icon: Palette,
    price: '1,999',
    period: 'one-time',
    description: 'For therapists who want a professional website but prefer to manage their own hosting.',
    features: [
      'A Unique, Professional Website – Designed specifically for your practice, with a modern, client-friendly look',
      'We Handle the Design & Development – No templates, just a custom-built website tailored to your brand',
      'Mobile-Responsive – Looks perfect on phones, tablets, and desktops',
      'SEO-Optimized – Built with best practices to help clients find you on Google',
      'Ownership of Your Website\'s Code – You own your site and can make changes whenever you like',
      'Design Consultation & Revisions – Get expert guidance with two rounds of revisions to ensure your site is perfect'
    ],
    note: 'No ongoing management – you handle hosting and updates.',
    targetAudience: 'Perfect for: Therapists who are comfortable managing their own website and want a one-time, hands-off design service.'
  },
  {
    name: '🚀 Growth Website Package',
    subtitle: 'Attract More Clients & Scale Your Practice',
    icon: Megaphone,
    price: '299',
    period: 'month',
    description: 'For therapists who want more than just a website—they want growth.',
    features: [
      'Everything from the Essentials Website Package, plus:',
      'Active SEO & Local Search Domination – Rank higher on Google so more local clients find you',
      'Profile Optimization – We enhance your Psychology Today, Google Business Profile, and other directories to attract more inquiries',
      'Referral Outreach & Relationship Building – We contact local doctors, psychiatrists, and other professionals to expand your referral network',
      'Customized Marketing Plan – Get a personalized strategy to bring in more private-pay and ideal-fit clients',
      'Performance Tracking & Insights – See how your website and marketing efforts are performing with monthly reports',
      'Social Media Content & Strategy – Expand your reach with engaging, client-focused content'
    ],
    isPopular: true,
    designIncluded: true,
    targetAudience: 'Perfect for: Therapists ready to grow their practice, attract more self-pay clients, and build a steady stream of referrals—without having to do the marketing themselves.'
  },
  {
    name: '🔥 Essentials Website Package',
    subtitle: 'Stress-Free Website Management',
    icon: Globe,
    price: '99',
    period: 'month',
    description: 'For therapists who want a fully managed website—without the tech headaches.',
    features: [
      'Everything from the Custom Website Design plan, plus:',
      'Managed Cloud Hosting – Secure, high-performance hosting included—no extra fees',
      'Unlimited Website Revisions – Need to update services, fees, or policies? We handle it for you',
      'Ongoing Maintenance & Security Updates – Your site stays fast, secure, and up to date',
      'Seamless Scheduling Integration – We integrate your online booking system to streamline client scheduling',
      'Client Portal Integration – Provide a smooth experience by linking your site directly to your client portal'
    ],
    designIncluded: true,
    targetAudience: 'Perfect for: Therapists who want a professional website without worrying about maintenance, security, or tech issues.'
  }
];

export function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        {/* Hero Section */}
        <div className="text-center pt-32 pb-32">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Invest in Your Practice's Growth
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-16">
            A single new private-pay client could pay for this service multiple times over. We'll help you attract the right clients to build the practice you want.
          </p>

          {/* ROI Section */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-teal-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Example Earnings—The Math is Simple</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-auto">
                  <p className="text-lg text-navy-800 mb-2">1 self-pay client at $150 per session</p>
                  <p className="text-3xl font-bold text-navy-900">= $600 per month</p>
                  <p className="text-sm text-navy-600 mt-2">(weekly sessions)</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-auto">
                  <p className="text-lg text-navy-800 mb-2">2 new clients</p>
                  <p className="text-3xl font-bold text-navy-900">= $1,200 per month</p>
                  <p className="text-sm text-navy-600 mt-2">far more than the cost of the service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Pricing Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 mb-12 md:mb-0 ${
                plan.isPopular ? 'border-teal-600 scale-105 md:scale-110' : 'border-warm-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-teal-600 text-white px-4 py-1 rounded-bl-lg flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">Most Popular</span>
                </div>
              )}
              
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-800">{plan.name}</h3>
                  <p className="text-navy-600 text-sm mt-1">{plan.subtitle}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy-800">${plan.price}</span>
                  <span className="text-navy-600">/{plan.period}</span>
                  {plan.designIncluded && (
                    <div className="mt-2 flex flex-col">
                      <span className="text-navy-600 line-through whitespace-nowrap">$1,999 design fee</span>
                      <span className="text-teal-600 font-medium">Included Free!</span>
                    </div>
                  )}
                </div>

                <p className="text-navy-600 mb-6">{plan.description}</p>

                <ul className="space-y-4 mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <p className="text-navy-600 text-sm mb-4">{plan.note}</p>
                )}

                <p className="text-navy-700 text-sm mb-4">{plan.targetAudience}</p>

                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-warm-100 text-navy-800 hover:bg-warm-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction Guarantee */}
        <div className="mt-24 bg-teal-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">100% Satisfaction Guarantee</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            If you don't like the website we design, you pay nothing.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-teal-600 transition-all duration-200"
          >
            Start Risk-Free Today
          </Link>
        </div>
      </div>
    </div>
  );
}