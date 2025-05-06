import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Calendar, Phone, CheckCircle2, Clipboard, Brain, Heart, ArrowRight, FileCheck, UserCheck, Sparkles } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const treatmentSteps = [
  {
    number: 1,
    name: 'Comprehensive Assessment',
    icon: FileCheck,
    quote: '"You wouldn\'t go on a trip without checking the weather"',
    description: 'We use peer reviewed and validated instruments for harm reduction and treatment focus.',
    details: [
      'Collection of personal mental health history',
      'Family of origin data analysis',
      'Health and medication evaluation',
      'Insurance may cover this phase'
    ]
  },
  {
    number: 2,
    name: 'Preparation Sessions',
    icon: UserCheck,
    quote: '"You have to know where you\'ve been to figure out where you\'re at"',
    description: '2-3 sessions to build rapport and set clear intentions.',
    details: [
      'Review assessment results',
      'Identify treatment goals',
      'Build therapeutic relationship',
      'Insurance may cover these sessions'
    ]
  },
  {
    number: 3,
    name: 'Medicine Session',
    icon: Brain,
    quote: '"Once we\'ve set intention and consented to the healing it is the medicine that holds sway"',
    description: '5-6 hour guided therapeutic experience in a safe setting.',
    details: [
      'Personalized music playlist',
      'Professional support throughout',
      'Comfortable, private environment',
      'Currently not covered by insurance'
    ]
  },
  {
    number: 4,
    name: 'Integration Support',
    icon: Heart,
    quote: '"It\'s not what happens to you, it\'s what you do with the experience"',
    description: 'Four follow-up sessions to process insights and support lasting change.',
    details: [
      'Process the experience',
      'Develop practical applications',
      'Create lasting change',
      'Insurance may cover these sessions'
    ]
  }
];

