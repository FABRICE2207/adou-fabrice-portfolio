import React from 'react';

const experiences = [
  {
    date: "Depuis Mai 2022",
    title: "Développeur Full-Stack et Mobile",
    company: "DJILX CI",
    missions: [
      "Maintenance des sites web",
      "Conception des dashboards (Back Office)",
      "Développement d'APIs avec Python (Flask)"
    ],
  },
  {
    date: "Novembre 2021 - Mai 2022",
    title: "Stagiaire au département projet",
    company: "NGSER",
    missions: [
      "Suivi des projets de l'entreprise",
      "Rédaction du rapport de stage : Système de gestion des adhérents (Ruby)"
    ],
  }
];

const Experience = () => {
  return (
    <div id='experience' className='w-full px-5 py-16 bg-white'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-800'>Expériences</h2>
        <div className='mx-auto mt-2 h-1 w-24 bg-[#090674] rounded'></div>
      </div>

      <div className='relative flex flex-col items-center'>
        {/* Ligne verticale centrale */}
        <div className='absolute w-1 bg-[#090674] h-full left-1/2 transform -translate-x-1/2'></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className='w-full md:w-1/2 px-6 py-2 mb-10 relative flex flex-col items-center text-center'
            data-aos='fade-up'
            data-aos-delay={1000 + index * 200}
          >
            {/* Rond central */}
            <span className='absolute w-5 h-5 bg-[#090674] rounded-full top-8 left-1/2 transform -translate-x-1/2 z-10'></span>

            {/* Carte d'expérience */}
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg z-20'>
              <h3 className='text-sm font-semibold text-[#090674]'>{exp.date}</h3>
              <h4 className='text-xl font-bold text-gray-800 mt-1'>{exp.company}</h4>
              <p className='text-gray-700 italic'>{exp.title}</p>
              <ul className='list-disc mt-3 text-gray-600 text-sm text-left ml-6'>
                {exp.missions.map((mission, i) => (
                  <li key={i}>{mission}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
