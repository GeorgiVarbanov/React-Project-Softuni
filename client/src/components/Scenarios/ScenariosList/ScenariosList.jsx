import { useEffect, useState } from 'react';

import "./ScenariosList.css";
import * as scenarioService from "../../../services/scenarioService.js";
import ScenarioItem from "../ScenarioItem/ScenarioItem.jsx";


const Scenarios = () => {

    const [scenarios, setScenarios] = useState([]);

    useEffect(() => {
        scenarioService.getAll()
            .then(result => setScenarios(result))
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    return (
        <section className="scenario-section">
            {scenarios.map(scenario => (
                <ScenarioItem key={scenario._id} {...scenario} />
            ))}

            {scenarios.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    )
}

export default Scenarios;