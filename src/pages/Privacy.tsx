import React from 'react';
import { PageHero } from '../components/PageHero';

export function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Privacy Policy" 
        description="Our commitment to protecting your privacy"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg">
          <h2>Privacy Policy</h2>
          <p>This privacy policy outlines how we collect, use, and protect your personal information.</p>
          
          <h3>Information Collection</h3>
          <p>We collect information that you voluntarily provide to us when using our services.</p>
          
          <h3>Use of Information</h3>
          <p>The information we collect is used to provide and improve our services, communicate with you, and ensure compliance with legal obligations.</p>
          
          <h3>Data Protection</h3>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
          
          <h3>Contact Us</h3>
          <p>If you have any questions about our privacy policy, please contact us.</p>
        </div>
      </div>
    </div>
  );
}