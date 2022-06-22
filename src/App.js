import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/Home.js'
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import FormalBio from './Components/About/FormalBio';
import Footer from './Components/Footer/Footer';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/src/all';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  let tl = new TimelineLite({ delay: 0.3 })
  useEffect(() => {
    tl.from('.jaypic', 2, {
         y: 50, 
         opacity: 0, 
         ease: Power3.easeOut, 
         delay: 0.2 
        }, 'Start')
    tl.staggerFrom('.welkam', 3, { 
        y: 50, 
        ease: Power3.easeOut, 
        opacity: 0 
      }, 0.15, 'Start')
      .from('.textloop', 3, { 
          opacity: 0, 
          ease: Power3.easeOut, 
          delay: 0.2 
        })
      .from('.homebtn', 2, { 
          y: 20, 
          opacity: 0, 
          ease: Power3.easeOut, 
          delay: 0.8 
        }, 'Start')
      .from('.socials', 3, {
           opacity: 0, 
           scale: 0.2 
          }, 'Start')
    // gsap.from('.aboutpage',{
    //   duration:3,
    //   y: '100',
    //   ease: 'ease-in',
    //   opacity:0,
    //   scrollTrigger:{
    //       trigger: '.Cards',
    //       start: 'top',
    //       end:'+=300px',
    //       markers: true,
    //       toggleActions: 'restart complete reverse reset'
    //   }
    // })
    }, [])
   
  return (
    <div className='container-fluid main'>
      <div className='row'>
        <NavBar />
        <Home />
        <About />
        <FormalBio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;