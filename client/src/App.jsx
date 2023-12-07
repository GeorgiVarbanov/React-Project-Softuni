import { Routes, Route } from "react-router-dom";

import paths from "./paths.js";
import { AuthProvider } from "./contexts/authContext.jsx";

import Header from './components/Header/Header.jsx'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Scenarios from "./components/Scenarios/Scenarios.jsx";
import CreateScenario from "./components/Scenarios/CreateScenario/CreateScenario.jsx";
import ScenarioDetails from "./components/Scenarios/ScenarioDetails/ScenarioDetails.jsx";
import Login from "./components/Users/Login/Login.jsx";
import Logout from "./components/Users/Logout/Logout.jsx";
import Register from "./components/Users/Register/Register.jsx";
import Footer from "./components/Footer/Footer.jsx";
import EditScenario from "./components/Scenarios/EditScenario/EditScenario.jsx";
import AuthGuard from './components/guards/AuthGuard';
import NotFound from "./components/NotFound/NotFound.jsx";
import Profile from "./components/Users/Profile/Profile.jsx";

function App() {

  return (
    <AuthProvider>
      <>
        <Header />

        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.about} element={<About />} />
          <Route path={paths.scenarios} element={<Scenarios />} />
          <Route path={paths.details} element={<ScenarioDetails />} />
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
          <Route path={paths.notFound} element={<NotFound />} />

          <Route element={<AuthGuard />}>
            <Route path={paths.create} element={<CreateScenario />} />
            <Route path={paths.logout} element={<Logout />} />
            <Route path={paths.edit} element={<EditScenario />} />
            <Route path={paths.profile} element={<Profile/>} />
          </Route>
        </Routes>

        <Footer />
      </>
    </AuthProvider>
  )
}

export default App
