import { useEffect, useState } from "react";
import { fetchComments } from "./Api";
import CommentAdder from "./CommentAdder";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [btnPress, setBtnPress] = useState(false)
  
  useEffect(() => {
    fetchComments(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      <header className="comments-header">
        <h3>Comments:</h3>
        <button className="post-comment" onClick={() => setBtnPress(true)}>Comment on this article</button>
        {btnPress && <CommentAdder setComments={setComments} article_id={article_id}/>}
      </header>
      <main className="comments">
        {!comments && <p key='no-comment-tag'>This article has no comments yet</p>}
        {isLoading && <p key='isLoading-tag'>is Loading...</p>}
        {comments &&
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <h5 className="comment-author">{comment.author}</h5>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
      </main>
    </div>
  );
};

export default Comments;
