import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-white px-8 py-12 h-screen">
      <h2 className="text-3xl font-bold text-blue-500 mb-6">Welcome to the Prison Management System</h2>
      <p className="text-lg text-gray-700 mb-6">
        The Prison Management System is designed to effectively manage prison operations, inmate records, 
        and staff duties. Our goal is to create a more efficient and organized environment that ensures the 
        security and well-being of both inmates and staff. This system includes features for managing 
        inmate details, schedules, security protocols, and more.
      </p>

      <h3 className="text-2xl font-semibold text-blue-500 mb-4">Key Features:</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Inmate Record Management</li>
        <li>Staff Scheduling</li>
        <li>Prison Security Tracking</li>
        <li>Reports and Analytics</li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="card w-80 bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold text-blue-500 mb-3">Inmate Management</h4>
          <p className="text-gray-600">
            Keep track of inmate details, including personal information, sentencing data, and rehabilitation status.
          </p>
        </div>

        <div className="card w-80 bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold text-blue-500 mb-3">Staff Scheduling</h4>
          <p className="text-gray-600">
            Efficiently manage shifts, duties, and schedules for prison staff to ensure smooth operations.
          </p>
        </div>

        <div className="card w-80 bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold text-blue-500 mb-3">Security Monitoring</h4>
          <p className="text-gray-600">
            Monitor prison security systems, track incidents, and ensure that safety protocols are followed.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/login" className="btn bg-blue-500 text-white px-6 py-2 rounded-md">
          Login
        </Link>
        <Link to="/signup" className="ml-4 btn bg-blue-500 text-white px-6 py-2 rounded-md">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
