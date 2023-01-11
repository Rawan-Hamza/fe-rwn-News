import { useEffect, useState } from "react";
import { fetchComments } from "./Api";


const Comments = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchComments(article_id).then((data) => {
            setComments(data.comments)
            setIsLoading(false)
        })
    })
    
    return ( 
        <div className="comments">
            <h3>Comments:</h3>
            {isLoading && <p>is Loading...</p>}
            {comments && comments.map((comment) => (
                <div key={comment.id}>
                <h5>{comment.author}</h5>
                <p className="comment-body">{comment.body}</p>
                </div>
            ))}
            </div>
     );
}
 
export default Comments;