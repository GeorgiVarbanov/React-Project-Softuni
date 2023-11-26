import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    return (
        <form className="login-cover">
            <h1>Login</h1>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="login-btn">Login</button>

            <Link className="text" to="/users/register">Don't have an account?</Link>
        </form>
    )
}

export default Login;