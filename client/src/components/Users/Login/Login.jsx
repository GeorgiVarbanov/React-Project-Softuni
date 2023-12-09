import { Link } from "react-router-dom";
import "./Login.css"

import useForm from "../../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext.jsx";

const LoginFormKeys = {
    EMAIL: "email",
    PASSWORD: "password",
}


const Login = () => {

    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit , errors} = useForm(loginSubmitHandler, {
        [LoginFormKeys.EMAIL]: '',
        [LoginFormKeys.PASSWORD]: '',
    });

    return (
        <form className="login-cover" onSubmit={onSubmit}>
            <h1 className="login-h1">Login</h1>
            <input type="email" id="email" name={LoginFormKeys.EMAIL} placeholder="Email" onChange={onChange} value={values[LoginFormKeys.EMAIL]} />
            {errors.email && <span>{errors.email}</span>}
            <input type="password" id="password" name={LoginFormKeys.PASSWORD} placeholder="Password" onChange={onChange} value={values[LoginFormKeys.PASSWORD]} />
            {errors.password && <span>{errors.password}</span>}
            
            <button className="login-btn">Login</button>
            <Link className="text" to="/users/register">Don't have an account?</Link>
        </form>
    )
}

export default Login;