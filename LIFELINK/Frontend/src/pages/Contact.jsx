import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page">

      <h2>Contact Us</h2>
      <p>We are here to help you anytime ❤️</p>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h3>Get in Touch</h3>

          <p>📍 Location: India</p>
          <p>📞 Phone: +91 9876543210</p>
          <p>📧 Email: support@lifelink.com</p>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </div>
  );
}

export default Contact;