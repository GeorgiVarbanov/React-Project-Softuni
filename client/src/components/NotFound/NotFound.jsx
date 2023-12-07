import { Link } from "react-router-dom";
import "./NotFound.css"


const NotFound = () => {
    return (
        <div className="container-404">
            <h2>Oops! Page not found.</h2>
            <h1>404</h1>
            <p>We have no memory of this place.</p>
            <Link to={"/"} className="home-btn-404">Go back home</Link>
        </div>
    )
}

export default NotFound;