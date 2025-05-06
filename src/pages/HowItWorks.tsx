import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Calendar, CheckCircle2, Phone, Laptop, Star, MessageSquare, BarChart, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = {
  'Financial Concerns': [
    {
      question: 'How can I maintain a full caseload and avoid slow months?',
      answer: 'Client flow can be unpredictable, but a strong online presence and a diverse referral network can help keep your schedule full. We optimize your Psychology Today profile, improve your website visibility, and connect you with doctors and professionals who can refer clients to you. By positioning your practice effectively, we help ensure you always have a steady stream of inquiries.'
    },
    {
      question: 'How can I attract more private-pay clients instead of relying on insurance?',
      answer: 'Many therapists want to reduce their dependence on insurance due to low reimbursement rates and administrative headaches. We help you craft your marketing and online profiles to attract self-pay clients who are willing to invest in their mental health. This includes refining your niche, updating your website, and optimizing your directory listings so private-pay clients find you first.'
    },
    {
      question: 'Should I raise my rates? How do I do it without losing clients?',
      answer: 'Many therapists hesitate to raise their rates, but fair pricing is essential for a sustainable practice. We provide strategies to adjust fees while retaining clients, including offering premium services, creating tiered pricing models, and effectively communicating your value. Additionally, we help you reach clients who are more likely to afford private pay rates.'
    },
    {
      question: 'How can I spend less time on insurance billing and admin work?',
      answer: 'If you accept insurance, you know the headaches of low reimbursement rates, delayed payments, and endless paperwork. While we don\'t handle insurance billing directly, we help you reduce your reliance on insurance by growing your private-pay caseload. We can also guide you toward practice management tools that help with billing and claims processing, so you can focus on therapy, not paperwork.'
    }
  ],
  'Online Presence & Reputation': [
    {
      question: 'How can I stand out online and attract more clients?',
      answer: 'Having a strong online presence is key. We make sure your Psychology Today profile ranks higher in search results, your website converts visitors into clients, and your Google Business Profile is optimized. We also help you refine your messaging so that potential clients immediately see why you\'re the right therapist for them.'
    },
    {
      question: 'I got a bad online review—what should I do?',
      answer: 'We know how stressful negative reviews can be, especially since therapists can\'t respond the way other businesses can due to confidentiality rules. We provide reputation management strategies to balance out bad reviews with positive ones, request removals when possible, and help you maintain a strong professional image across platforms.'
    },
    {
      question: 'I don\'t have time to manage my website. Can you handle it for me?',
      answer: 'Absolutely! We take care of everything—design, hosting, security, updates, and content updates—so you never have to worry about your website. Just let us know if you need changes, and we\'ll handle it for you.'
    },
    {
      question: 'How can I get more client referrals?',
      answer: 'Many therapists rely on word-of-mouth and professional referrals, but networking takes time. We help you expand your referral sources by reaching out to doctors, psychiatrists, and other therapists on your behalf, introducing your services and increasing your inbound referrals.'
    }
  ]
};

export function Services() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        <div className="text-center pt-32 pb-20">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive therapeutic approaches tailored to your unique healing journey.
          </p>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Step 1 */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-50 p-4 rounded-full">
              <Phone className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-navy-800">Step 1: Strategy Call – Tell Us Your Goals</h2>
          </div>
          <div className="bg-warm-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-navy-700 mb-6">
                  We start with a quick conversation to understand your practice goals. Whether you want to attract more private-pay clients, reduce your reliance on insurance, or expand your referral network, we tailor our approach to what you need.
                </p>
                <p className="text-lg text-navy-700 mb-8">
                  No cookie-cutter solutions—everything is customized to fit your unique practice and budget.
                </p>
                <Link
                  to="/contact"
                  className="primary-button inline-flex"
                >
                  Book Your Free Strategy Call
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-navy-800 mb-4">What We'll Discuss:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <span className="text-navy-700">Your practice goals and ideal client profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <span className="text-navy-700">Current challenges and areas for improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <span className="text-navy-700">Customized strategy for your practice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <span className="text-navy-700">Timeline and next steps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-50 p-4 rounded-full">
              <Laptop className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-navy-800">Step 2: We Build & Optimize Your Online Presence</h2>
          </div>
          <p className="text-xl text-navy-700 mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-teal-600" />
            You don't have to do anything—we handle it all!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-warm-100">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Website Setup & Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">Professional, high-converting website that attracts the right clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">No templates or DIY builders—just a done-for-you solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">We handle hosting, security, and ongoing updates</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-warm-100">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Psychology Today & Online Profiles</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">Optimize your Psychology Today profile for better rankings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">Create/enhance your Google Business Profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">Manage presence on other directories</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-warm-100">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Reputation & Review Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">Generate more positive reviews to build credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">Help mitigate and improve negative reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-navy-700">Monitor and maintain your online reputation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-50 p-4 rounded-full">
              <MessageSquare className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-navy-800">Step 3: Ongoing Support—We Handle Everything for You</h2>
          </div>
          <div className="bg-warm-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Clock className="h-8 w-8 text-teal-600 mb-4" />
                <p className="text-navy-700">
                  Need updates? Just email or call us—no need to learn new software or waste time troubleshooting.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart className="h-8 w-8 text-teal-600 mb-4" />
                <p className="text-navy-700">
                  We continuously monitor and optimize your online presence to keep your practice growing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Star className="h-8 w-8 text-teal-600 mb-4" />
                <p className="text-navy-700">
                  You focus on therapy. We handle the rest.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              FAQ – Supporting Therapists in Private Practice
            </h2>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              We understand that running a private practice comes with unique challenges, from maintaining financial stability to managing your online reputation and workload. Below, we've answered some of the most common questions therapists have about sustaining and growing their practice.
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(faqs).map(([category, questions]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-navy-800 mb-6 px-8">{category}</h3>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-warm-100">
                  <div className="divide-y divide-warm-100">
                    {questions.map((faq, index) => (
                      <div key={index} className="px-8 py-6">
                        <button
                          className="w-full text-left flex items-start justify-between gap-4"
                          onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
                        >
                          <h4 className="text-lg font-semibold text-navy-800">{faq.question}</h4>
                          {openQuestion === faq.question ? (
                            <ChevronUp className="h-5 w-5 text-navy-600 flex-shrink-0 mt-1" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-navy-600 flex-shrink-0 mt-1" />
                          )}
                        </button>
                        {openQuestion === faq.question && (
                          <p className="mt-4 text-navy-700">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-teal-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build the Practice You Want?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-teal-600 transition-all duration-200"
          >
            Book Your Free Call Today
            <Calendar className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}