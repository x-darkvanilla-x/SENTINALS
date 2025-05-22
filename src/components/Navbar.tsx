"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-center w-full py-4 px-6 md:px-12 bg-transparent text-white">
      {/* Desktop Menu - Left Side */}
      <div className="hidden md:flex items-center space-x-20">
        <Link href="/" className="font-medium hover:text-orange-500 transition-colors">HOME</Link>
        <Link href="/about" className="font-medium hover:text-orange-500 transition-colors">ABOUT</Link>
        <Link href="/" className="flex items-center">
          <Image 
            src="/sentinals-esports-logo.svg" 
            alt="Sentinals Logo" 
            width={80} 
            height={80}
            className="h-auto"
            priority
          />
        </Link>
        <Link href="/blog" className="font-medium hover:text-orange-500 transition-colors">BLOG</Link>
        <Link href="/contact" className="font-medium hover:text-orange-500 transition-colors">CONTACT</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#050A1B] z-50 md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="font-medium hover:text-orange-500 transition-colors">HOME</Link>
            <Link href="/about" className="font-medium hover:text-orange-500 transition-colors">ABOUT</Link>
            <Link href="/blog" className="font-medium hover:text-orange-500 transition-colors">BLOG</Link>
            <Link href="/contact" className="font-medium hover:text-orange-500 transition-colors">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;