import './About.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faArrowDown} from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const serv = [
        'Front End web Design & Development',
        'Web Design consultation',
        'Basic Python Programming',
        'OS Installation',
        'Machine Learning'
    ]

    return (
        <div className='container-fluid vh-100 aboutpage' id='aboutjay'>
            <div className='Cards'>
                <h1>About Jaymoh</h1>
                <div className='card'>
                    <div className='fullimg'></div>
                    <div className='abouttext'>
                        <div>
                            <p>
                                Hi, am James Mumo alias JayTech, a Freelancer based in Nairobi, Kenya.
                            </p>
                        </div>
                        <div className='servlist'>
                            <h3>Services i do offer</h3>
                            {
                                serv.map( item =>(
                                    <ul key={item}>
                                        <li>| {item}.</li>
                                    </ul>
                                ))
                            }
                        </div>
                        <div className='homebtn'>
                            <a href='#contacts'><button className='one'>Hire Me</button></a>
                            <a href='resumeB.pdf' download='jayMoh Resume'><button className='two'>Resume <FontAwesomeIcon icon={faArrowDown} className='mx-3'/></button></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;