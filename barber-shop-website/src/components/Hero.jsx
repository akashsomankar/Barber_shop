import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Fama Barber Shop & Beauty Salon</h1>
          <p className="text-xl mb-8">Experience the traditional barber shop with modern techniques</p>
          <a 
            href="#contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;