import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-text">

          <h2>About LifeLink</h2>

          <p>
            LifeLink is a blood donation platform that connects donors with patients
            in need of blood during emergencies. Our mission is to ensure that no life
            is lost due to lack of blood availability.
          </p>

          <p>
            We aim to build a fast, reliable, and transparent system where donors can
            register easily and hospitals can quickly find matching blood groups.
          </p>

        </div>

        <div className="about-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="about"
          />
        </div>

      </div>

    </section>
  );
}

export default About;