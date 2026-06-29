import { useState } from "react";
import "../styles/DonorRegister.css";
import api from "../services/api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const donorData = {
            name: formData.name,
            age: Number(formData.age),
            gender: formData.gender,
            blood_group: formData.bloodGroup,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            address: formData.address,
            last_donation: formData.lastDonation || null,
            available: formData.available === true,
        };

        const response = await api.post(
            "donor/api/donors/",
            donorData
        );

        console.log(response.data);

        alert("Donor Registered Successfully!");

    } catch (error) {

        console.error(error);

        alert("Registration Failed");

    }
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

       <select
  name="gender"
  value={formData.gender}
  onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
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

        <select
    name="available"
    onChange={(e) =>
        setFormData({
            ...formData,
            available: e.target.value === "true",
        })
    }
>
    <option value="">Availability</option>
    <option value="true">Available</option>
    <option value="false">Not Available</option>
</select>
        <button type="submit">Register as Donor</button>

      </form>

    </div>
  );
}

export default DonorRegister;