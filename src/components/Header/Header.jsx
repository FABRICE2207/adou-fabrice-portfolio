import React ,{ useState } from 'react'
import { FaXmark, FaBars,  FaArrowUp } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Clique sur la barre du menue pour ouvrier
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // Le menu = les onglets
  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'A propos', path: 'about'
    },
    {
      link: 'Competences', path: 'skills'
    },
    {
      link: 'Experience', path: 'experience'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Contact', path: 'contacts'
    }
  ]

  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16
    px-6 py-4 sticky top-0 z-50'>
      {/* NOM ENTREPRISE */}
      <h1 className='text-[#090674] font-bold md:text-4xl text-3xl font-rubik'> ADOU FABRICE
      </h1>

      {/* Menu */}
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {
          navItems.map(( {link, path} ) => (
            <Link key={path} className='text-black uppercase font-semibold cursor-pointer p-1
               hover:border-[#090674] hover:border-b-4 hover:text-black text-[15px]' to={path}
               spy={true} offset={-100} smooth={true}>{link}</Link>
          ))
        }
      </ul>

      {/* debut du menu ici */}
      <div className='flex justify-betwenn items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {
            // Si le menu est ouvert, affiche Icon FaXmark sinon FarBars
            isMenuOpen ? <FaXmark className='text-[#090674] text-3xl cursor-pointer'/>
            : <FaBars className='text-[#090674] text-3xl cursor-pointer'/>
          }
        </div>
      </div>
      
      {/* affiche du menu format telephone */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-white 
      p-4 absolute top-[70px] left-0`} onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {
          navItems.map(( {link, path} ) => (
            <Link key={path} className='text-[#090674] uppercase font-semibold cursor-pointer p-2
              rounded-lg  hover:text-[#090674] w-full text-center' to={path}
               spy={true} offset={-100} smooth={true}>{link}</Link>
          ))
        }
          </ul>
      </div>

    </nav>
  )
}

export default Header