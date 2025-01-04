import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>


      <div className="bg-gray-800 flex flex-col  w-72 h-full text-white shadow-lg">

        <ul className="pt-40 ">
          <li className="px-8 py-3 mt-20   hover:bg-gray-700 cursor-pointer transition-all duration-200">
           <Link to='/Profilepage'>Profile page</Link> 
          </li>
          <li className="px-8 py-3 mt-10 hover:bg-gray-700 cursor-pointer transition-all duration-200">
           <Link to="/InmateManagementPage">Inmate Management</Link> 
          </li>
          <li className="px-8 py-3  mt-10 hover:bg-gray-700 cursor-pointer transition-all duration-200">
       <Link to="/StaffManagementpage"> Staff Management</Link>  
          </li>
          <li className="px-8 py-3  mt-10 hover:bg-gray-700 cursor-pointer transition-all duration-200">
            <Link to="/VisitationManagementpage">  Visitation Management</Link> 
          </li>
          <li className="px-8 py-3  mt-10 hover:bg-gray-700 cursor-pointer transition-all duration-200">
         <Link to="/MedicalManagementpage ">Medical Management</Link>  
          </li>
          <li className="px-8 py-3  mt-10 hover:bg-gray-700 cursor-pointer transition-all duration-200">
          <Link to="/SecurityManagementpage">Security Management </Link> 
          </li>
          <li className="px-8 py-3  mt-10 hover:bg-gray-700 cursor-pointer transition-all duration-200">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
