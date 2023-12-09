import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService.js";
import * as scenarioService from "../services/scenarioService.js";
import usePersistedState from "../hooks/usePersistedState.js";
import paths from "../paths.js";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState("auth", {});

    const loginSubmitHandler = async (values) => {

        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate(paths.home);
        } catch (error) {
            alert(error.message)
        }

    };

    const registerSubmitHandler = async (values) => {

        try {
            const result = await authService.register(values.email, values.password, values.username, values.profilePicture);

            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate(paths.home);
        } catch (error) {
            alert(error.message);
        }
    }

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem("accessToken");
        navigate(paths.home);
    }

    const createCampaignHandler = async (values) => {

        try {
            const result = await scenarioService.create(values);

            navigate(paths.scenarios);
            return result;
        } catch (error) {
            alert(error)
        }
    }



    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        createCampaignHandler,
        userId: auth._id,
        username: auth.username,
        email: auth.email,
        profilePicture: auth.profilePicture,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = "AuthContext";

export default AuthContext;