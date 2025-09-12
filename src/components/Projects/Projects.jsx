import React from 'react'
import imageProject1 from '../../assets/1.png';
import imageProject2 from '../../assets/2.jpg';
import imageProject3 from '../../assets/3.png';
import imageProject4 from '../../assets/4.png';
import imageProject5 from '../../assets/5.png';
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <div id="projects" className='bg-white lg:w-full pb-10'>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px] uppercase'>mes projets</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
      </div>

      <div className='pt-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {/* Projet 1 */}
          <div
            className="p-4 bg-white lg:h-[210px] h-[50vh] bg-cover bg-center shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${imageProject1})` }}
          >
            {/* Superposition noire visible au survol */}
            <a href="https://sanitas-plus.vercel.app/">
              <div className="absolute inset-0 bg-[#090674] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer">
              {/* <Link to="" className="text-white text-lg"> */}
                <div className="text-white flex flex-col justify-center items-center">
                  <BsEyeFill size={30} />
                  <p>Voir le site de SANITAS-PLUS</p>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 2 */}
         <div
            className="p-4 bg-white lg:h-[210px] h-[50vh] bg-cover bg-center shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${imageProject2})` }}
          >
            {/* Superposition noire visible au survol */}
            <a href="https://www.qr.jilx.ci/">
              <div className="absolute inset-0 bg-[#090674] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer">
              {/* <Link to="" className="text-white text-lg"> */}
                <div className="text-white flex flex-col justify-center items-center">
                  <BsEyeFill size={30} />
                  <p>Voir la plateforme de QrProd</p>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 3 */}
          <div
            className="p-4 bg-white lg:h-[210px] h-[50vh] bg-cover bg-center shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${imageProject3})` }}
          >
            {/* Superposition noire visible au survol */}
            <a href="https://site-web-le-campeur.vercel.app/">
              <div className="absolute inset-0 bg-[#090674] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer">
              {/* <Link to="" className="text-white text-lg"> */}
                <div className="text-white flex flex-col justify-center items-center">
                  <BsEyeFill size={30} />
                  <p>Voir le site du CAMPEUR</p>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 4 */}
          <div
            className="p-4 bg-white lg:h-[210px] h-[50vh] bg-cover bg-center shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${imageProject4})` }}
          >
            {/* Superposition noire visible au survol */}
            <a href="https://siteweb-adca-construction.vercel.app/">
              <div className="absolute inset-0 bg-[#090674] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer">
              {/* <Link to="" className="text-white text-lg"> */}
                <div className="text-white flex flex-col justify-center items-center">
                  <BsEyeFill size={30} />
                  <p>Voir le site de l'ADCA</p>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 5 */}
          <div
            className="p-4 bg-white lg:h-[210px] h-[50vh] bg-cover bg-center shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${imageProject5})` }}
          >
            {/* Superposition noire visible au survol */}
            <a href="https://ridissi.vercel.app/">
              <div className="absolute inset-0 bg-[#090674] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer">
              {/* <Link to="" className="text-white text-lg"> */}
                <div className="text-white flex flex-col justify-center items-center">
                  <BsEyeFill size={30} />
                  <p>Voir le site de RIDISSI</p>
                </div>
              </div>
            </a>
          </div>
          {/* Ajoutez d'autres projets ici si nécessaire */}
        </div>
      </div>
    </div>
  )
}

export default Projects