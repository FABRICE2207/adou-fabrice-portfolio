import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { FiSmartphone, FiMonitor } from 'react-icons/fi'

const Services = () => {
  return (
    <div id="services" className="bg-white w-full px-5 lg:px-20 py-16">
      {/* Titre */}
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <h2 className="font-bold text-3xl lg:text-4xl uppercase text-gray-800">
          Mes Services
        </h2>
        <div className="bg-[#090674] w-24 h-1.5 mt-4"></div>
      </div>

      {/* Cartes de services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* Carte 1 */}
        <div
          className="bg-white shadow p-8 rounded-xl border border-gray-200 hover:border-[#090674] hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <BiWorld className="text-4xl text-[#090674] mb-4" />
          <h3 className="font-semibold text-xl lg:text-2xl text-gray-800 mb-3">
            Développement Web
          </h3>
          <div className="bg-[#090674] w-12 h-1 mb-5 rounded-full"></div>
          <p className="text-gray-600 text-base lg:text-lg">
            Application web - Site vitrine - Site institutionnel - Blog -
            Boutique en ligne - E-commerce
          </p>
        </div>

        {/* Carte 2 */}
        <div
          className="bg-white shadow p-8 rounded-xl border border-gray-200 hover:border-[#090674] hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <FiSmartphone className="text-4xl text-[#090674] mb-4" />
          <h3 className="font-semibold text-xl lg:text-2xl text-gray-800 mb-3">
            Applications Mobiles
          </h3>
          <div className="bg-[#090674] w-12 h-1 mb-5 rounded-full"></div>
          <p className="text-gray-600 text-base lg:text-lg">
            Conception d'applications mobiles cross-platform (iOS & Android)
            avec React Native.
          </p>
        </div>

        {/* Carte 3 */}
        <div
          className="bg-white shadow p-8 rounded-xl border border-gray-200 hover:border-[#090674] hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <FiMonitor className="text-4xl text-[#090674] mb-4" />
          <h3 className="font-semibold text-xl lg:text-2xl text-gray-800 mb-3">
            Infographie
          </h3>
          <div className="bg-[#090674] w-12 h-1 mb-5 rounded-full"></div>
          <p className="text-gray-600 text-base lg:text-lg">
            Création d'affiches, logos, bannières et supports visuels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services