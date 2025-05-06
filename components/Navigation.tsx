'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/public/images/logo-transparent-bg-center-only.webp';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button'; 
import { useState } from 'react';

const LeftNavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    <Link href="/" className="nav-link" onClick={onLinkClick}>HOME</Link>
    <Link href="/services" className="nav-link" onClick={onLinkClick}>SERVICES</Link>
    <Link href="/about" className="nav-link" onClick={onLinkClick}>ABOUT</Link>
  </>
);

const RightNavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    <Link href="/faqs" className="nav-link" onClick={onLinkClick}>FAQS</Link>
    <Link href="/contact" className="nav-link" onClick={onLinkClick}>CONTACT</Link>
  </>
);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-[#889A7A] shadow-sm z-50">
      <div className="container-width flex justify-between items-center px-8 py-4">
        <div className="flex-1 flex items-center">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-white/80">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#889A7A]">
              <SheetTitle className="text-lg font-semibold mb-4">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-6 mt-8">
                <LeftNavLinks onLinkClick={handleLinkClick} />
                <RightNavLinks onLinkClick={handleLinkClick} />
                <a href="tel:856-437-0274" className="text-white hover:text-white/80">
                  <span className="font-medium">856-437-0274</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-start gap-3 xl:gap-6">
            <LeftNavLinks onLinkClick={handleLinkClick} />
          </div>
        </div>
        
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-24 h-24 overflow-hidden">
            <Image
              src={logoImage}
              alt="Kind Consciousness Counseling"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="flex-1 flex justify-end items-center">
          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center justify-end gap-3 xl:gap-6 mr-8">
            <RightNavLinks onLinkClick={handleLinkClick} />
          </div>
          
          {/* Phone number always visible */}
          <a href="tel:856-437-0274" className="text-white hover:text-white/80 text-nowrap">
            <span className="font-medium">856-437-0274</span>
          </a>
        </div>
      </div>
    </nav>
  );
}