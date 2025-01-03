import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {Plus} from 'lucide-react'
import {Filter} from 'lucide-react'
import { Upload } from 'lucide-react'

const Visitationpage = () => {
  

  return (
    <div className="bg-gray-200 flex">
      <Sidebar />
      <div className="flex-1 p-8">

        <div className="mb-4">
          <input
            type="text"
            
            placeholder="Search here..."
            className="w-full px-4 py-2 border rounded-lg shadow-md bg-gray-100 text-black"
          />
        </div>
        <div className="flex justify-between items-center mt-10 mb-10">
    <h1 className="text-black text-3xl font-semibold tracking-wide text-shadow-md">
        Visitation
    </h1>
    <div className="flex gap-6">
        <button className="bg-white w-32 h-10 flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
            <Filter className="mr-2" />Filter
        </button>
        <button className="bg-white w-32 h-10 flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
            <Upload className="mr-2" />Export
        </button>
        <button className="bg-blue-600 flex justify-center items-center w-52 h-10 text-white rounded-md shadow-lg hover:bg-blue-500 transition-all duration-300">
            <Plus className="mr-2" />Add New Visitation
        </button>
    </div>
</div>



        <div className='bg-white h-screen'>

        </div>


        
    
      </div>
    </div>
  );
};

export default Visitationpage;
