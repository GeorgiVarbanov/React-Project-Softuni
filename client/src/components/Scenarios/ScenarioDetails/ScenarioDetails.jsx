import { Link } from "react-router-dom";
import "./ScenarioDetails.css";

const ScenarioDetails = ({
    _id,
    campaign,
    level,
    description,
    keyElements,
}) => {

    const avatarStyle = {
        backgroundImage: `url(${imageUrl})`, // Set the background image dynamically
    };

    return (
        <section className="details-section">
            <div className="scenario-details-item-avatar" style={avatarStyle}></div>
            <div className="scenario-details-item-title">{campaign}</div>
            <div className="scenario-details-item-levels">{level}</div>
            <p className="scenario-details-item-description">{description}</p>
            <p className="scenario-details-item-keyElements">{keyElements}</p>
            <Link to={`/scenarios/${_id}/edit`}>Edit</Link>
            <Link to={`/scenarios/${_id}/delete`}>Delete</Link>
        </section>
    );
}

export default ScenarioDetails;