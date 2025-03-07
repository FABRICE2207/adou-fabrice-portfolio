import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { FiSmartphone } from 'react-icons/fi'
import { FaComputer } from 'react-icons/fa6'


const Services = () => {
  return (
    <div id="services" className='bg-[#d6d6dbb6] lg:w-full py-10 px-10'>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px] uppercase'>mes services</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
      </div>

      {/* Bloc des services */}
      <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
        py-10 gap-5' data-aos="fade-up" data-aos-delay="300">

          {/* Dévelloppement web */}
        <div className='bg-white w-full h-72 rounded-xl hover:border-[#090674] hover:border-2'>
          <div className='flex flex-col justify-center items-center mt-12'>
            {/* Icon  */}
            <BiWorld className='size-14 text-[#090674]' />
            <p className='font-semibold text-xl'>Dévelloppement web</p>
            <div className='bg-[#090674] w-[50px] h-[2px] mt-3'></div>
            <p className='mt-5 text-gray-500 text-[15px] mx-5 text-center'>Application web - Site vitrine - 
              Site institutionnel - Blog - Boutique en ligne - E-commerce</p>
          </div>
        </div>
          {/* Dévellopement d’application Mobile */}
        <div className='bg-white w-full h-72 rounded-xl hover:border-[#090674] hover:border-2'>
          <div className='flex flex-col justify-center items-center mt-12'>
            {/* Icon  */}
            <FiSmartphone className='size-14 text-[#090674]' />
            <p className='font-semibold text-xl text-center'>Dévellopement d’application mobile</p>
            <div className='bg-[#090674] w-[50px] h-[2px] mt-3'></div>
            <p className='mt-5 text-gray-500 text-[15px] mx-5 text-center'>Conception d’application mobile</p>
          </div>
        </div>
          {/* Infographie */}
        <div className='bg-white w-full h-72 rounded-xl hover:border-[#090674] hover:border-2'>
          <div className='flex flex-col justify-center items-center mt-12'>
            {/* Icon  */}
            <FaComputer className='size-14 text-[#090674]' />
            <p className='font-semibold text-xl'>Infographie</p>
            <div className='bg-[#090674] w-[50px] h-[2px] mt-3'></div>
            <p className='mt-5 text-gray-500 text-[15px] mx-5 text-center'>Conception d’affiche</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services