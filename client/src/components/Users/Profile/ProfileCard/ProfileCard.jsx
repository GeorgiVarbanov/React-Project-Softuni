import { Link } from "react-router-dom";
import "./ProfileCard.css";



const ProfileCard = ({
    _id,
    campaign,
    imageUrl,
}) => {

    const avatarStyle = {
        backgroundImage: `url(${imageUrl})`, // Set the background image dynamically
    };
    return (
        <Link to={`/scenarios/${_id}`} className="scenario-card-container">
            <div className="image-container" style={avatarStyle}>
            </div>
            <div className="card-title">
                <h5>{campaign}</h5>
            </div>
        </Link>
    )
}

export default ProfileCard;
