import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "./Api";
import "./Navbar.css";

const Navbar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">Home</Link>
        <div className="links">
          {topics.map((topic) => {
            return (
              <Link key={topic.slug} to={"/topics/" + topic.slug}>
                {topic.slug}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
