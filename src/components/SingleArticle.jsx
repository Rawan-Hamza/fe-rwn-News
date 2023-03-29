import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "./Api";
import Comments from "./Comments";
import Votes from "./Votes";
import "./SingleArticle.css";

const SingleArticle = ({ user }) => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [localDateTime, setLocalDateTime] = useState();
  useEffect(() => {
    fetchArticleById(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
      let isoDateTime = new Date(article.created_at);
      setLocalDateTime(isoDateTime.toLocaleDateString());
    });
  }, [article_id, article.created_at]);

  if (isLoading) return <p className="loading-message">Loading ...</p>;
  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <p className="article-time">
        {article.author} on {localDateTime}
      </p>
      <p className="article-body">{article.body}</p>
      <Votes votes={article.votes} article_id={article_id} />
      <Comments article_id={article_id} user={user} />
    </div>
  );
};

export default SingleArticle;
