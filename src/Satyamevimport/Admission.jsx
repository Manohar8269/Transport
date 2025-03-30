import React from 'react'
import Employees from "../assets/Employees.jpg"
import Request from "./Request";
import Last from "./Last";
import Navbar from './Navbar1';

function Admission() {
  return (
   <>
   <Navbar/>
   <br></br><br></br><br></br>
         <div className="w-full">
           <div
             className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
             style={{ backgroundImage: `url(${Employees})` }}
           >
             <div className="absolute inset-0  bg-opacity-60"></div>
             <div className="relative z-10">
             <h2 className="text-6xl font-bold mb-4">Admission Open</h2>
             <h3 className="text-2xl font-semibold">
               Welcome to The Satyamev Import - Export Training Center
             </h3>
             <p className="text-orange-400 font-semibold my-2">|| नए भारत की नई उड़ान ||</p>
             <p className="max-w-3xl mx-auto text-gray-300">
             Discover limitless possibilities with Satyamev Import-Export Training Institute. 
             Admission Open now! Expand your horizons and gain the knowledge and skills 
             to excel in the dynamic world of international trade. Join us and unlock a world of opportunities.
             </p>
             </div>
           </div>
           </div>
           <Request/>
           <Last/>
   </>
  )
}

export default Admission