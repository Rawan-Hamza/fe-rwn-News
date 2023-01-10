import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link>Coding</Link>
        <Link>Football</Link>
        <Link>Cooking</Link>
      </div>
    </nav>
  );
};

export default Navbar;
