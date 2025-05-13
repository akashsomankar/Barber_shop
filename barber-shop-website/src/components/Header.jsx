import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-yellow-500">BARBER</span>
          <span className="text-2xl font-bold">SHOP</span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-yellow-500 transition">Home</a>
          <a href="#services" className="hover:text-yellow-500 transition">Services</a>
          <a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a>
          <a href="#team" className="hover:text-yellow-500 transition">Team</a>
          <a href="#location" className="hover:text-yellow-500 transition">Location</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="hover:text-yellow-500 transition" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#services" className="hover:text-yellow-500 transition" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#gallery" className="hover:text-yellow-500 transition" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#team" className="hover:text-yellow-500 transition" onClick={() => setIsOpen(false)}>Team</a>
            <a href="#location" className="hover:text-yellow-500 transition" onClick={() => setIsOpen(false)}>Location</a>
            <a href="#contact" className="hover:text-yellow-500 transition" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;