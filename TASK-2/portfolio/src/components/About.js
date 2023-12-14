import profile from '../images/profile.JPG'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <>
        <section className='App-header' id="about">
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-8">
                        <h3 className='greet mb-3'>Hi all I'm Madhu <FontAwesomeIcon icon={faHandSparkles} /></h3>
                        <p className='bio'>A passionate Full Stack Web Developer having an experience of building Web and Software Applications with JavaScript/ReactJs/Nodejs and some other cool libraries and frameworks.</p>
                        <h6><a href="https://github.com/Madhusr162" target='/'><FontAwesomeIcon className='icon me-3' icon={faGithub} /></a> <a href="https://www.linkedin.com/in/madhubalasr-4369a9a6" target="/"><FontAwesomeIcon className='icon me-3' icon={faLinkedin} /> </a></h6>
                    </div>
                    <div className="col-4">
                        <img src={profile} alt="profile pic" className='img-fluid'/>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default About;