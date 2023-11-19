import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header.jsx'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Scenarios from "./components/Scenarios/Scenarios.jsx";
import Login from "./components/Users/Login/Login.jsx";
import Register from "./components/Users/Register/Register.jsx";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
