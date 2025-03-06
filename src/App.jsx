import React,  {useEffect} from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Aos from 'aos'
import "aos/dist/aos.css";
import About from './components/About/About';

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
    </>
  )
}

export default App