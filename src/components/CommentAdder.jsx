import { useState } from "react";
import { postComment } from "./Api";
import "./Comments.css";
const CommentAdder = ({ setComments, article_id }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newComment = {
      body: newCommentText,
      article_id,
    };
    postComment(newComment)
      .then((newComment) => {
        setComments((currComments) => {
          setNewCommentText("");
          setIsLoading(false);
          return [newComment, ...currComments];
        });
      })
      .catch((err) => {
        setError("oops, something went wrong");
        setIsLoading(false);
      });
  };

  return (
    <main>
      {error && <p className="error-message">oops, something went wrong</p>}
      {!error && isLoading && (
        <p className="posting-comment">posting comment...</p>
      )}
      {!error && !isLoading && (
        <form className="Comment-adder" onSubmit={handleSubmit}>
          <label htmlFor="newComment">Type comment here:</label>
          <textarea
            id="newComment"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}></textarea>
          <button className="post-comment">Post comment</button>
        </form>
      )}
    </main>
  );
};

export default CommentAdder;
