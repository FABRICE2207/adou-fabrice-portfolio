import React from 'react';
import imageadou from '../../assets/image_adou.png';
import { FaDownload, FaFacebook, FaLinkedin } from 'react-icons/fa';

const About = () => {

  const handleDownloadCV = () => {
    // Remplacez ce lien par le lien vers votre CV
    const cvUrl = '/path-to-your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_ADOU_FABRICE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='about' className='w-full px-5 py-16 bg-white'>
      {/* Titre section */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-800'>À propos de moi</h2>
        <div className='mx-auto mt-2 h-1 w-24 bg-[#090674] rounded'></div>
      </div>

      {/* Contenu principal */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:px-32'>
        {/* Image profil */}
        <div className='relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-xl border-4 border-[#090674]'>
          <img
            src={imageadou}
            alt="Adou Fabrice"
            className='object-cover w-full h-full'
          />
        </div>

        {/* Texte descriptif */}
        <div className='max-w-xl text-center lg:text-left'>
          <p className='text-gray-700 text-lg'>
            Jeune passionné et titulaire d'un <strong>Brevet de Technicien Supérieur</strong> (BTS) en Informatique Développeur d'Applications à l'Institut Supérieur Jean Paul 2 de Yopougon (Groupe Loko).
          </p>
          <p className='text-gray-700 text-lg mt-4'>
            Avec <strong>3 ans d'expérience</strong>, je vous accompagne dans la conception de solutions web et mobiles efficaces, fiables et adaptées à vos besoins.
          </p>

          {/* Icônes réseaux sociaux */}
          <div className='flex justify-center lg:justify-start gap-4 mt-6'>
            <a
              href="https://www.facebook.com/profile.php?id=100093082975492"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-[#090674] transition"
            >
              <FaFacebook className="text-gray-500 group-hover:text-[#090674] text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/niangoran-fabrice-adou/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-[#090674] transition"
            >
              <FaLinkedin className="text-gray-500 group-hover:text-[#090674] text-xl" />
            </a>
          </div>

          {/* Bouton télécharger CV */}
          <div className='flex justify-center lg:justify-start mt-8'>
            <button
              onClick={handleDownloadCV}
              className="group bg-[#090674] hover:bg-[#0a0856] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
              <span>Télécharger mon CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
