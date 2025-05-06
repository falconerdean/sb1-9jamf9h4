import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-warm-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="group">
            <img 
              src="/img/transparentlogo.png" 
              alt="August Advice Therapy" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/faqs" className="nav-link">FAQs</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="primary-button">
              Learn More
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-navy-600 hover:text-navy-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-warm-200">
            <div className="px-4 py-6 space-y-4 bg-white">
              <Link to="/services" className="block nav-link">Services</Link>
              <Link to="/faqs" className="block nav-link">FAQs</Link>
              <Link to="/about" className="block nav-link">About</Link>
              <Link to="/contact" className="w-full primary-button justify-center inline-flex">
                Learn More
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}