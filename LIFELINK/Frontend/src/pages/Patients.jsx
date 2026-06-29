import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Patients.css";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await api.get("api/patients/");
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="patients-container">
      <h2>Registered Patients</h2>

      <div className="patients-grid">
        {patients.map((patient) => (
          <div className="patient-card" key={patient.id}>
            <h3>{patient.patient_name}</h3>

            <p>🩸 {patient.blood_group}</p>
            <p>📍 {patient.city}</p>
            <p>📞 {patient.phone || "Not Provided"}</p>
            <p>🏥 {patient.hospital || "Not Provided"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patients;