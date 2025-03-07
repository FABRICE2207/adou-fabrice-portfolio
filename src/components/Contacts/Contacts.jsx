import React from 'react'
import { FiSmartphone } from 'react-icons/fi'
import { BiEnvelope } from 'react-icons/bi'
import { MdPlace } from 'react-icons/md'

const Contacts = () => {
  return (
    <div id="contacts" className='lg:w-full px-5 py-[40px]'>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px]'>CONTACTEZ-NOUS</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
        <p className='text-gray-500 text-xl'>Si vous avez un besoin d'un projet.</p>
      </div>
      <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between 
        py-10 gap-5'>
        <div className='w-full py-5 flex flex-col gap-10'>
          <div className='flex flex-row gap-5 justify-start items-start'>
            <div>
               <FiSmartphone className='size-10 text-[#090674]' />
            </div>
            <div className='text-gray-500 text-xl mt-1'>(+225) 0778037784</div>
          </div>
          <div className='flex flex-row gap-5 justify-start items-start'>
            <div>
              <BiEnvelope className='size-10 text-[#090674]' />
            </div>
            <div className='text-gray-500 text-xl mt-1'>adoufabio2207@gmail.com</div>
          </div>
          <div className='flex flex-row gap-5 justify-start items-start'>
            <div>
              <MdPlace className='size-10 text-[#090674]' />
            </div>
            <div className='text-gray-500 text-xl mt-2'>Côte d'Ivoire, Abidjan, Yopougon</div>
          </div>
        </div>
        <div className='flex flex-col gap-10 w-full'>
          <form action="">
            
              <input type="text" placeholder='Nom et prenom complet' className="px-6 py-3 my-2 border-[1px] 
            text-black rounded-lg w-full focus:outline-[#090674] focus:outline"/>
              <input type="email" placeholder='Email' className="px-6 py-3 my-2 border-[1px] 
            text-black rounded-lg w-full focus:outline-[#090674] focus:outline"/>
              <textarea name="" id="" rows="4" placeholder='Message' className="px-6 py-3 my-2 border-[1px] 
            text-black rounded-lg w-full focus:outline-[#090674] focus:outline"></textarea>
              
                <button type='submit' className='w-full bg-[#090674] text-white py-3 rounded-lg
                hover:bg-white uppercase font-semibold hover:text-[#090674] hover:outline-[#090674] hover:outline-none'>Envoyer </button>
              
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts