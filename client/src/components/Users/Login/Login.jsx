import { Link } from "react-router-dom";
import "./Login.css"

import useForm from "../../../hooks/useForm.js";


const Login = () => {
    const {values, onChange, onSubmit} = useForm({
        email: "",
        password: "",
    });

    return (
        <form className="login-cover" onSubmit={onSubmit}>
            <h1>Login</h1>
            <input type="email" id="email" name="email" placeholder="Email" onChange={onChange} value={values.email}/>
            <input type="password" id="password" name="password" placeholder="Password" onChange={onChange} value={values.password}/>

            <button className="login-btn">Login</button>

            <Link className="text" to="/users/register">Don't have an account?</Link>
        </form>
    )
}

export default Login;