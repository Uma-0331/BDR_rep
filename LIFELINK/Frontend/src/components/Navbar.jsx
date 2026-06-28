import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🩸 LifeLink
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donor-register">Become Donor</Link>
        <Link to="/request-blood">Need Blood</Link>
        <Link to="/donors">Donors</Link>
        <Link to="/contact">Contact</Link>
      </div>

      
    </nav>
  );
}

export default Navbar;