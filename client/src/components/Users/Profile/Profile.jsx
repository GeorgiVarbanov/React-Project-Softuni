import { useContext, useEffect, useState } from "react";

import "./Profile.css";

import AuthContext from "../../../contexts/authContext.jsx";
import ProfileCard from "./ProfileCard/ProfileCard.jsx";
import * as scenarioService from "../../../services/scenarioService.js";

const Profile = () => {

    const [ownedScenarios, setOwnedScenarios] = useState([]);
    const { email, username, userId , profilePicture} = useContext(AuthContext);

    useEffect(() => {
        scenarioService.getAll()
            .then(result => setOwnedScenarios(result.filter((scenario) => scenario._ownerId === userId)))
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(profilePicture);

    return (
        <div className="profile-wrapper">
            <div className="left">
                <img src={profilePicture} alt="Profile picture" width="100" />
                <h4>Email</h4>
                <p>{email}</p>
                <h4>Username</h4>
                <p>{username}</p>
            </div>
            <div className="right">
                <div className="created-scenarios">
                    <h3 className="h3-title">Scenarios</h3>
                    <div className="scenarios-data">

                        {ownedScenarios.map(scenario => (
                            <ProfileCard key={scenario._id} {...scenario} />
                        ))}

                        {ownedScenarios.length === 0 && (
                            <h3 className="no-articles-profile">No articles yet</h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;