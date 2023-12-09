import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CommentSection.css";

import * as commentService from "../../../../services/commentService.js"

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const { scenarioId } = useParams();

    useEffect(() => {
        commentService.getAllComments(scenarioId)
            .then(result => setComments(result))
            .catch(err => {
                console.log(err);
            })
    }, [scenarioId]);

    return (
        <section className="comments-section">
            <div className="comment-header">Comments:</div>
            <div className="comments">
                <ul>
                    {comments.map(({ _id, text: {comment}, owner: {email} }) => (
                        <li key={_id}>
                                {email}: {comment}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default CommentSection;