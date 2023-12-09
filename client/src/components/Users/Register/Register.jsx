import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Register.css"

import useForm from "../../../hooks/useForm.js";
import AuthContext from "../../../contexts/authContext.jsx";

const RegisterFormKeys = {
    USERNAME: "username",
    EMAIL: "email",
    PASSWORD: "password",
    REPASS: "rePass",
}


const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit , errors} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.USERNAME]: "",
        [RegisterFormKeys.EMAIL]: "",
        [RegisterFormKeys.PASSWORD]: "",
        [RegisterFormKeys.REPASS]: "",
    });

    return (
        <form className="register-cover" onSubmit={onSubmit}>
            <h1 className="register-h1">Register</h1>
            <input
                type="username"
                id="username"
                name={RegisterFormKeys.USERNAME}
                placeholder="Username"
                onChange={onChange}
                value={values[RegisterFormKeys.USERNAME]}
            />
            {errors.username && <span>{errors.username}</span>}
            <input
                type="email"
                id="email"
                name={RegisterFormKeys.EMAIL}
                placeholder="Email"
                onChange={onChange}
                value={values[RegisterFormKeys.EMAIL]}
            />
            {errors.email && <span>{errors.email}</span>}
            <input
                type="password"
                id="password"
                name={RegisterFormKeys.PASSWORD}
                placeholder="Password"
                onChange={onChange}
                value={values[RegisterFormKeys.PASSWORD]}
            />
            {errors.password && <span>{errors.password}</span>}
            <input
                type="rePass"
                id="rePass"
                name={RegisterFormKeys.REPASS}
                placeholder="Confirm password"
                onChange={onChange}
                value={values[RegisterFormKeys.REPASS]}
            />
            {errors.rePass && <span>{errors.rePass}</span>}

            <button className="register-btn" type="submit">Register</button>

            <Link className="text" to="/users/login">Already have an account?</Link>
        </form>
    )
}

export default Register;