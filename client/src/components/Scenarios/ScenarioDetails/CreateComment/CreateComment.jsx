import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./CreateComment.css";

import * as commentService from "../../../../services/commentService.js"
import AuthContext from "../../../../contexts/authContext.jsx";

const CreateComment = (props) => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const { username } = useContext(AuthContext);
    const { scenarioId } = useParams();

    const createCommentHandler = async (e) => {
        e.preventDefault();

        if (!comment.trim()) {
            setError("Please enter a comment");
            return;
        }

        try {
            const newComment = await commentService.create(scenarioId, comment);
            newComment.owner = { username }

            props.updateComments(newComment);

            setComment("");
            return newComment;
        } catch (error) {
            alert(error);
        }
    }

    const onChange = (e) => {
        setComment(e.target.value);
    };

    return (
        <section className="add-comment">
            <form className="comment-form" onSubmit={createCommentHandler}>
                <textarea className="comment-input"
                    type="comment"
                    id="comment"
                    name="comment"
                    placeholder="Comment"
                    onChange={onChange}
                    value={comment}
                />

                <button className="comment-btn">Add comment</button>
            </form>
            {error && <span className="error-message">{error}</span>}
        </section>
    )
};

export default CreateComment;