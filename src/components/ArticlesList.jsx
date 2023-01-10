import { useEffect, useState } from "react";
import { fetchArticles } from "./Api";
import { Link } from "react-router-dom"

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticlesList(data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p className="loading-message">Loading ...</p>;
  return (
    <div className="articles-list">
      {articlesList.map((article) => (
        <Link to={"/articles/"+ article.article_id}>
        <div className="article-preview" key={article.article_id}>
          <h2>{article.title}</h2>
          <p>written by {article.author}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesList;
