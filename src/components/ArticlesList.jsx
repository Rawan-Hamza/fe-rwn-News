import { useEffect, useState } from "react";
import { fetchArticles } from "./Api";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticlesList(data);
    });
  }, []);
  return (
    <div className="articles-list">
      {articlesList.map((article) => (
        <div className="article-preview" key={article.article_id}>
          <h2>{article.title}</h2>
          <p>written by {article.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
