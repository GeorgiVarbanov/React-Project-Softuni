import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./ScenarioDetails.css";
import * as scenarioService from "../../../services/scenarioService.js";
import AuthContext from "../../../contexts/authContext.jsx";
import CreateComment from "./CreateComment/CreateComment.jsx";
import CommentSection from "./CommentSection/CommentSection.jsx";
import * as commentService from "../../../services/commentService.js"

const ScenarioDetails = () => {
    const navigate = useNavigate();
    const { userId, isAuthenticated } = useContext(AuthContext);
    const [scenario, setScenario] = useState({});
    const { scenarioId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        scenarioService.getById(scenarioId)
        .then(setScenario)
        .catch((err) => console.log(err));

        commentService.getAllComments(scenarioId)
            .then((result) => setComments(result))
            .catch((err) => {
                console.log(err);
            });
    }, [scenarioId])

    const updateComments = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    const avatarStyle = {
        backgroundImage: `url(${scenario.imageUrl})`,
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

            <CommentSection comments={comments} />
            {isAuthenticated && (<CreateComment updateComments={updateComments} />)}
        </>
    );
}

export default ScenarioDetails;