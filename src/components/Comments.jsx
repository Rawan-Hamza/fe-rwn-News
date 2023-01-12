import { useEffect, useState } from "react";
import { fetchComments } from "./Api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchComments(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      <div className="comments-header">
        <h3>Comments:</h3>
      </div>
      <div className="comments">
        {!comments && <p>This article has no comments yet</p>}
        {isLoading && <p>is Loading...</p>}
        {comments &&
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <h5 className="comment-author">{comment.author}</h5>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
