import { useEffect, useState } from "react";
import { fetchComments, removeComments } from "./Api";
import CommentAdder from "./CommentAdder";

const Comments = ({ article_id, user }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [btnPress, setBtnPress] = useState(false);
  const currentUser = user.user.username;
  useEffect(() => {
    fetchComments(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  function deleteComment(removed) {
    setIsLoading(true);
    const updatedComments = comments.filter((comment) => {
      return comment.comment_id !== removed.comment_id;
    });
    setComments(updatedComments);
    removeComments(removed.article_id, removed.comment_id).then(() => {
      setIsLoading(false);
    });
  }

  return (
    <div>
      <header className="comments-header">
        <h3>Comments:</h3>
        <button
          className="post-comment"
          onClick={() => setBtnPress((prevState) => !prevState)}>
          Comment on this article
        </button>
        {btnPress && (
          <CommentAdder setComments={setComments} article_id={article_id} />
        )}
      </header>
      <main className="comments">
        {!comments && (
          <p key="no-comment-tag">This article has no comments yet</p>
        )}
        {isLoading && <p key="isLoading-tag">Loading...</p>}
        {!isLoading &&
          comments &&
          comments.map((comment) => (
            <div key={comment.comment_id} className="comment">
              <h5 className="comment-author">{comment.author}</h5>
              <span>
                <p className="comment-body">{comment.body}</p>
                {currentUser === comment.author && (
                  <button
                    className="delete-comment"
                    onClick={() => deleteComment(comment)}>
                    ❌Delete
                  </button>
                )}
              </span>
            </div>
          ))}
      </main>
    </div>
  );
};

export default Comments;
