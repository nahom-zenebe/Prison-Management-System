

import React from 'react';



const Sidebar = () => {


    return (
        <div>
          <div className='bg-white w-72 h-full'>
            <ul className='pt-36 gap-4 '>
                <li className='mt-10 text-black h-10 pl-10 hover:bg-gray-100 w-56 ml-10 ' >Home page</li>
                <li  className='mt-10 text-black h-10 pl-10 hover:bg-gray-100 w-56 ml-10 '>Inmate Managemnt</li>
                <li  className='mt-10 text-black  h-10 pl-10 hover:bg-gray-100 w-56 ml-10 ' >Staff Managemnt</li>
                <li   className='mt-10 text-black  h-10 pl-10 hover:bg-gray-100 w-56 ml-10 '>Visitaton Managmenet</li>
                <li   className='mt-10  text-black  h-10 pl-10 hover:bg-gray-100 w-56 ml-10 '>Security Managment</li>
                <li   className='mt-10 text-black  h-10 pl-10 hover:bg-gray-100 w-56 ml-10 '>Medical Managment</li>
                <li   className='mt-10 text-black  h-10 pl-10 hover:bg-gray-100 w-56 ml-10 '>Login</li>
            </ul>


            </div>


            <div>
            </div>
        </div>
      );
}

export default  Sidebar ;