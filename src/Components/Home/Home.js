import './Home.css'
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faWhatsapp, faInstagram, faLinkedin, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect} from 'react'
import { TweenMax, Power4, Elastic, Bounce, Expo} from 'gsap'
import { SlowMo, ScrollTrigger } from 'gsap/all'




const Home = () => {
    let home = useRef(null)
    let welkamtext = useRef(null)
    let awesometext = useRef(null)
    let buttonbox = useRef(null)
    let image = useRef(null)
    let icons = useRef(null)


    const Mee = () =>{
        let time = new Date().getHours()
        if (time >= 5 && time < 12) {
            return('Good Morning')
        } else if (time >=12 && time < 17 ) {
            return('Good Afternoon ☀️')
        } else {
            return('Good Evening')
        }
    }
    return (
        <div 
            className="container-fluid vh-100 bag" 
            id='home' 
            ref={el => home = el}>
            <div className="row justify-center vh-100">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center details">
                    <div 
                        ref={el => welkamtext = el}  
                        className='text-white welkam'>
                        <h1 className='greetings'><Mee/></h1>
                        <h2 className='jay'>I am JayTech</h2>
                    </div>
                    <h3 
                        ref={el => awesometext = el}
                        className='text-white textloop'>
                        <Typical
                            loop={Infinity}
                            steps={[
                                'Hello...',
                                2000,
                                'I am basically........',
                                2000,
                                'A programmer',
                                2000,
                                'Web Designer.... 🌐',
                                2000,
                                'And a Developer 🌍',
                                3000
                            ]}
                        />
                    </h3>
                    <div 
                        className='homebtn' 
                        ref={el => buttonbox = el}>
                            <a href='#contacts' id='btns'><button className='one'>Hire Me</button></a>
                            <a href='#aboutjay' id='btns'><button className='two'>Resume</button></a>
                    </div>
                </div>
                <div 
                    ref={el => image =el}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center image">
                    <div className='jaypic img-fluid'>
                        <div className='image img-fluid'></div>
                    </div>
                    <div 
                        ref={el => icons = el}
                        className='socials d-flex flex-column'>
                            <a href='https://m.facebook.com/james.mumo.9803?ref=bookmarks' target='_blank'><FontAwesomeIcon icon={faFacebookF} className="my-3 fs-3"></FontAwesomeIcon></a>
                            <a href='https://wa.me/ +254 111482180' target='_blank'><FontAwesomeIcon icon={faWhatsapp} className="whatsapp my-3 fs-3"></FontAwesomeIcon></a>
                            <a href='https://www.instagram.com/jaymoh__254/' target='_blank'><FontAwesomeIcon icon={faInstagram} className="my-3 fs-3"></FontAwesomeIcon></a>
                            <a href='https://www.linkedin.com/mwlite/in/james-mumo-547b91223' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='my-3 fs-3'></FontAwesomeIcon></a>
                            <a href='https://github.com/jaycode8' target='_blank'><FontAwesomeIcon icon={faGithub} className='my-3 fs-3'></FontAwesomeIcon></a>
                            <a href='tel:+254 111482180'><FontAwesomeIcon icon={faPhoneAlt} className="my-3 fs-3"></FontAwesomeIcon></a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Home;