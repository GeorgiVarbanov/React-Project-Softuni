import { useContext } from "react";
import "./Profile.css";

import AuthContext from "../../../contexts/authContext.jsx";

const Profile = () => {

    const { email, username } = useContext(AuthContext);
    return (
        <div className="profile-wrapper">
            <div className="left">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="user" width="100" />
                <h4>Email</h4>
                <p>{email}</p>
                <h4>Username</h4>
                <p>{username}</p>
            </div>
            <div className="right">
                <div className="created-scenarios">
                    <h3>Scenarios</h3>
                    <div className="scenarios-data">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;