import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect } from 'react';
import { TweenMax, Power4, Elastic, Bounce, Expo, Back} from 'gsap'

const NavBar = () => {
    let nav = useRef(null)

    useEffect( () =>{
        TweenMax.from( nav, 2, {
            opacity:0,
            y:-30,
            ease:Back,
            delay:1
        })
    },[])

    const navbarShow = () =>{
        document.getElementById('nav').classList.toggle('navshow')
    }
    const navlist = [
        {
            name:'Home',
            linkto:'#home'
        },
        {
            name:'About',
            linkto:'#aboutjay'
        },
        {
            name:'Education',
            linkto:'#resume'
        },
        {
            name:'Projects',
            linkto:'#maprojects'
        },
        {
            name:'mail',
            linkto:'#contacts'
        },
    ]
    return (
        <div>
            <div 
                ref={el => nav = el}
                className="nav-bar" 
                id='navBar'>
                <div className="logo">
                    <h1>Jay<span>TECH</span></h1>
                </div>
                <div className="nav">
                    <nav id='nav'>
                        <ul> 
                            {/* <a href='#home' onClick={navbarShow}><li>Home</li></a>
                            <a href='#aboutjay' onClick={navbarShow}><li>About Me</li></a>
                            <a href='#resume' onClick={navbarShow}><li>Resume</li></a>
                            <a href='#contacts' onClick={navbarShow}><li>Contacts</li></a> */}
                            {
                                navlist.map((navs,index)=>(
                                    <a href={navs.linkto} onClick={navbarShow} key={index}><li>{navs.name}</li></a>
                                ))
                            }
                        </ul>
                        <FontAwesomeIcon icon={faTimes} id='navbtn2' onClick={navbarShow}></FontAwesomeIcon>
                    </nav>
                    <FontAwesomeIcon icon={faBars} id='navbtn' onClick={navbarShow}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default NavBar;