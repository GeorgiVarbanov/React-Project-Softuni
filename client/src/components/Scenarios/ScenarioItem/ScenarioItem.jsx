import { Link } from "react-router-dom";
import "./ScenarioItem.css";

const ScenarioItem = () => {


    return (
        <div className="table-row">
            <Link className="table-cell">
                <div className="table-cell-content">
                    <div className="scenario-listing-item-avatar"></div>
                    <div className="sources-listing-item-title">Title</div>
                </div>
            </Link>
        </div>
    );
}

export default ScenarioItem;

