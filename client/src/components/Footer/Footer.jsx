import { Link } from "react-router-dom";
import "./Footer.css"

//FIX CSS AND LINKS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Useful links</h4>
                        <ul>
                            <li><Link to="/about">about us</Link></li>
                            <li><a href="https://www.dndbeyond.com/sources/basic-rules">Basic Rules</a></li>
                            <li><a href="https://www.dndbeyond.com/sources/dmg">Dungeon master guide</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/georgi.vurbanov.3/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/gvurbanov/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/георги-върбанов-368977193"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;