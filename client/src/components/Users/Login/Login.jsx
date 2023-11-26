import { Link } from "react-router-dom";
import "./Login.css"

import useForm from "../../../hooks/useForm.js";

const LoginFormKeys = {
    EMAIL: "email",
    PASSWORD: "password",
}


const Login = ({
    loginSubmitHandler
}) => {
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.EMAIL]: '',
        [LoginFormKeys.PASSWORD]: '',
    });

    return (
        <form className="login-cover" onSubmit={onSubmit}>
            <h1>Login</h1>
            <input type="email" id="email" name={LoginFormKeys.EMAIL} placeholder="Email" onChange={onChange} value={values[LoginFormKeys.EMAIL]} />
            <input type="password" id="password" name={LoginFormKeys.PASSWORD} placeholder="Password" onChange={onChange} value={values[LoginFormKeys.PASSWORD]} />

            <button className="login-btn">Login</button>

            <Link className="text" to="/users/register">Don't have an account?</Link>
        </form>
    )
}

export default Login;