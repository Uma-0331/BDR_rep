import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h3>❤️ LifeLink</h3>

        <p>
          Saving lives through blood donation. Join our mission today.
        </p>

        <div className="footer-bottom">
          © {new Date().getFullYear()} LifeLink. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;