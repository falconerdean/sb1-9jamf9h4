import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle, Send, Menu, X } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const faqs = {
  'Policies & Procedures': [
    {
      question: 'Is everything I share confidential?',
      answer: 'Yes, confidentiality is a cornerstone of our practice. All information shared during sessions is kept strictly confidential within the legal and ethical guidelines of the counseling profession. The only exceptions to confidentiality are situations involving imminent danger to yourself or others, suspected abuse of children or vulnerable adults, or if required by court order. We\'ll discuss these limitations in detail during your first session.'
    },
    {
      question: 'How do I schedule an appointment?',
      answer: <>You can schedule an appointment by calling our office at 719-330-3366, sending an email to vbruno@augustadvice.com, or using our <Link to="/contact" className="text-[rgb(var(--color-persian-green))] hover:underline">online scheduling form</Link>. We'll respond promptly to set up your initial consultation.</>
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours\' notice for cancellations. Sessions cancelled with less than 24 hours\' notice may be subject to a cancellation fee of [insert fee amount or percentage]. We understand that emergencies happen and will address these situations on a case-by-case basis.'
    }
  ],
  'Common Questions': [
    {
      question: 'What are your qualifications?',
      answer: 'Vincent Bruno is a licensed professional counselor and licensed Clinical Facilitator with 15 years experience treating children and adults with trauma. He specializes in sensory issues, neurodivergence, PTSD and veterans issues.  We use and are trained in evidence-based interventions such as EMDR, CPT, CBT and IFS modalities'
    },
    {
      question: 'What should I expect during my first session?',
      answer: 'Your first session will primarily focus on getting to know each other and understanding your needs. We\'ll discuss your concerns, goals for therapy, and relevant background information. This initial consultation helps determine if we\'re a good fit and allows us to develop a customized treatment plan. The session lasts approximately 50 minutes, and you\'ll have the opportunity to ask questions about the therapeutic process.'
    },
    {
      question: 'How long are therapy sessions?',
      answer: 'Standard therapy sessions are 50 minutes long. Natural Medicine-Assisted Therapy sessions are longer, typically 5-6 hours for the medicine session, with standard-length preparation and integration sessions.'
    },
    {
      question: 'How often will we meet?',
      answer: 'Session frequency depends on your specific needs and the type of therapy. For conventional therapy, we typically recommend weekly sessions initially. Natural Medicine-Assisted Therapy follows a structured protocol with specific timing for preparation, medicine session, and integration sessions. We\'ll discuss the recommended schedule during your consultation.'
    }
  ],
  'Natural Medicine-Assisted Therapy': [
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
      answer: 'The therapy consists of three phases:\nPreparation (2-3 sessions): Assessment, education about the process, and building therapeutic rapport\nMedicine Session (5-6 hours): Guided therapeutic experience with natural medicine in a safe, comfortable environment\nIntegration (4 sessions): Processing insights gained during the medicine session and incorporating them into daily life'
    },
    {
      question: 'Who is a good candidate for this therapy?',
      answer: 'Natural Medicine-Assisted Therapy is particularly beneficial for individuals with PTSD, treatment-resistant depression, anxiety disorders, and substance use concerns. It\'s especially effective for veterans, first responders, and survivors of trauma who haven\'t found relief through conventional treatments. We conduct a thorough assessment to determine if this approach is appropriate for your specific situation.'
    },
    {
      question: 'Who should NOT pursue this type of therapy?',
      answer: 'This therapy may not be appropriate for individuals with certain medical conditions including severe cardiovascular issues, pregnancy, severe psychiatric conditions such as schizophrenia or bipolar I disorder, or those taking specific medications. During your consultation, we\'ll conduct a comprehensive screening to ensure this therapy is safe for you.'
    },
    {
      question: 'What are the potential side effects?',
      answer: 'During the session, you may experience temporary effects such as changes in perception, emotional release, varied sensations, and altered awareness. Some clients report mild side effects like fatigue, headache, or emotional sensitivity for a day or two following the session. These are normal parts of the therapeutic process and typically resolve quickly.'
    },
    {
      question: 'How many sessions will I need?',
      answer: 'Most clients undergo one medicine session with associated preparation and integration sessions (8-11 hours total over approximately two weeks).'
    },
    {
      question: 'Is the treatment anonymous and confidential?',
      answer: 'Absolutely. We prioritize your privacy and offer completely anonymous treatment options. All records are confidential, and we have comprehensive privacy protections in place. Many of our clients, particularly veterans, appreciate this level of discretion.'
    },
    {
      question: 'Will this impact my VA benefits or military status?',
      answer: 'August Advice does not communicate with the VA regarding your treatment. All records are confidential, and you can engage in treatment anonymously. Many of our veteran clients maintain their VA benefits while seeking complementary care with us.'
    }
  ],
  'Individual Therapy': [
    {
      question: 'What types of issues do you address in individual therapy?',
      answer: 'We provide support for a wide range of concerns including anxiety, depression, trauma recovery, stress management, grief and loss, life transitions, relationship issues, self-esteem, personal growth, and neurodivergent support (ADHD, autism spectrum). During your initial consultation, we\'ll discuss your specific needs and determine the best approach for your standard therapy sessions.'
    },
    {
      question: 'What therapeutic approaches do you use?',
      answer: 'We integrate multiple evidence-based approaches including Cognitive Behavioral Therapy (CBT), Mindfulness-Based Cognitive Therapy (MBCT), Acceptance and Commitment Therapy (ACT), and Psychodynamic techniques. Our approach is tailored to your unique needs, preferences, and goals.'
    },
    {
      question: 'How long will I need to be in therapy?',
      answer: 'The duration of therapy varies significantly based on your specific concerns, goals, and progress. Some clients benefit from short-term therapy (8-12 sessions) focused on specific issues, while others prefer longer-term support for complex or ongoing challenges. We\'ll regularly review your progress and adjust our approach accordingly.'
    },
    {
      question: 'What\'s the difference between therapy and counseling?',
      answer: 'While these terms are often used interchangeably, counseling typically focuses on specific problems and practical solutions, while therapy often involves deeper exploration of patterns, emotions, and past experiences. Our practice offers both approaches, tailored to your needs and preferences.'
    },
    {
      question: 'How will I know if therapy is working?',
      answer: 'Progress in therapy can take many forms, including reduced symptom severity, improved coping skills, better relationships, greater self-awareness, and enhanced quality of life. We\'ll establish clear goals at the beginning of therapy and regularly review your progress. Many clients report noticing positive changes within the first few sessions, though deeper changes often develop over time.'
    },
    {
      question: 'What if I don\'t feel a connection with my therapist?',
      answer: 'The therapeutic relationship is a crucial component of effective therapy. If you don\'t feel comfortable or connected with your therapist after a few sessions, we encourage you to discuss these concerns openly. Sometimes adjustments can improve the connection, or we can help facilitate a referral to another provider who might be a better fit.'
    }
  ],
  'Costs and Insurance': [
    {
      question: 'What are your fees for therapy services?',
      answer: 'Our standard rates are:\nStandard Therapy: $165 per 50-minute session\nNatural Medicine-Assisted Therapy: $1,500 for the medicine session ($1,200 for veterans) plus $165 per preparation and integration session\nSex Therapy: $165 per 50-minute session'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We are a private pay practice. As a private pay practice, we operate outside of traditional insurance networks. This means that our clients pay directly for the services they receive at the time of their appointment. This model allows us to prioritize providing the highest quality of care tailored to each individual\'s specific needs, without the constraints often imposed by insurance companies regarding treatment duration, frequency, or specific modalities. Clients choosing our practice benefit from enhanced privacy, as their treatment details are not routinely shared with insurance providers. While we do not directly bill insurance companies, we can provide clients with detailed invoices or superbills that they can submit to their insurance providers for potential out-of-network reimbursement, depending on their individual plan\'s coverage. We encourage clients to contact their insurance companies directly to understand their out-of-network benefits for mental health services. Our focus remains on delivering exceptional and personalized care, ensuring the best possible outcomes for our clients.'
    },
    {
      question: 'Do you offer sliding scale fees?',
      answer: 'We offer a limited number of sliding scale spots based on financial need. Please inquire during your initial contact if you\'re experiencing financial hardship, and we\'ll discuss available options.'
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept [insert items].'
    },
    {
      question: 'What if I need to cancel a session?',
      answer: 'We require 24 hours\' notice for cancellations. Sessions cancelled with less than 24 hours\' notice may be subject to a cancellation fee of [insert fee amount or percentage]. For Natural Medicine-Assisted Therapy sessions, which require extended scheduling blocks, we require [insert specific cancellation policy].'
    },
    {
      question: 'Do you offer payment plans?',
      answer: '[Insert Answer]'
    }
  ],
  'Resources & Support': [
    {
      question: 'What documents do I need to review before my Natural Medicine-Assisted Therapy?',
      answer: '[Insert links to PDFs]'
    },
    {
      question: 'What resources do you recommend for learning more about trauma and PTSD?',
      answer: 'We recommend:\n[Insert book recommendations]\nNational Center for PTSD: www.ptsd.va.gov\nTrauma Resource Institute: www.traumaresourceinstitute.com\n[Insert additional resources specific to trauma and PTSD]'
    },
    {
      question: 'Are there any support groups you recommend?',
      answer: 'We can provide referrals to local support groups based on your specific needs. Some general resources include:\n[Insert local support group information]\nVeterans Crisis Line: 1-800-273-8255, Press 1\nNAMI Support Groups: www.nami.org/Support-Education/Support-Groups'
    },
    {
      question: 'What should I do in a mental health emergency?',
      answer: 'If you\'re experiencing a mental health emergency:\nCall 988 (National Suicide Prevention Lifeline)\nText HOME to 741741 (Crisis Text Line)\nCall 911 or go to your nearest emergency room\nVeterans Crisis Line: 1-800-273-8255, Press 1\nColorado Crisis Services: 1-844-493-8255 or text TALK to 38255'
    },
    {
      question: 'Do you provide educational materials about therapy?',
      answer: 'Yes, we offer resources to help you understand and get the most out of therapy. These include:\n[Insert links to educational resources]'
    },
    {
      question: 'Where can I learn more about Natural Medicine-Assisted Therapy research?',
      answer: 'For evidence-based information about Natural Medicine-Assisted Therapy, we recommend:\n[Insert relevant research organizations]\n[Insert relevant publications or websites]\n[Insert educational resources about natural medicine therapy]'
    }
  ]
};

