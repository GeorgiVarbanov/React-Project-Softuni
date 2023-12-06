import { Link, useParams } from "react-router-dom";
import "./ScenarioDetails.css";
import { useEffect, useState } from "react";

import * as scenarioService from "../../../services/scenarioService.js";

const ScenarioDetails = () => {

    const [scenario, setScenario] = useState({});
    const { scenarioId } = useParams();

    useEffect(() => {
        scenarioService.getById(scenarioId).then(setScenario);
    }, [scenarioId])


    const avatarStyle = {
        backgroundImage: `url(${scenario.imageUrl})`, // Set the background image dynamically
    };

    return (
        <section className="details-section">
            <div className="scenario-details-item-avatar" style={avatarStyle}></div>
            <div className="scenario-details-info">

                <div className="scenario-details-item-title">Campaign name: {scenario.campaign}</div>
                <div className="scenario-details-item-levels">{scenario.level}</div>
                <div className="scenario-detauls-description-header">Description: </div>
                <p className="scenario-details-item-description">{scenario.description}</p>
                <div className="scenario-details-buttons">
                    <Link className="edit-btn" to={`/scenarios/${scenario._id}/edit`}>Edit</Link>
                    <Link className="delete-btn" to={`/scenarios/${scenario._id}/delete`}>Delete</Link>
                </div>
            </div>
        </section>
    );
}

export default ScenarioDetails;