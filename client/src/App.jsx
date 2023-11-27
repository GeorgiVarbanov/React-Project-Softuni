import { Routes, Route, useNavigate } from "react-router-dom";

import paths from "./paths.js";
import * as authService from "./services/authService.js"

import Header from './components/Header/Header.jsx'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Scenarios from "./components/Scenarios/Scenarios.jsx";
import Login from "./components/Users/Login/Login.jsx";
import Register from "./components/Users/Register/Register.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { useState } from "react";
import AuthContext from "./contexts/authContext.js";

function App() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState();

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    navigate(paths.home);
  };


  return (
    <AuthContext.Provider value={ {loginSubmitHandler} }>
    <>
      <Header />

      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.scenarios} element={<Scenarios />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.register} element={<Register />} />
      </Routes>
      
      <Footer/>
    </>
    </AuthContext.Provider>
  )
}

export default App
