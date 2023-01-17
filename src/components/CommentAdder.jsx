import { useState } from "react";
import { postComment } from "./Api";
import "./Comments.css";

const CommentAdder = ({ setComments, article_id }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    if (newCommentText === "") {
      e.preventDefault();
      setError("can't post an empty comment");
      return;
    }
    e.preventDefault();
    setError(null);
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
      {!error && isLoading && (
        <p className="posting-comment">posting comment...</p>
      )}
      {!isLoading && (
        <form className="Comment-adder" onSubmit={handleSubmit}>
          <label htmlFor="newComment">Type comment here:</label>
          <textarea
            id="newComment"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}></textarea>
          {error && <p className="error-message">{error}</p>}
          <button className="post-comment">Post comment</button>
        </form>
      )}
    </main>
  );
};

export default CommentAdder;
