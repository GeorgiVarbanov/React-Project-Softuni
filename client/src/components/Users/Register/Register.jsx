import { Link } from "react-router-dom";
import "./Register.css"

import useForm from "../../../hooks/useForm.js";


const Register = () => {
    const {values, onChange, onSubmit} = useForm();

    return (
        <form className="register-cover" onSubmit={onSubmit}>
            <h1 className="register">Register</h1>
            <input type="email" id="email" name="email" placeholder="Email" onChange={onChange} value={values.email}/>
            <input type="password" id="password" name="password" placeholder="Password" onChange={onChange} value={values.name}/>
            <input type="rePass" id="rePass" name="rePass" placeholder="Confirm password" onChange={onChange} value={values.rePass}/>

            <button className="register-btn" type="submit">Register</button>

            <Link className="text" to="/users/login">Already have an account?</Link>
        </form>
    )
}

export default Register;