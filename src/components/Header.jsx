import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import "./Header.css";

const Header = ({ theme, switchTheme }) => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <Link to="/" className="header-link">
        <h1>RWN NEWS</h1>
      </Link>
      <div className="container">
        <button className="theme-button" onClick={switchTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <span className="header-user">
          <img
            src={user.avatar_url}
            alt={`${user.username} profile`}
            id="user-logo"
          />
          <p>{user.username}</p>
        </span>
      </div>
    </header>
  );
};

export default Header;
