import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Classic Haircut",
      price: "$30",
      description: "Traditional haircut with clippers and scissors for a clean, sharp look."
    },
    {
      title: "Beard Trim",
      price: "$20",
      description: "Professional beard shaping and trimming to maintain your style."
    },
    {
      title: "Hot Towel Shave",
      price: "$35",
      description: "Traditional straight razor shave with hot towels for the closest shave."
    },
    {
      title: "Hair & Beard Combo",
      price: "$45",
      description: "Complete grooming package with haircut and beard service."
    },
    {
      title: "Kids Cut",
      price: "$25",
      description: "Specialized haircuts for our younger clients in a comfortable environment."
    },
    {
      title: "Hair Coloring",
      price: "$50+",
      description: "Professional hair coloring services to cover grays or try a new look."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-yellow-600 font-bold mb-4">{service.price}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;