import React from 'react'
import imageadou from '../../assets/image_adou.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'



const About = () => {
  return (
    <div id='about' className='lg:w-full px-5 py-[40px] '>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px]'>A PROPOS DE MOI</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
      </div>

        <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
        py-10 gap-5'>
          <div className='w-full'>
            <img src={imageadou} alt="" />
            <div className='bg-[#090674] w-full h-[10px]'></div>
          </div>
          <div className='w-full'>
            <div>
              <p className='text-gray-600 text-xl mt-4'>
                Jeune passionnée et titurlaire d'un Brévet Technicien Supérieur (BTS) option Informatique Développeur d'Application.
              </p>
              <p className='text-gray-600 text-xl mt-4'>
                J'ai trois (3) années d'expérience et je mets mes compétences à votre service afin de résoudre vos problèmes en solution informatique efficace et fiable
              </p>
            </div>
            <div className='flex flex-row mt-5 gap-5'>
              <div className='border-gray-500 rounded-full flex justify-center items-center hover:border-[#090674] border-2 w-12 h-12 text-white'>
                <FaFacebook className='size-7 text-gray-500 hover:text-[#090674]'/>
              </div>
              <div className='border-gray-500 rounded-full flex justify-center items-center hover:border-[#090674] border-2 w-12 h-12 text-white'>
                <FaLinkedin className='size-7 text-gray-500 hover:text-[#090674]'/>
              </div>
            
            </div>
          </div>
        </div>

    </div>
  )
}

export default About