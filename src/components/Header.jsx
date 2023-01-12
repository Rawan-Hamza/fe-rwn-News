import "./Header.css";

const Header = ({ theme, switchTheme }) => {
  return (
    <header>
      <div className="container">
        <h1>RWN News</h1>
        <button className="theme-button" onClick={switchTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
