import { Link } from "react-router-dom";
import "./ScenarioItem.css";

const ScenarioItem = ({
    _id,
    campaign,
    imageUrl,
}) => {

    const avatarStyle = {
        backgroundImage: `url(${imageUrl})`, // Set the background image dynamically
    };

    return (
        <div className="table-row">
            <Link to={`/scenarios/${_id}`} className="table-cell">
                <div className="table-cell-content" >
                    <div className="scenario-listing-item-avatar" style={avatarStyle}></div>
                    <div className="sources-listing-item-title">{campaign}</div>
                </div>
            </Link>
        </div>
    );
};

export default ScenarioItem;

