import React from 'react';

const TeamComponent = () => {
  const cards = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Anderson Mark',
      description: 'Creative Designer',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8112135/pexels-photo-8112135.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Alex James',
      description: 'Marketing Specialist',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww',
      title: 'Elle James',
      description: 'Financial Analyst',
    },
    {
      image: 'https://images.pexels.com/photos/17811086/pexels-photo-17811086/free-photo-of-a-man-in-black-shirt-sitting-on-a-stool.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      id: 4,
      title: 'John Doe',
      description: 'Marketing Manager',
    },
  ];

  return (
    <div className="relative min-h-full px-2 py-10 mx-auto max-w-screen-xl bg-Black/55 backdrop-blur-sm">
      <div className="container px-4 mx-auto mt-20 text-center">
        <div className='max-w-3xl mx-auto'>
        <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
            <span className="text-center">
            Our Team Of Experts{""}
              <br />
            </span>
            Are Here To Help
          </h1>
        <p className="mb-8 lg:text-lg text-md font-sora text-zinc-300">
        We are a diverse group of passionate individuals dedicated to driving innovation and excellence in our field. We believe that our collective strengths not only enhance our projects but also contribute to a positive workplace culture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full mb-6 transition duration-300 border-2 rounded-2xl h-2/3 hover:border-White border-Black"
              />
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-medium text-White font-title">{card.title}</h3>
                <p className="mb-4 text-lg font-medium text-zinc-300 font-para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;