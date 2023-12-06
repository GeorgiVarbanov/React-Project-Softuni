import { useContext } from "react";
import "./CreateScenario.css"

import useForm from "../../../hooks/useForm.js";
import AuthContext from "../../../contexts/authContext.jsx";

const CreateFormKeys = {
    CAMPAIGN: "campaign",
    LEVEL: "level",
    IMGURL: "imageUrl",
    DESCRIPTION: "description",
}


const CreateScenario = () => {
    const { createCampaignHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(createCampaignHandler, {
        [CreateFormKeys.CAMPAIGN]: "",
        [CreateFormKeys.LEVEL]: "",
        [CreateFormKeys.IMGURL]: "",
        [CreateFormKeys.DESCRIPTION]: "",
    });

    return (
        <form className="campaign-cover" onSubmit={onSubmit}>
            <h1 className="campaign-h1">Create Campaign</h1>
            <input
                type="campaign"
                id="campaign"
                name={CreateFormKeys.CAMPAIGN}
                placeholder="Name"
                onChange={onChange}
                value={values[CreateFormKeys.CAMPAIGN]}
            />
            <input
                type="level"
                id="level"
                name={CreateFormKeys.LEVEL}
                placeholder="Level"
                onChange={onChange}
                value={values[CreateFormKeys.LEVEL]}
            />
            <input
                type="img"
                id="img"
                name={CreateFormKeys.IMGURL}
                placeholder="Image"
                onChange={onChange}
                value={values[CreateFormKeys.IMGURL]}
            />
            <textarea
                type="description"
                id="description"
                name={CreateFormKeys.DESCRIPTION}
                placeholder="Description"
                onChange={onChange}
                value={values[CreateFormKeys.DESCRIPTION]}
            />
            
            <button className="create-btn" type="submit">Create</button>

        </form>
    )
}

export default CreateScenario;