import React from 'react'
import imageadou from '../../assets/image_adou.png'


const About = () => {
  return (
    <div id='about' className='lg:w-full px-5 py-[40px] '>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px]'>A PROPOS DE MOI</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
      </div>

      <div className='w-full flex lg:flex-row flex-col justify-between items-center px-10 py-10 gap-5'>
        <div data-aos="fade-right" data-aos-delay="300">
          <img src={imageadou} alt="" className='w-full'/>
          <div className='bg-[#090674] w-full h-[10px]'></div>
        </div>
        <div className='w-full' data-aos="fade-left" data-aos-delay="1000">
          <h1 className='text-gray-600 text-2xl'>Jeune passionnée et titurlaire d'un Brévet Technicien Supérieur (BTS) option Informatique Développeur d'Application. <br />
          J'ai trois (3) années d'expérience et je mets mes compétences à votre service afin de résoudre vos problèmes en solution informatique efficace et fiable</h1>
        </div>
      </div>
    </div>
  )
}

export default About