import React from "react";
import { FaFacebook, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#090674] lg:w-full py-10 px-10 flex lg:flex-col flex-col gap-5 justify-center items-center">
      {/* Les icons facebook et linkedLin */}
      <div className="flex flex-row mt-5 gap-5">
        <div className="border-white rounded-full flex justify-center items-center hover:bg-white border-2 w-12 h-12 text-white">
          {/* Lien facebook */}
          <a href="https://www.facebook.com/profile.php?id=100093082975492" target="_blank">
            <FaFacebook className="size-7 text-white hover:text-[#090674]" />
          </a>
        </div>
        <div className="border-white rounded-full flex justify-center items-center hover:bg-white border-2 w-12 h-12 text-white">
          {/* Lien Linkedin */}
          <a href="https://www.linkedin.com/in/niangoran-fabrice-adou/" target="_blank">
            <FaLinkedin className="size-7 text-white hover:text-[#090674]" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-white">2025 © Développé par Adou Fabrice - Dévelppeur Full-Stack.</p>
      </div>

      {/* scroll buton haut */}
      <div id="icon-box" className='bg-white text-black p-3 rounded-full 
      hover:[#090674] hover:text-[#090674] cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
         <Link to='home' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
