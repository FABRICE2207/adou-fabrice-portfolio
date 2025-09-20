import React from 'react'
import imageProject1 from '../../assets/1.png';
import imageProject2 from '../../assets/2.jpg';
import imageProject3 from '../../assets/3.png';
import imageProject4 from '../../assets/4.png';
import imageProject5 from '../../assets/5.png';
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Projects = () => {

  const projects = [
  // {
  //   id: 1,
  //   image: imageProject1,
  //   link: "https://sanitas-plus.vercel.app/",
  //   title: "Voir le site de SANITAS-PLUS",
  // },
  {
    id: 1,
    image: imageProject2,
    link: "https://www.qr.jilx.ci/",
    title: "Voir la plateforme de QrProd",
  },
  {
    id: 2,
    image: imageProject3,
    link: "https://site-web-le-campeur.vercel.app/",
    title: "Voir le site du CAMPEUR",
  },
  {
    id: 3,
    image: imageProject4,
    link: "https://siteweb-adca-construction.vercel.app/",
    title: "Voir le site de l'ADCA",
  },
  {
    id: 4,
    image: imageProject5,
    link: "https://ridissi.vercel.app/",
    title: "Voir le site de RIDISSI",
  },
];

  return (
    <div id="projects" className='bg-white lg:w-full pb-10'>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px] uppercase'>mes projets</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
      </div>

      <div className="pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {projects.map((project, id) => (
          <div
            key={id}
            className="relative p-4 bg-white lg:h-[210px] h-[50vh] bg-cover bg-center shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 bg-[#090674] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer">
                <div className="text-white flex flex-col justify-center items-center">
                  <BsEyeFill size={30} />
                  <p>{project.title}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Projects