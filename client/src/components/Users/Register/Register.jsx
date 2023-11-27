import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Register.css"

import useForm from "../../../hooks/useForm.js";
import AuthContext from "../../../contexts/authContext.js";

const RegisterFormKeys = {
    USERNAME: "username",
    EMAIL: "email",
    PASSWORD: "password",
    REPASS: "rePass",
}


const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.USERNAME]: "",
        [RegisterFormKeys.EMAIL]: "",
        [RegisterFormKeys.PASSWORD]: "",
        [RegisterFormKeys.REPASS]: "",
    });

    return (
        <form className="register-cover" onSubmit={onSubmit}>
            <h1 className="register-h1">Register</h1>
            <input
                type="email"
                id="email"
                name={RegisterFormKeys.USERNAME}
                placeholder="Username"
                onChange={onChange}
                value={values[RegisterFormKeys.USERNAME]}
            />
            <input
                type="email"
                id="email"
                name={RegisterFormKeys.EMAIL}
                placeholder="Email"
                onChange={onChange}
                value={values[RegisterFormKeys.EMAIL]}
            />
            <input
                type="password"
                id="password"
                name={RegisterFormKeys.PASSWORD}
                placeholder="Password"
                onChange={onChange}
                value={values[RegisterFormKeys.PASSWORD]}
            />
            <input
                type="rePass"
                id="rePass"
                name={RegisterFormKeys.REPASS}
                placeholder="Confirm password"
                onChange={onChange}
                value={values[RegisterFormKeys.REPASS]}
            />

            <button className="register-btn" type="submit">Register</button>

            <Link className="text" to="/users/login">Already have an account?</Link>
        </form>
    )
}

export default Register;