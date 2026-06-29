import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>Donate Blood, Save Lives ❤️</h1>

        <p>
          One donation can save up to 3 lives. Be a hero today by joining LifeLink.
        </p>

        <div className="hero-buttons">
          <Link to="/donor-register" className="btn-red">
            Become Donor
          </Link>

          <Link to="/request-blood" className="btn-outline">
            Request Blood
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Hero;