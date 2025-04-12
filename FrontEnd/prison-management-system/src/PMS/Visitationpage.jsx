import React from 'react';
import Sidebar from './Sidebar';
import { Plus, Filter, Upload } from 'lucide-react';

const Visitationpage = () => {
  return (
    <div className="bg-gray-200 flex">
      <Sidebar />
      <div className="flex-1 p-8">
       
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search here..."
            className="w-1/3 px-4 py-2 border rounded-lg shadow-md bg-gray-100 text-black"
          />
          <div className="flex gap-6">
            <button className="bg-white w-32 h-10 flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
              <Filter className="mr-2" /> Filter
            </button>
            <button className="bg-white w-32 h-10 flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
              <Upload className="mr-2" /> Export
            </button>
            <button className="bg-blue-600 flex justify-center items-center w-52 h-10 text-white rounded-md shadow-lg hover:bg-blue-500 transition-all duration-300">
              <Plus className="mr-2" /> Add New Visitation
            </button>
          </div>
        </div>

        
        <div className="bg-white shadow-md rounded-lg">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600 font-semibold">
                <th className="px-6 py-4 border-b">Date</th>
                <th className="px-6 py-4 border-b">Visitor Name</th>
                <th className="px-6 py-4 border-b">Department</th>
                <th className="px-6 py-4 border-b">Purpose</th>
                <th className="px-6 py-4 border-b">Status</th>
                <th className="px-6 py-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
        
              <tr className="hover:bg-gray-50 text-sm">
                <td className="px-6 py-4 border-b">2025-01-02</td>
                <td className="px-6 py-4 border-b">John Doe</td>
                <td className="px-6 py-4 border-b">HR</td>
                <td className="px-6 py-4 border-b">Visitaion</td>
                <td className="px-6 py-4 border-b text-green-600">Completed</td>
                <td className="px-6 py-4 border-b">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-sm">
                <td className="px-6 py-4 border-b">2025-01-03</td>
                <td className="px-6 py-4 border-b">Jane Smith</td>
                <td className="px-6 py-4 border-b">Finance</td>
                <td className="px-6 py-4 border-b">Audit</td>
                <td className="px-6 py-4 border-b text-yellow-400">Pending</td>
                <td className="px-6 py-4 border-b">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-sm">
                <td className="px-6 py-4 border-b">2024-11-03</td>
                <td className="px-6 py-4 border-b">Abebe ope</td>
                <td className="px-6 py-4 border-b">manager</td>
                <td className="px-6 py-4 border-b">Visitaion</td>
                <td className="px-6 py-4 border-b text-green-600">Completed</td>
                <td className="px-6 py-4 border-b">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-sm">
                <td className="px-6 py-4 border-b">2024-12-02</td>
                <td className="px-6 py-4 border-b">assefa debebe</td>
                <td className="px-6 py-4 border-b">visiter</td>
                <td className="px-6 py-4 border-b">Visitaion</td>
                <td className="px-6 py-4 border-b text-red-600">Decline</td>
                <td className="px-6 py-4 border-b">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      
        
      </div>
    </div>
  );
};

export default Visitationpage;
