import { Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
    return(
        <form className="register-cover">
            <h1 className="register">Register</h1>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="rePass" placeholder="Confirm password" />

            <button className="register-btn" type="submit">Register</button>

            <Link className="text" to="/users/login">Already have an account?</Link>
        </form>
    )
}

export default Register;