import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./PMS/Homepage.jsx";
import Login from "./PMS/login.jsx";
import Signup from "./PMS/signup.jsx";
import Navbar from "./PMS/Navbar.jsx";
import InmateManagementpage from './PMS/InmateManagementpage.jsx'
import Visitationpage from "./PMS/Visitationpage.jsx";
import StaffManagementpage from './PMS/StaffManagementpage.jsx'
import MedicalManagementpage from './PMS/MedicalManagementpage.jsx'
import SecurityManagementpage from "./PMS/SecurityManagementpage.jsx";
import Profilepage from './PMS/Profilepage.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/InmateManagementpage" element={<InmateManagementpage />} />
        <Route path="/StaffManagementpage" element={<StaffManagementpage />} />
        <Route path="/VisitationManagementpage" element={<Visitationpage />} />
        <Route path="/MedicalManagementpage" element={<MedicalManagementpage/>} />
        <Route path="/SecurityManagementpage" element={<SecurityManagementpage/>} />
        <Route path="/Profilepage" element={<Profilepage/>} />
      
 
     
      
      </Routes>
    </div>
  );
}
export default App;
