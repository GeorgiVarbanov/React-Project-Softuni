import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./ScenarioDetails.css";
import * as scenarioService from "../../../services/scenarioService.js";

const ScenarioDetails = () => {
    const navigate = useNavigate();
    const [scenario, setScenario] = useState({});
    const { scenarioId } = useParams();

    useEffect(() => {
        scenarioService.getById(scenarioId).then(setScenario);
    }, [scenarioId])


    const avatarStyle = {
        backgroundImage: `url(${scenario.imageUrl})`, // Set the background image dynamically
    };

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${scenario.campaign}`);

        if (hasConfirmed) {
            await scenarioService.remove(scenario._id);

            navigate('/scenarios');
        }
    }

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
                    <button className="delete-btn" onClick={deleteButtonClickHandler}>Delete</button>
                </div>
            </div>
        </section>
    );
}

export default ScenarioDetails;