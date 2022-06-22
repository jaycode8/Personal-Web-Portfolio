import Education from './Education/Education';
import './FormalBio.css';
import ProLang from './Languages/ProLang';
import Projects from './Projects/Projects';

const FormalBio = () => {
    return (
        <div className='container-fluid px-0' id="resume">
            <div className='bioDetails'>
                <h1>My Formal Bio Details</h1>
                <div className='fineDetails'>
                    <Education/>
                    <ProLang/>
                    <Projects/>
                </div>
            </div>
        </div>
    );
};

export default FormalBio;