import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ArticlesList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
