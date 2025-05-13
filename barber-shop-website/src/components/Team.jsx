import React from 'react';

const Team = () => {
  const barbers = [
    {
      name: "John Smith",
      role: "Master Barber",
      bio: "With over 15 years of experience, John specializes in classic cuts and straight razor shaves.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Mike Johnson",
      role: "Beard Specialist",
      bio: "Mike is our beard grooming expert, creating perfectly shaped beards for every face type.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "David Wilson",
      role: "Stylist",
      bio: "David brings modern styling techniques to complement our traditional barber services.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MEET OUR BARBERS</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{barber.name}</h3>
              <p className="text-yellow-600 font-bold mb-4">{barber.role}</p>
              <p className="text-gray-600">{barber.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;