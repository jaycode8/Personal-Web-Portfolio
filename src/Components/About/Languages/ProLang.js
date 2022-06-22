import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './ProLang.css'
import ListofLanguages from "./Listlanguages";



const ProLang = (props ) => {
    const  {name, width, backgroundColor} = props
    return (
        <div className="languages">
            <h3>
                <span>Languages I speak</span>
                <FontAwesomeIcon icon={faCode}/>
            </h3>
            <div className="Bars">
                {
                    ListofLanguages.map((lang) =>(
                        <div key={lang.id}>
                            <label>{lang.name} {lang.width}</label>
                            <div className="langcontainer">
                                <div className="innerlang" style={lang}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProLang;