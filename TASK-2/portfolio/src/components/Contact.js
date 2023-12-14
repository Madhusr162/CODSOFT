import reachout from '../images/reach out.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
        <>
            <section className="App-header" id="contact" >
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="mt-5 mb-5 contact" style={{fontFamily: 'Afacad, sans-serif'}}> React out to me!</h1>
                            <h3 className="mt-3 contact" style={{fontFamily: 'Afacad, sans-serif'}}><b>Mail me:</b> madhusr818@gmail.com</h3>
                            <h3 className="mt-3 contact" style={{fontFamily: 'Afacad, sans-serif'}}><b>Reach me:</b> 5B, 4th street srinivasa nagar, Thiruvanaikovil, Tiruchirapalli, Tamilnadu - 620005</h3>
                            <h3 className="mt-3 mb-3 contact" style={{fontFamily: 'Afacad, sans-serif'}}><b>Contact me:</b> +91-9629531833</h3>
                            <h6 className='mb-5'> <a href="https://www.facebook.com/madhu.bala.16" target="/"><FontAwesomeIcon icon={faSquareFacebook} className='icon me-3'/> </a><a href="https://www.instagram.com/madhubala_sr/" target="/"><FontAwesomeIcon icon={faSquareInstagram} className='icon me-3' /></a></h6>
                        </div>
                        <div className="col-4">
                            <img src={reachout} alt="reach out to me" height="400px" width="550px" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;