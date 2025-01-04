import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../PMS/Navbar"; // Import Navbar
import prisonLogo from "../assets/pp.jpg"; // Import the image

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen text-black bg-white bg-gradient-to-br">
   
    

      {/* Main Content */}
      <main className="flex flex-1 flex-row items-center justify-around max-w-6xl mx-auto">
        <section className="flex-1 min-w-4xl">
          <h1 className="text-6xl font-bold pb-10 ">
            Prison Management System
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Efficient & Secure Prison Management
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Manage inmate records, monitor activities, and streamline operations
            with ease. Your trusted platform for secure and efficient prison
            management.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 text-lg bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 text-lg font-bold bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Signup
            </button>
          </div>
        </section>

        <section className="flex-1 flex justify-center items-center">
          <img
            src={prisonLogo}
            alt="the prison logo"
            className="min-w-80 min-h-full  object-contain pl-64"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center bg-black bg-opacity-20">
        <p>
          &copy; {new Date().getFullYear()} Prison Management System. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default WelcomePage;
