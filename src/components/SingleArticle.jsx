import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "./Api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((data) => {
      setArticle(data.article);
    });
  }, []);

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
