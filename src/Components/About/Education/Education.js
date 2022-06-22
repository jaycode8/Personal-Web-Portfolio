import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"; 
import './Education.css'
import Schools from "./SchoolLists";

const Education = () => {
    return (
        <div className="edu">
            <h3>
                <span>Education</span>
                <FontAwesomeIcon icon={faGraduationCap}/>
            </h3>
            <div className='maincard'>
                {
                    Schools.map((sc) =>(
                        <div className="educard" key={sc.id}>
                            <a href={sc.linkto} target='_blank'>
                                <div className='img'>
                                    <img src={sc.img} alt={sc.alt}/>
                                </div>
                                <div className='schooldetails'>
                                    <h5>{sc.name}</h5>
                                    <p className="program">{sc.program}</p>
                                    <p className="studyTime">{sc.time}</p>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Education;