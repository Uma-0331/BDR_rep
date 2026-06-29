import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        ❤️ LifeLink
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donor-register">Become Donor</Link>
        <Link to="/request-blood">Need Blood</Link>
        <Link to="/donors">Donors</Link>
        <Link to="/contact">Contact</Link>
      </div>


      <Link to="/donor-register" className="donor-btn">
        Become Donor
      </Link>
      
    </nav>
  );
}

export default Navbar;