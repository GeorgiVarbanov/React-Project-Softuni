
import "./CommentSection.css";

const CommentSection = ({comments}) => {


    return (
        <section className="comments-section">
            <div className="comment-header">Comments:</div>
            <div className="comments">
                <ul>
                    {comments.map(({ _id, text, owner }) => (
                        <li key={_id}>
                                {owner.username}: {text}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default CommentSection;