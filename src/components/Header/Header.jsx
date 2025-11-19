import React, { useState, useEffect } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: 'Accueil', path: 'home' },
    { link: 'Expériences', path: 'experience' },
    { link: 'Projets', path: 'projects' },
    { link: 'Compétences', path: 'skills' },
    { link: 'Services', path: 'services' },
    { link: 'Contact', path: 'contacts' }
  ];

  return (
    <nav className={`w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#090674] text-white shadow-md' : 'bg-white text-[#090674]'}`}>
      {/* Logo/Nom */}
      <Link 
        to="home" 
        spy={true} 
        smooth={true} 
        className={`font-bold md:text-4xl text-3xl font-rubik cursor-pointer hover:opacity-80 transition-opacity ${isScrolled ? 'text-white' : 'text-[#090674]'}`}
      >
        ADOU FABRICE
      </Link>

      {/* Menu Desktop */}
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({link, path}) => (
          <Link 
            key={path} 
            className={`uppercase font-semibold cursor-pointer p-1 transition-colors duration-200 relative group ${isScrolled ? 'text-gray-200 hover:text-white' : 'text-[#090674] hover:text-[#090674]'}`}
            to={path}
            spy={true} 
            offset={-100} 
            smooth={true}
            activeClass={isScrolled ? 'text-white font-bold' : 'text-[#090674] font-bold'}
          >
            {link}
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-white' : 'bg-[#090674]'}`}></span>
          </Link>
        ))}
      </ul>

      {/* Bouton Menu Mobile */}
      <div className='lg:hidden' onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className={`text-3xl cursor-pointer transition-transform hover:rotate-90 duration-300 ${isScrolled ? 'text-white' : 'text-[#090674]'}`}/>
        ) : (
          <FaBars className={`text-3xl cursor-pointer transition-transform hover:rotate-180 duration-300 ${isScrolled ? 'text-white' : 'text-[#090674]'}`}/>
        )}
      </div>
      
      {/* Menu Mobile */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full ${isScrolled ? 'bg-[#090674]' : 'bg-white'} p-4 absolute top-full left-0 shadow-lg animate-fadeIn`}>
        <ul className='flex flex-col justify-center items-center gap-3 w-full'>
          {navItems.map(({link, path}) => (
            <Link 
              key={path} 
              className={`uppercase font-semibold cursor-pointer p-3 rounded-lg w-full text-center transition-colors duration-200 ${isScrolled ? 'text-white hover:bg-white hover:text-[#090674]' : 'text-[#090674] hover:bg-[#090674] hover:text-white'}`}
              to={path}
              spy={true} 
              offset={-100} 
              smooth={true}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;