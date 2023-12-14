import './Skills.css'
import html from '../images/html.png'
import css from '../images/css.png'
import bootstrap from '../images/bootstrap.jpg'
import javascript from'../images/javascript.jpg'
import react from '../images/react.png'
import nodejs from '../images/nodejs.png'
import resume from '../images/resume.pdf'

const Resume = () => {
    return (
        <>
            <section className="App-header" id="resume">
            <h1 style={{fontFamily: 'Afacad, sans-serif'}}>My skills</h1>
                <div className="row mt-5">
                    <div className='col ms-3'>
                        <img src={html} alt="html" className='skills'/>
                    </div>
                    <div className='col'>
                        <img src={css} alt="css" className='skills'/>
                    </div>
                    <div className='col'>
                        <img src={bootstrap} alt="bootstrap" className='skills'/>
                    </div>
                    <div className='col'>
                        <img src={javascript} alt="javascript" className='skills'/>
                    </div>
                    <div className='col'>
                        <img src={react} alt="react" className='skills'/>
                    </div>
                    <div className='col mb-5'>
                        <img src={nodejs} alt="nodejs" className='skills'/>
                    </div>

                </div>
                <h3 className='ms-3' style={{fontFamily: 'Afacad, sans-serif'}}>To know more about me, have a look at my resume:</h3><br/>
                <a href={resume} download="Resume">
                <button type="button" className="btn btn-info ms-3" style={{fontFamily: 'Afacad, sans-serif', fontSize:"22px"}}>Download Resume</button></a>

            </section>
        </>
    )
}

export default Resume;