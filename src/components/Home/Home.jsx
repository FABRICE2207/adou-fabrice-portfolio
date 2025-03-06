import React from 'react'
import bgimage from '../../assets/bgimage.png'

const Home = () => {
  return (
    // Image arriere plan
    <div id='home' className='bg-[#090674] lg:h-[600px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px]
    px-[20px] flex justify-center items-center bg-cover bg-center'
    style={{ backgroundImage: `url(${bgimage})` }}>

      {/* Texte au centre */}
      <div className='lg:h-[600px] flex flex-col justify-center items-center text-white'>
        <div data-aos="zoom-up" data-aos-delay="300" className='flex flex-col justify-center items-center'>
          <h1 className='text-[50px]'>Je suis</h1>
          <h1 className='text-[50px] font-extrabold text-center'>ADOU NIANGORAN FABRICE</h1>
        </div>
        <h1 className='text-[30px] text-center' data-aos="fade-up" data-aos-delay="700">Développeur Full-stack et Mobile</h1>
      </div>
    </div>
  )
}

export default Home