import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CreateComment.css";

import * as commentService from "../../../../services/commentService.js"

const CreateComment = () => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const { scenarioId } = useParams();

    const createCommentHandler = async (e) => {
        e.preventDefault();

        if (!comment.trim()) {
            setError("Please enter a comment");
            return;
        }

        try {
            const newComment = await commentService.create(scenarioId, comment);
            return newComment;
        } catch (error) {
            alert(error);
        }
    }

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
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
                    value={comment.comment}
                />
                
                <button className="comment-btn">Add comment</button>
            </form>
            {error && <span className="error-message">{error}</span>}
        </section>
    )
};

export default CreateComment;