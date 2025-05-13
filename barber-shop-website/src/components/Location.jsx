import React from 'react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR LOCATION</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">VISIT US</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">Address</h4>
                <p>500 N Bell Ave #109</p>
                <p> Denton, TX 76209</p>
                <p>United States</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">Hours</h4>
                <p>Monday - Friday: 9am - 7pm</p>
                <p>Saturday: 8am - 5pm</p>
                <p>Sunday: 10am - 4pm</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2">Contact</h4>
                <p>Phone: +1 940-612-9127</p>
                <p>Email: famabarbershop@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.98784492416437!3d40.74844097138961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Barber Shop Location"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;