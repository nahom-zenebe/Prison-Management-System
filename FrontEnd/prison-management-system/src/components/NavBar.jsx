import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-700 text-white py-4 px-6 shadow-md">
      <div className="container flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">PMS</Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-12">
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/policies" className="hover:text-gray-300">
              Policies
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => navigate("/menu")}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
