import { useEffect, useState } from "react";
import { fetchArticles } from "./Api";
import { Link, useParams } from "react-router-dom"

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    
    fetchArticles(topic).then((data) => {
      setIsLoading(false);
      setArticlesList(data);
    });
  }, [articlesList]);
  if (isLoading) return <p className="loading-message">Loading ...</p>;

  return (
    <ul className="articles-list">
      {articlesList.map((article) => (
        <Link to={"/articles/"+ article.article_id}>
        <li className="article-preview" key={article.article_id}>
          <h2>{article.title}</h2>
          <span className="article-details">
          <h5>written by {article.author}</h5>
          <h6>{article.votes} votes</h6>
          <h6>{article.comment_count} comments</h6>
          </span>
        </li>
        </Link>
      ))}
    </ul>
  );
};

export default ArticlesList;
