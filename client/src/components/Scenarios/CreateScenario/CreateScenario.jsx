import { useContext } from "react";
import "./CreateScenario.css"

import useForm from "../../../hooks/useForm.js";
import AuthContext from "../../../contexts/authContext.jsx";

const CreateFormKeys = {
    SCENARIO: "scenario",
    LEVEL: "level",
    IMGURL: "imageUrl",
    DESCRIPTION: "description",
}


const CreateScenario = () => {
    const { createCampaignHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit, errors } = useForm(createCampaignHandler, {
        [CreateFormKeys.SCENARIO]: "",
        [CreateFormKeys.LEVEL]: "",
        [CreateFormKeys.IMGURL]: "",
        [CreateFormKeys.DESCRIPTION]: "",
    });

    return (
        <form className="campaign-cover" onSubmit={onSubmit}>
            <h1 className="campaign-h1">Create Scenario</h1>
            <input
                type="campaign"
                id="campaign"
                name={CreateFormKeys.SCENARIO}
                placeholder="Scenario"
                onChange={onChange}
                value={values[CreateFormKeys.SCENARIO]}
            />
            {errors.scenario && <span>{errors.scenario}</span>}
            <input
                type="level"
                id="level"
                name={CreateFormKeys.LEVEL}
                placeholder="Level"
                onChange={onChange}
                value={values[CreateFormKeys.LEVEL]}
            />
            {errors.level && <span>{errors.level}</span>}
            <input
                type="img"
                id="img"
                name={CreateFormKeys.IMGURL}
                placeholder="Image URL"
                onChange={onChange}
                value={values[CreateFormKeys.IMGURL]}
            />
            {errors.imageUrl && <span>{errors.imageUrl}</span>}
            <textarea
                type="description"
                id="description"
                name={CreateFormKeys.DESCRIPTION}
                placeholder="Description"
                onChange={onChange}
                value={values[CreateFormKeys.DESCRIPTION]}
            />
            {errors.description && <span>{errors.description}</span>}
            <button className="create-btn" type="submit">Create</button>

        </form>
    )
}

export default CreateScenario;