import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative min-h-screen w-full md:aspect-video bg-[#050A1B] text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(/header-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6
        }}
      />
      
      {/* Dark shadow overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/70 to-black/50 pointer-events-none"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col min-h-screen">

        <Navbar />
        
        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto w-full">
          <div className="space-y-6 md:space-y-1">
            <div className="flex items-center space-x-2">
              <p className="text-sm md:text-base font-medium tracking-wider">PRO ESPORT TEAM</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              WE ARE<br />
              <span className="block">SENTINALS</span>
            </h1>
            
            <p className="max-w-xl text-gray-300 text-sm md:text-base">
            Dominating the game with skill, strategy, and teamwork.  
            Join the elite — where champions rise and legends are made.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link 
                href="/about" 
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium py-3 px-8 inline-block text-center uppercase tracking-wide"
              >
                LEARN MORE
              </Link>
              
              <Link 
                href="/membership" 
                className="border border-white hover:bg-white hover:text-[#050A1B] transition-colors text-white font-medium py-3 px-8 inline-block text-center uppercase tracking-wide"
              >
                JOIN MEMBERSHIP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;