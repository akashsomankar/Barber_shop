import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-yellow-500">BARBER</span>
              <span className="text-2xl font-bold">SHOP</span>
            </div>
            <p className="text-gray-400">Traditional barber services with modern techniques in a comfortable environment.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500 transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-500 transition">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-yellow-500 transition">Gallery</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-yellow-500 transition">Team</a></li>
              <li><a href="#location" className="text-gray-400 hover:text-yellow-500 transition">Location</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>123 Barber Street</p>
              <p>Downtown, Cityville</p>
              <p>State, 12345</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@barbershop.com</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex justify-between"><span>Monday - Friday</span> <span>9am - 7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>8am - 5pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>10am - 4pm</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;