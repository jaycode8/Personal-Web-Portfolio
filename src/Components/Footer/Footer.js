import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer d-flex flex-column'>
            <div  className='socials d-flex flex-row'>
                <a href='https://www.linkedin.com/mwlite/in/james-mumo-547b91223' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='my-3 fs-3'></FontAwesomeIcon></a>
                <a href='https://github.com/jaycode8' target='_blank'><FontAwesomeIcon icon={faGithub} className='my-3 fs-3'></FontAwesomeIcon></a>
            </div>
            <div className='copyright'>
                <span>&copy;<small>  {new Date().getFullYear()}</small> <a href='#home'> JayTech </a> All Rights Reserved.</span>
            </div>
        </div>
    );
};

export default Footer;