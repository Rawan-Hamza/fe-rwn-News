import { useEffect, useState } from "react";
import { fetchArticles } from "./Api";
import { Link, useParams } from "react-router-dom"

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('Descending')
  const { topic } = useParams();

  
  const flipOrder = () => {
      if (order === "Descending") {
        setOrder('Ascending')
      } else {
        setOrder('Descending')
      }
    }
    let orderBy;
    if(order === "Descending"){
      orderBy = order.substring(0, 4).toUpperCase()
    } else {
      orderBy = order.substring(0, 3).toUpperCase()
    }

  useEffect(() => {
    fetchArticles(topic, sortBy, orderBy).then((data) => {
      setIsLoading(false);
      if(orderBy === 'ASC') {
        setArticlesList(data.reverse())
      } else {
        setArticlesList(data);
      }
    });

  }, [topic, sortBy, order]);

  if (isLoading) return <p className="loading-message">Loading ...</p>;
  return (
    <main>
      <span className="sorting-tools">
      <p className="sort-by">sort by:</p>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
      <button className="order" onClick={flipOrder}>{order}</button>
      </span>
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
    </main>
  );
};

export default ArticlesList;
