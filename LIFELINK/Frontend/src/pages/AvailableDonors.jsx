import { useState } from "react";
import "../styles/AvailableDonors.css";

function AvailableDonors() {
  const [bloodGroup, setBloodGroup] = useState("");

  const donors = [
    {
      name: "Rahul Sharma",
      bloodGroup: "O+",
      city: "Delhi",
      phone: "9876543210",
    },
    {
      name: "Anjali Verma",
      bloodGroup: "A+",
      city: "Mumbai",
      phone: "9123456780",
    },
    {
      name: "John Mathew",
      bloodGroup: "B+",
      city: "Chennai",
      phone: "9988776655",
    },
    {
      name: "Priya Singh",
      bloodGroup: "O-",
      city: "Bangalore",
      phone: "8877665544",
    },
  ];

  const filteredDonors = bloodGroup
    ? donors.filter((d) => d.bloodGroup === bloodGroup)
    : donors;

  return (
    <div className="donor-page">

      <h2>Available Donors</h2>

      {/* FILTER */}
      <div className="filter">
        <select onChange={(e) => setBloodGroup(e.target.value)}>
          <option value="">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>

      {/* DONOR CARDS */}
      <div className="donor-grid">

        {filteredDonors.map((donor, index) => (
          <div className="donor-card" key={index}>

            <h3>{donor.name}</h3>

            <p>🩸 {donor.bloodGroup}</p>
            <p>📍 {donor.city}</p>
            <p>📞 {donor.phone}</p>

            <button>Request Blood</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AvailableDonors;