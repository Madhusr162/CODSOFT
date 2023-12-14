import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logo.jpg'
import './About.css'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid navbar" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={logo} className="img-fluid" alt="mb logo" height="100px" width="200px" />
                <h1 className="me-5 name">MADHUBALA S R</h1>
                <ul className="nav nav-underline" style={{ fontWeight:"bold", fontSize:"20px"}}>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/#about" style={{color: "black"}} >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#skills" style={{color: "black"}}>Proficiency</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#projects" style={{color: "black"}}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#resume" style={{color: "black"}}>Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#contact" style={{color: "black"}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Navbar;