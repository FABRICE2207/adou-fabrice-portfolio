import React,  {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Exprience from './components/Experience/Exprience';
import Services from './components/Services/Services';

const App = () => {

  // Chargement de l'animation
  useEffect(() => {
    Aos.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
  )
  })

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Exprience />
      <Services />
      
    </>
  )
}

export default App