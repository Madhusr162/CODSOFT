import './Skills.css'
import skill from '../images/skill.jpg'
const Skills = () => {
    return (
        <>
            <section className="App-header" id="skills">


                <div className="skill mt-5">
                    <div className='row'>
                        <div className='col-6'>
                            <h1>Proficiency</h1>

                            <li><h3>Frontend/Design</h3>
                                <span className="bar"><span className="frontend"></span></span>
                            </li>
                            <li><h3>Programming</h3>
                                <span className="bar"><span className="program"></span></span>
                            </li>
                            <li><h3>Backend</h3>
                                <span className="bar"><span className="backend"></span></span>
                            </li>
                        </div>
                        <div className='col-6' style={{ justifyContent: "center" }}>
                            <img src={skill} className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills;