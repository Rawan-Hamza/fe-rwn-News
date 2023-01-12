import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SingleArticle from "./components/SingleArticle";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <div className="App" data-theme={theme}>
        <button className="theme-button" onClick={switchTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
