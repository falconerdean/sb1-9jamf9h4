import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields'
      });
      return;
    }

    if (!formData.consent) {
      setFormStatus({
        type: 'error',
        message: 'Please agree to the privacy policy'
      });
      return;
    }

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        <div className="text-center pt-32 pb-20 px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ready to start your healing journey? Reach out to schedule a free consultation or ask any questions you may have.
          </p>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[rgb(var(--color-midnight-green))] mb-8">
              Contact Information
            </h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(var(--color-light-sea-green)/0.1)] p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-[rgb(var(--color-persian-green))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[rgb(var(--color-midnight-green))]">Phone</h3>
                  <p className="text-[rgb(var(--color-midnight-green)/0.8)]">
                    <a href="tel:719-330-3366" className="hover:text-[rgb(var(--color-persian-green))] transition-colors">
                      719-330-3366
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(var(--color-light-sea-green)/0.1)] p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-[rgb(var(--color-persian-green))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[rgb(var(--color-midnight-green))]">Email</h3>
                  <p className="text-[rgb(var(--color-midnight-green)/0.8)]">
                    <a href="mailto:vbruno@augustadvice.com" className="hover:text-[rgb(var(--color-persian-green))] transition-colors">
                      vbruno@augustadvice.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[rgb(var(--color-light-sea-green)/0.1)] p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-[rgb(var(--color-persian-green))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[rgb(var(--color-midnight-green))]">Office Location</h3>
                  <p className="text-[rgb(var(--color-midnight-green)/0.8)]">
                    1422 North Hancock Drive<br />
                    Colorado Springs, CO 80903
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(var(--color-light-sea-green)/0.05)] rounded-xl p-8">
              <h3 className="text-xl font-semibold text-[rgb(var(--color-midnight-green))] mb-4">
                About Your Privacy
              </h3>
              <p className="text-[rgb(var(--color-midnight-green)/0.8)] mb-4">
                Your privacy and confidentiality are our top priorities. All communications are secure and protected by therapist-client confidentiality. We offer completely anonymous consultation options for those who prefer additional privacy.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg border border-[rgb(var(--color-light-sea-green)/0.1)] p-8">
            <h2 className="text-2xl font-bold text-[rgb(var(--color-midnight-green))] mb-8">
              Send a Message
            </h2>

            {formStatus.type && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                formStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}>
                {formStatus.type === 'success' ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[rgb(var(--color-midnight-green))] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[rgb(var(--color-light-sea-green)/0.05)] border border-[rgb(var(--color-light-sea-green)/0.1)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-persian-green))] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--color-midnight-green))] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[rgb(var(--color-light-sea-green)/0.05)] border border-[rgb(var(--color-light-sea-green)/0.1)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-persian-green))] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[rgb(var(--color-midnight-green))] mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[rgb(var(--color-light-sea-green)/0.05)] border border-[rgb(var(--color-light-sea-green)/0.1)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-persian-green))] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[rgb(var(--color-midnight-green))] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[rgb(var(--color-light-sea-green)/0.05)] border border-[rgb(var(--color-light-sea-green)/0.1)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-persian-green))] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--color-midnight-green))] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[rgb(var(--color-light-sea-green)/0.05)] border border-[rgb(var(--color-light-sea-green)/0.1)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-persian-green))] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1"
                  required
                />
                <label htmlFor="consent" className="text-sm text-[rgb(var(--color-midnight-green)/0.8)]">
                  I consent to having this website store my submitted information so they can respond to my inquiry. See our privacy policy to learn more about how we protect and manage your data. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full primary-button justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}