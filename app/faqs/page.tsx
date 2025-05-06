'use client';

import { ContactSection } from '@/components/ContactSection';
import { AcceptedInsurance } from '@/components/AcceptedInsurance';

const faqs = [
  {
    question: "Which insurance providers do you accept? And what if you don't accept my insurance?",
    answer: "I am affiliated with a company to manage all of my admin, billing, and scheduling called Headway. Through Headway, I am credentialed with and accept Aetna, BCBS of Massachusetts, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare, Carelon Behavioral Health as well as with United Healthcare Medicare Advantage. If you would like to begin/continue therapy with me, but I do not accept your insurance we may have the option of using your Out-of-Network benefits, which means that you (the client) would be responsible for paying for the services provided out of pocket (cash) and I will provide you with a document (Superbill) to submit to your insurance company for reimbursement."
  },
  {
    question: "Are you experienced in supporting military personnel and their families?",
    answer: "Absolutely. I have specialized training in military-focused care, which enables me to address the unique challenges that service members and their families face. My goal is to provide a safe and affirming environment where clients can explore concerns related to deployment, reintegration, transition to civilian life, trauma, and overall mental well-being. By understanding military culture and its impact on individuals and families, I offer tailored strategies that foster resilience, healing, and personal growth."
  },
  {
    question: "What does it mean that you offer LGBTQIA+ affirmed counseling?",
    answer: "I offer a safe, inclusive, and affirming space for all clients. As an LGBTQIA+ affirmed therapist, I honor your self-identified gender and sexual orientation and provide culturally competent care that recognizes the unique challenges faced by LGBTQIA+ individuals.\n\nIn our sessions, you can expect a non-judgmental and compassionate environment where your experiences are validated. I adapt my therapeutic strategies to help you explore your identity, manage stressors related to discrimination, and support your overall well-being."
  },
  {
    question: "What is telehealth?",
    answer: "As of right now all services provided are conducted through telehealth. Telehealth is an accessible form of therapy via phone or video conferencing where therapists can provide services for those who cannot attend in person."
  },
  {
    question: "Do you have a cancellation or no-show policy?",
    answer: "Yes, I completely understand that events may occur unexpectedly. However, this time is reserved for you and hard to fill last minute without notice. If you do not cancel your session within 24 hours there will be a $50 cancellation/no-show fee."
  },
  {
    question: "What can I expect to happen during our initial session and each subsequent session?",
    answer: "During our initial session, we will discuss the concerns that you brought you to therapy. We will discuss the impact that these concerns are having on your daily life, including sleep, eating habits, relationships, work, etc. During this time we will also identify specific goals that you would like to achieve while you are in therapy. This initial session as well as each subsequent session typically lasts 50 - 60 minutes. Also, during your initial session, we will discuss how frequent we will meet. I typically recommend weekly therapy to build our therapeutic relationship while giving you time to implement strategies we discuss. We can decrease how often we meet depending on how progress is made."
  },
  {
    question: "How can I prepare for my telehealth session?",
    answer: "I ask that you have a quiet, private space with little to no distractions, where you will be comfortable sharing openly with your therapist. We also ask to ensure that you have a secure internet connection. I want you to feel as comfortable as possible throughout each of your sessions."
  },
  {
    question: "How do I know if I am ready for therapy?",
    answer: "If you feel that your mental health has become difficult to manage on your own and you are deeply feeling its physical and mental side effects, it doesn't hurt to reach out and see how therapy can support you."
  },
  {
    question: "What if I have an emergency outside of my scheduled session?",
    answer: "If you have an emergency (medical or psychiatric) outside of your scheduled session, please contact 911. Your are welcome to email/text/call me for any/all non-emergency needs, including general questions, scheduling needs, etc."
  }
];

export default function FAQsPage() {
  return (
    <div className="pb-16">
      <div className="bg-[#F4FFF6]/30 py-16">
      <div className="container-width px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-text-light text-lg text-center mb-12">
            Find answers to common questions about our services, policies, and what to expect from therapy.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-6 py-2 shadow-[0_2px_10px_rgb(0,0,0,0.08)]"
              >
                <h2 className="text-xl font-medium text-primary py-4">
                  {faq.question}
                </h2>
                <p className="text-text-dark text-lg pb-4">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-light text-lg mb-8">
              Still have questions? We're here to help.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-orange hover:bg-orange-dark text-white px-8 py-3 rounded-full text-lg transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
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