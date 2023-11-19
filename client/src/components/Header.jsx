import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css"

const Header = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const toggleDropDownHandler = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <Link to="/" className="link-logo">DnD Stories</Link>
                </div>
                <ul className="links">
                    <li className="nav-bar-li"><Link to="/" className="link">Home</Link></li>
                    <li className="nav-bar-li"><Link to="/about" className="link">About</Link></li>
                    <li className="nav-bar-li"><Link to="/scenarios" className="link">Scenarious</Link></li>
                    <li className="nav-bar-li"><Link to="/users/login" className="link">Login</Link></li>
                    <li className="nav-bar-li"><Link to="/users/register" className="link">Register</Link></li>
                    <li className="nav-bar-li"><Link to="/users/logout" className="link">Logout</Link></li>
                </ul>
                <div className="toggle-btn" onClick={toggleDropDownHandler}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className={`dropdown-menu ${isDropDownOpen ? "open" : ""}`}>
                <li className="nav-bar-li"><Link to="/" className="link">Home</Link></li>
                <li className="nav-bar-li"><Link to="/about" className="link">About</Link></li>
                <li className="nav-bar-li"><Link to="/scenarios" className="link">Scenarious</Link></li>
                <li className="nav-bar-li"><Link to="/users/login" className="link">Login</Link></li>
                <li className="nav-bar-li"><Link to="/users/register" className="link">Register</Link></li>
                <li className="nav-bar-li"><Link to="/users/logout" className="link">Logout</Link></li>
            </div>
        </header>
    )
}

export default Header;