import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./Header.css"

import AuthContext from "../../contexts/authContext.jsx";

const Header = () => {
    const {
        isAuthenticated
    } = useContext(AuthContext);
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
                    <li className="nav-bar-li"><Link to="/scenarios" className="link">Scenarios</Link></li>
                    {isAuthenticated && (
                        <>
                            <li className="nav-bar-li"><Link to="/scenarios/create" className="link">Create Scenario</Link></li>
                            <li className="nav-bar-li"><Link to="/users/profile" className="link">Profile</Link></li>
                            <li className="nav-bar-li"><Link to="/users/logout" className="link">Logout</Link></li>
                        </>
                    )}

                    {!isAuthenticated && (
                        <>
                            <li className="nav-bar-li"><Link to="/users/login" className="link">Login</Link></li>
                            <li className="nav-bar-li"><Link to="/users/register" className="link">Register</Link></li>
                        </>
                    )}

                </ul>
                <div className="toggle-btn" onClick={toggleDropDownHandler}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className={`dropdown-menu ${isDropDownOpen ? "open" : ""}`}>
                <li className="nav-bar-li"><Link to="/" className="link">Home</Link></li>
                <li className="nav-bar-li"><Link to="/about" className="link">About</Link></li>
                <li className="nav-bar-li"><Link to="/scenarios" className="link">Scenarious</Link></li>
                {isAuthenticated && (
                    <>
                        <li className="nav-bar-li"><Link to="/scenarios/create" className="link">Create Scenario</Link></li>
                        <li className="nav-bar-li"><Link to="/users/profile" className="link">Profile</Link></li>
                        <li className="nav-bar-li"><Link to="/users/logout" className="link">Logout</Link></li>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <li className="nav-bar-li"><Link to="/users/login" className="link">Login</Link></li>
                        <li className="nav-bar-li"><Link to="/users/register" className="link">Register</Link></li>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header;