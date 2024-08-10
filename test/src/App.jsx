import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateAppointment from "./components/CreateAppointment";
import DoctorLogin from "./components/DoctorLogin";
import DoctorDashboard from "./components/DoctorDashboard";
import UserLogin from "./components/UserLogin";
import UserDashboard from "./components/UserDashboard";
import UserRegister from "./components/UserRegister";
import DoctorLogout from "./components/DoctorLogout";
import DoctorRegister from "./components/DoctorRegister";
import UserLogout from "./components/UserLogout";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <nav className="mb-8">
          <Link to="/create-appointment" className="mr-4 text-blue-500">
            Create Appointment
          </Link>
          <Link to="/doc-reg" className="mr-4 text-blue-500">
            Doctor Register
          </Link>
          <Link to="/doctor-login" className="mr-4 text-blue-500">
            Doctor Login
          </Link>
          <Link to="/doctor" className="mr-4 text-blue-500">
            Doctor Dashboard
          </Link>
          <Link to="/doctor-logout" className="mr-4 text-blue-500">
            Doctor Logout
          </Link>
          <Link to="/user-login" className="mr-4 text-blue-500">
            User Login
          </Link>
          <Link to="/user" className="mr-4 text-blue-500">
            User Dashboard
          </Link>
          <Link to="/user-reg" className="mr-4 text-blue-500">
            User Register
          </Link>
          <Link to="/user-logout" className="mr-4 text-blue-500">
            User Logout
          </Link>
        </nav>
        <Routes>
          <Route path="/create-appointment" element={<CreateAppointment />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/doc-reg" element={<DoctorRegister />} />
          <Route path="/user-reg" element={<UserRegister />} />
          <Route path="/doctor-logout" element={<DoctorLogout />} />
          <Route path="/user-logout" element={<UserLogout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
