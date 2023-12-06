import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./EditScenario.css";

import * as scenarioService from "../../../services/scenarioService.js";

const EditScenario = () => {

    const navigate = useNavigate();
    const {scenarioId} = useParams();
    const [scenario, setScenario] = useState({
        campaign: '',
        level: "",
        imageUrl: "",
        description: "",
    });

    useEffect(() => {
        scenarioService.getById(scenarioId)
        .then(result => {
            setScenario(result);
        });
    }, [scenarioId]);

    const editGameSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await scenarioService.edit(scenarioId, values);
            navigate("/scenarios")
        } catch (err) {
            console.log(err)
        }
    }

    const onChange = (e) => {
        setScenario(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };


    return (
        <form className="campaign-cover" onSubmit={editGameSubmitHandler}>
            <h1 className="campaign-h1">Edit Scenario</h1>
            <input
                type="campaign"
                id="campaign"
                name="campaign"
                placeholder="Name"
                onChange={onChange}
                value={scenario.campaign}
            />
            <input
                type="level"
                id="level"
                name="level"
                placeholder="Level"
                onChange={onChange}
                value={scenario.level}
            />
            <input
                type="img"
                id="img"
                name="imageUrl"
                placeholder="Image"
                onChange={onChange}
                value={scenario.imageUrl}
            />
            <textarea
                type="description"
                id="description"
                name="description"
                placeholder="Description"
                onChange={onChange}
                value={scenario.description}
            />
            
            <button className="create-btn" type="submit">Create</button>

        </form>
    )
}

export default EditScenario;