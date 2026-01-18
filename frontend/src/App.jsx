import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoleSelect from "./pages/RoleSelect";
import PatientLogin from "./pages/PatientLogin";
import DoctorLogin from "./pages/DoctorLogin";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/patient" element={<PatientLogin />} />
        <Route path="/login/doctor" element={<DoctorLogin />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
      </Routes>
    </>
  );
}
