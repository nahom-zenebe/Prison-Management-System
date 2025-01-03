import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./PMS/Homepage.jsx";
import Login from "./PMS/login.jsx";
import Signup from "./PMS/signup.jsx";
import WelcomePage from "./PMS/welcomePage.jsx";
import Navbar from "./PMS/Navbar.jsx";
import Visitationpage from "./PMS/Visitationpage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Visitationpage" element={<Visitationpage />} />
      </Routes>
    </div>
  );
}
export default App;
