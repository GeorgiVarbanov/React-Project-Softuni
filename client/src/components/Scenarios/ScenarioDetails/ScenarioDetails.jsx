import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./ScenarioDetails.css";
import * as scenarioService from "../../../services/scenarioService.js";
import AuthContext from "../../../contexts/authContext.jsx";
import CreateComment from "./CreateComment/CreateComment.jsx";

const ScenarioDetails = () => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
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
        <>
            <section className="details-section">
                <div className="scenario-details-item-avatar" style={avatarStyle}></div>
                <div className="scenario-details-info">

                    <div className="scenario-details-item-title">Campaign name: {scenario.scenario}</div>
                    <div className="scenario-details-item-levels">{scenario.level}</div>
                    <div className="scenario-detauls-description-header">Description: </div>
                    <p className="scenario-details-item-description">{scenario.description}</p>

                    {userId === scenario._ownerId && (
                        <div className="scenario-details-buttons">
                            <Link className="edit-btn" to={`/scenarios/${scenario._id}/edit`}>Edit</Link>
                            <button className="delete-btn" onClick={deleteButtonClickHandler}>Delete</button>
                        </div>
                    )}
                </div>
            </section>

            <section className="comments-section">
                <div className="comment-header">Comments:</div>
                <div className="comments">
                    <ul>
                        <li>Hello there</li>
                        <li>Hello there</li>
                    </ul>
                </div>
            </section>
            <CreateComment />
        </>
    );
}

export default ScenarioDetails;