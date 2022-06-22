import './Projects.css'
import Makazi from './Makazi';


const Projects = () => {
    return (
        <div>
            <div className='projects' id='maprojects'>
                <h3>Projects tackkled</h3>
                <div className='projectCards'>
                    {
                        Makazi.map(kazi =>
                            <a href={kazi.linkto} key={kazi.id} target='_blank' style={{backgroundImage: `url(${kazi.bg})`}}>
                                <div className='kamoja'>
                                    <div className='ray'>
                                        <h6>{kazi.tech}</h6>
                                    </div>
                                    <div className='date '>
                                        <div>{kazi.type}</div>
                                        <div>{kazi.year}</div>
                                    </div>
                                </div>
                                {/* <h5 className='title'>{kazi.title}</h5> */}
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;