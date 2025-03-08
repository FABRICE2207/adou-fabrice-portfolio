import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { FiSmartphone } from 'react-icons/fi'
import { BiEnvelope } from 'react-icons/bi'
import { MdPlace } from 'react-icons/md'
import Swal from 'sweetalert2'

const Contacts = () => {

  // EmailJs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_cf3di2v', 'template_xnaljmd', form.current, {
        publicKey: 'I_0Q9W_cMjXVJD3ls',
      })
      .then(
        () => {
          // Message de réussite alerte
          Swal.fire({
            title: "Succès",
            text: "Votre message a été envoyé !",
            icon: "success"
      });
      // Suppression des champs du formulaire
      form.current.reset();
        },
        (error) => {
          // Message d'échec alerte
          Swal.fire({
            title: "Échec",
            text: "Une erreur s'est produite. Veuillez réessayer.",
            icon: "error"
        });
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div id="contacts" className='lg:w-full px-5 py-[40px]'>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px]'>CONTACTEZ-NOUS</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
        <p className='text-gray-500 text-xl'>Si vous avez un besoin d'un projet.</p>
      </div>
      <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between 
        py-10 gap-5'>
        <div className='w-[60%] md:w-full py-5 flex flex-col gap-10'>
          <div className='flex flex-row gap-5 justify-start items-start lg:flex lg:flex-row lg:justify-start lg:items-start 
          md:justify-center md:items-center md:flex md:flex-col
           '>
            <div>
               <FiSmartphone className='size-10 text-[#090674]' />
            </div>
            <div className='text-gray-500 text-xl mt-1'>(+225) 0778037784</div>
          </div>
          <div className='flex flex-row gap-5 justify-start items-start lg:flex lg:flex-row lg:justify-start lg:items-start 
          md:justify-center md:items-center md:flex md:flex-col'>
            <div>
              <BiEnvelope className='size-10 text-[#090674]' />
            </div>
            <div className='text-gray-500 text-xl mt-1'>adoufabio2207@gmail.com</div>
          </div>
          <div className='flex flex-row gap-5 justify-start items-start lg:flex lg:flex-row lg:justify-start lg:items-start 
          md:justify-center md:items-center md:flex md:flex-col'>
            <div>
              <MdPlace className='size-10 text-[#090674]' />
            </div>
            <div className='text-gray-500 text-xl mt-2'>Côte d'Ivoire, Abidjan, Yopougon</div>
          </div>
        </div>

        <div className='flex flex-col gap-10 w-full'>
          <form ref={form} onSubmit={sendEmail}>
            
              <div className='flex lg:flex-row flex-col gap-4'>
                <div className='w-full'>
                  <input type="text" name='to_name' placeholder='Nom et prenom complet' className="px-6 py-3 my-2 border-[1px] 
                  text-black rounded-lg w-full focus:outline-[#090674] focus:outline" required />
                </div>
                <div className='w-full'>
                  <input type="text" name='to_name' placeholder='Contact WhatsApp' className="px-6 py-3 my-2 border-[1px] 
                  text-black rounded-lg w-full focus:outline-[#090674] focus:outline" required />
                </div>
              </div>

              <input type="email" name='from_name' placeholder='Email' className="px-6 py-3 my-2 border-[1px] 
            text-black rounded-lg w-full focus:outline-[#090674] focus:outline" required />

              <textarea name="message" id=""  rows="4" placeholder='Message' className="px-6 py-3 my-2 border-[1px] 
            text-black rounded-lg w-full focus:outline-[#090674] focus:outline" required ></textarea>
              
                <button type="submit" className='w-full bg-[#090674] text-white py-3 rounded-lg
                hover:bg-white uppercase font-semibold hover:text-[#090674] hover:outline-[#090674] hover:outline-none'>Envoyer </button>
              
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts