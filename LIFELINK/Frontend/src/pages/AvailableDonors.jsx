import { useState, useEffect } from "react";
import "../styles/AvailableDonors.css";

import api from "../services/api";

function AvailableDonors() {
  const [bloodGroup, setBloodGroup] = useState("");

  const [donors, setDonors] = useState([]);
  
  const filteredDonors = bloodGroup
    ? donors.filter((d) => d.blood_group === bloodGroup)
    : donors;

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await api.get("donor/api/donors/");
        setDonors(response.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
    };

    fetchDonors();
  }, []);

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

        {filteredDonors.map((donor) => (
          <div className="donor-card" key={donor.id}>

            <h3>{donor.name}</h3>

            <p>🩸 {donor.blood_group}</p>
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