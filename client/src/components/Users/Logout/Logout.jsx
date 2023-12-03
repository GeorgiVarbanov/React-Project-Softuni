import { useContext, useEffect } from "react";

import * as authService from "../../../services/authService.js"
import { useNavigate } from "react-router-dom";
import paths from "../../../paths.js";
import AuthContext from "../../../contexts/authContext.jsx";

export default function Logout () {
    const {logoutHandler} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout()
        .then(() => logoutHandler())
        .catch(() => navigate(paths.home))
    }, [])

    return null;
}