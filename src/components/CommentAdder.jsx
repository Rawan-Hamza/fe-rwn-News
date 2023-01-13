import { useState } from "react";
import { postComment } from "./Api";
import "./Comments.css";
const CommentAdder = ({ setComments, article_id }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newComment = {
      body: newCommentText,
      article_id,
    };
    postComment(newComment).then((newComment) => {
      setComments((currComments) => {
        setNewCommentText('')
        setIsLoading(false)
        return [newComment, ...currComments];
      });
    }).catch((err) => {
      return <p>oops, something went wrong</p>
      setIsLoading(false)
    })
  };

  return (
   <main>
    {isLoading && <p className="posting-comment">posting comment...</p>}
    {!isLoading &&
      <form className="Comment-adder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Type comment here:</label>
      <textarea
        id="newComment"
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}></textarea>
      <button className="post-comment">Post comment</button>
    </form>}
   </main>
  );
};

export default CommentAdder;
