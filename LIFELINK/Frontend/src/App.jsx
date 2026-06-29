import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import DonorRegister from "./pages/DonorRegister";
import PatientRegister from "./pages/PatientRegister";
import RequestBlood from "./pages/RequestBlood";
import AvailableDonors from "./pages/AvailableDonors";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donor-register" element={<DonorRegister />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/donors" element={<AvailableDonors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;