import { useState } from "react";
import "../styles/RequestBlood.css";

function RequestBlood() {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    units: "",
    hospital: "",
    city: "",
    phone: "",
    date: "",
    urgency: "",
    description: "",
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
    alert("Blood Request Submitted Successfully!");
  };

  return (
    <div className="request-container">

      <h2>Request Blood</h2>
      <p className="sub">
        Fill the details below to request blood urgently
      </p>

      <form className="request-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          onChange={handleChange}
        />

        <select name="bloodGroup" onChange={handleChange}>
          <option value="">Blood Group Required</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>

        <input
          type="number"
          name="units"
          placeholder="Units Required"
          onChange={handleChange}
        />

        <input
          type="text"
          name="hospital"
          placeholder="Hospital Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <select name="urgency" onChange={handleChange}>
          <option value="">Urgency Level</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
          <option value="emergency">Emergency</option>
        </select>

        <textarea
          name="description"
          placeholder="Additional Details (optional)"
          onChange={handleChange}
        />

        <button type="submit">Submit Request</button>

      </form>

    </div>
  );
}

export default RequestBlood;