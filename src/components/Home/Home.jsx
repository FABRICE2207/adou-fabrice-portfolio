import React from 'react';
import bgimage from '../../assets/bgimage.png';

const Home = () => {
  return (
    <div
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[100vh] flex items-center justify-center px-6 text-white"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-[#0a0674a6] opacity-60 z-0"></div>

      {/* Contenu central */}
      <div
        className="relative z-10 text-center space-y-5 max-w-3xl"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light">Je suis</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          ADOU NIANGORAN FABRICE
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-200"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Développeur Full-stack 
        </p>

        
      </div>
    </div>
  );
};

export default Home;
