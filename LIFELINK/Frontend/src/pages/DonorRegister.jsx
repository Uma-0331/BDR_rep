import { useState } from "react";
import "../styles/DonorRegister.css";

function DonorRegister() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    lastDonation: "",
    available: "",
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
    alert("Donor Registered Successfully!");
  };

  return (
    <div className="donor-container">

      <h2>Donor Registration</h2>

      <form className="donor-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />

        <select name="gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select name="bloodGroup" onChange={handleChange}>
          <option value="">Blood Group</option>
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
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
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
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <input
          type="date"
          name="lastDonation"
          onChange={handleChange}
        />

        <select name="available" onChange={handleChange}>
          <option value="">Availability</option>
          <option value="yes">Available</option>
          <option value="no">Not Available</option>
        </select>

        <button type="submit">Register as Donor</button>

      </form>

    </div>
  );
}

export default DonorRegister;