const treatmentGoals = [
  {
    icon: Brain,
    title: 'Symptom Reduction',
    description: 'Relief from flashbacks, hypervigilance, reactivity, and emotional numbness'
  },
  {
    icon: Heart,
    title: 'Improved Relationships',
    description: 'Enhanced ability to connect with self and others and communicate needs effectively'
  },
  {
    icon: Sparkles,
    title: 'Emotional Resilience',
    description: 'Greater capacity to manage triggers and stressful situations with balance, dignity and clarity'
  }
];

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
        <div id="natural-medicine" className="mb-24 scroll-mt-24">
          <div className="bg-[rgb(var(--color-persian-green))] rounded-2xl p-8 mb-[-4rem] relative z-10 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white text-center m-0">Natural Medicine-Assisted Therapy for PTSD and Trauma</h2>
          </div>
          <div className="bg-[rgb(var(--color-light-sea-green)/0.05)] rounded-2xl p-8 pt-20 pb-12 relative z-0">
            {/* Service Overview */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-[rgb(var(--color-midnight-green))] mb-6 text-center">
                A New Approach to Trauma Healing
              </h3>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[rgb(var(--color-light-sea-green)/0.1)]">
                <p className="text-lg leading-relaxed text-[rgb(var(--color-midnight-green))/0.8] mb-6">
                  At August Advice Counseling, we specialize in Natural Medicine-Assisted Therapy—a powerful approach to trauma treatment for individuals who have not found relief through conventional treatment methods.
                </p>
                <p className="text-lg leading-relaxed text-[rgb(var(--color-midnight-green))/0.8] mb-6">
                  This confidential and anonymous therapeutic process harnesses the healing potential of natural medicine to help you process trauma, reduce symptoms of PTSD, and create lasting positive change.
                </p>
                <p className="text-lg leading-relaxed text-[rgb(var(--color-midnight-green))/0.8]">
                  Our approach combines the neuroplasticity created by natural medicine with professional therapeutic guidance in a safe, controlled environment. This integration allows you to access emotional material that may be difficult to reach through talk therapy alone, helping to rewire neural pathways associated with trauma and create new perspectives on challenging experiences.
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[rgb(var(--color-midnight-green))] mb-8 text-center">Your Healing Journey</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {treatmentSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[rgb(var(--color-light-sea-green)/0.1)] relative">
                    <div className="absolute -top-3 left-6 bg-[rgb(var(--color-persian-green))] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="mb-4 flex justify-center">
                      <step.icon className="h-12 w-12 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <h4 className="text-xl font-bold text-[rgb(var(--color-midnight-green))] mb-2 text-center">
                      {step.name}
                    </h4>
                    <p className="text-[rgb(var(--color-midnight-green))/0.8] italic text-center mb-4">
                      {step.quote}
                    </p>
                    <p className="text-[rgb(var(--color-midnight-green))/0.8] mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))] flex-shrink-0 mt-0.5" />
                          <span className="text-[rgb(var(--color-midnight-green))/0.8]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Goals */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-lg italic text-[rgb(var(--color-midnight-green))/0.8]">
                  "While we cannot make guarantees, our hope is that the experience creates space for personal change"
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {treatmentGoals.map((goal, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[rgb(var(--color-light-sea-green)/0.1)]">
                    <div className="flex justify-center mb-4">
                      <goal.icon className="h-12 w-12 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <h4 className="text-xl font-bold text-[rgb(var(--color-midnight-green))] mb-2 text-center">
                      {goal.title}
                    </h4>
                    <p className="text-[rgb(var(--color-midnight-green))/0.8] text-center">
                      {goal.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link to="/contact" className="primary-button inline-flex">
                  Begin Your Healing Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Frequently Asked Questions About Natural Medicine-Assisted Therapy</h3>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-[rgb(var(--color-light-sea-green)/0.1)]">
                <div className="divide-y divide-warm-100">
                  {[
                    {
                      question: 'What does Natural Medicine-Assisted Therapy help with?',
                      answer: 'You may benefit from Natural Medicine-Assisted Therapy if you are experiencing recurrent symptoms such as:\n\nFlashbacks: intrusive thoughts, pictures, or sounds that can cause elevated heart rate, breathing, and sweating\nRecurring memories or dreams related to the events or to current situations\nDistressing thoughts that reoccur and create flashbacks\nPhysical signs of stress such as loss of appetite, high blood pressure, weight loss/gain inability to sleep restfully.\nThoughts and feelings can trigger these symptoms, as can words, objects, or situations that are reminders of the event.\n\n**Avoidance symptoms**\n• Staying away from places, events, or objects that create anxiety or anger\n• Scenarios that place you in loud, crowded, cluttered, or messy and disorganized spaces that are difficult to assess and control\n• Avoiding people in unfamiliar or uncontrolled situations\n\nAvoidance symptoms may cause people to change their routines. For example, some people may avoid driving or riding in a car, visiting concerts, or other crowded places. Some people have to avoid human contact entirely, which is very dangerous\n\n**Arousal and reactivity symptoms**\n• Being easily startled\n• Feeling tense, on guard, or on edge\n• Having difficulty concentrating\n• Having difficulty falling asleep or staying asleep\n• Feeling irritable and having angry or aggressive outbursts\n• Engaging in risky, reckless, or destructive behavior\n\nArousal symptoms are ongoing in many individuals and interfere with daily tasks\n\n**Cognition and mood symptoms**\n• Trouble remembering key features of the traumatic event or other events\n• Negative thoughts about oneself or the world\n• Exaggerated feelings of blame directed toward oneself or others\n• Ongoing negative emotions, such as fear, anger, guilt, or shame\n• Loss of interest in previous activities\n• Feelings of social isolation\n• Difficulty feeling positive emotions, such as happiness or satisfaction\n\nIf you experience these recurrent symptoms you may benefit from Natural Medicine-Assisted Therapy'
                    },
                    {
                      question: 'What exactly is Natural Medicine-Assisted Therapy?',
                      answer: 'Natural Medicine-Assisted Therapy combines the therapeutic potential of natural medicines with professional psychological support to address trauma, PTSD, depression, anxiety, and other treatment-resistant conditions. The natural medicine creates a unique state of consciousness that allows for deeper processing of difficult emotions and experiences, often leading to significant breakthroughs in a relatively short time.'
                    },
                    {
                      question: 'Is Natural Medicine-Assisted Therapy legal?',
                      answer: 'Yes. As a licensed natural medicine practitioner in Colorado, we provide completely legal Natural Medicine-Assisted Therapy in full compliance with all state regulations. Our practice adheres to the highest ethical and professional standards.'
                    },
                    {
                      question: 'How does the therapy process work?',
                      answer: 'The therapy consists of three phases:\n1. Preparation (2-3 sessions): Assessment, education about the process, and building therapeutic rapport\n2. Medicine Session (5-6 hours): Guided therapeutic experience with natural medicine in a safe, comfortable environment\n3. Integration (4 sessions): Processing insights gained during the medicine session and incorporating them into daily life'
                    },
                    {
                      question: 'Who is a good candidate for this therapy?',
                      answer: 'Natural Medicine-Assisted Therapy is particularly beneficial for individuals with PTSD, treatment-resistant depression, anxiety disorders, and substance use concerns. It\'s especially effective for veterans, first responders, and survivors of trauma who haven\'t found relief through conventional treatments.'
                    },
                    {
                      question: 'Is the treatment anonymous and confidential?',
                      answer: 'Absolutely. We prioritize your privacy and offer completely anonymous treatment options. All records are confidential, and we have comprehensive privacy protections in place. Many of our clients, particularly veterans, appreciate this level of discretion.'
                    }
                  ].map((faq, index) => (
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
                        <p className="mt-4 text-navy-700 whitespace-pre-line">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Therapy */}
        <div id="individual-therapy" className="mb-24 scroll-mt-24">
          <div className="bg-[rgb(var(--color-persian-green))] rounded-2xl p-8 mb-[-4rem] relative z-10 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white text-center m-0">Conventional Individual and Family Counseling</h2>
          </div>
          <div className="bg-[rgb(var(--color-light-sea-green)/0.05)] rounded-2xl p-8 pt-20 relative z-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-navy-700 mb-6">
                  We know it can be difficult to ask for help, and we honor your commitment to improving your mental and emotional health through therapy.
                  <br /><br />

                  We specialize in helping people recover from trauma and have extensive experience working with survivors of domestic violence, child abuse, veterans, active duty military, and their families. We know that our clients may struggle with shame, self-doubt and self blame and we want to help them move on from wherever they're stuck.
                  <br /><br />

                  We know that not all trauma leaves marks you can see; many of our clients carry wounds from their childhood experiences. Some come to us with chronic traumas from living with people with disabilities and mental health conditions of their own.
                  <br /><br />

                  We help people find peace through acceptance.
                </p>
                <Link
                  to="/contact"
                  className="primary-button inline-flex"
                >
                  Schedule Your Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[rgb(var(--color-light-sea-green)/0.1)] relative z-10">
                <h3 className="text-xl font-bold text-[rgb(var(--color-midnight-green))] mb-6">Our Approach Includes:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <span>Evidence-based treatment models including CBT, EMDR, and Internal Family Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <span>Specialized support for neurodivergent individuals (ADHD, autism spectrum)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <span>Trauma-informed care for PTSD and complex trauma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <span>Family systems and relationship counseling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <span>Support for veterans and active duty military</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <span>Anxiety and depression management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-[rgb(var(--color-persian-green))]" />
                    </div>
                    <span>Personal growth and life transitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-teal-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Healing Journey?
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