export function FAQs() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Policies & Procedures');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 180; // Account for fixed header and nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        <div className="text-center pt-32 pb-20">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Find answers to common questions about our services, policies, and resources to support your healing journey.
          </p>
        </div>
      </PageHero>

      {/* FAQ Menu Title */}
      <div className="bg-[rgb(var(--color-light-sea-green)/0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h2 className="text-2xl mb-0 font-bold text-[rgb(var(--color-midnight-green))]">
            FAQs and Resources Menu
          </h2>
        </div>
      </div>

      {/* FAQ Navigation */}
      <div className="sticky top-20 z-40 bg-[rgb(var(--color-light-sea-green)/0.05)] backdrop-blur-md border-y-2 border-[rgb(var(--color-midnight-green)/0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between py-4">
            <nav className="flex space-x-1" role="navigation" aria-label="FAQ sections">
              {Object.keys(faqs).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'bg-[rgb(var(--color-persian-green))] text-white'
                      : 'text-[rgb(var(--color-midnight-green)/0.8)] hover:bg-[rgb(var(--color-light-sea-green)/0.1)] hover:text-[rgb(var(--color-midnight-green))]'
                  }`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden py-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-[rgb(var(--color-midnight-green))] bg-white/50 rounded-lg"
              aria-expanded={isMobileMenuOpen}
              aria-controls="faq-mobile-menu"
            >
              <span className="font-medium">{activeSection}</span>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {isMobileMenuOpen && (
              <div
                id="faq-mobile-menu"
                className="absolute left-0 right-0 mt-2 px-4 py-2 bg-white border-2 border-[rgb(var(--color-midnight-green)/0.2)] shadow-lg"
              >
                <div className="max-w-7xl mx-auto">
                  <nav className="flex flex-col space-y-1" role="navigation" aria-label="FAQ sections">
                    {Object.keys(faqs).map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`px-4 py-2 text-left rounded-lg text-sm font-medium transition-colors ${
                          activeSection === section
                            ? 'bg-[rgb(var(--color-persian-green))] text-white'
                            : 'text-[rgb(var(--color-midnight-green)/0.8)] hover:bg-[rgb(var(--color-light-sea-green)/0.1)] hover:text-[rgb(var(--color-midnight-green))]'
                        }`}
                        aria-current={activeSection === section ? 'page' : undefined}
                      >
                        {section}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* FAQ Categories */}
        <div className="md:space-y-24 space-y-12">
          {Object.entries(faqs).map(([category, questions]) => (
            <div key={category} id={category}>
              <h3 className="text-2xl font-bold text-[rgb(var(--color-midnight-green))] mb-6">{category}</h3>
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

        {/* Call to Action */}
        <div className="mt-24 bg-teal-600 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Send us your question below or schedule a free consultation to discuss your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="question" className="sr-only">Question</label>
                  <textarea
                    id="question"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    placeholder="Your question"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-teal-600 rounded-lg flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  Send Question
                  <Send className="h-5 w-5" />
                </button>
              </form>

              <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Or Schedule a Call</h3>
                <p className="text-white/90 mb-6">
                  Prefer to discuss your questions in person? Schedule a free consultation with our team.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-teal-600 transition-all duration-200 w-full"
                >
                  Book Your Free Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}