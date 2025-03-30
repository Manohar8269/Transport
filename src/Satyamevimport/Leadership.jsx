import React from "react";
import Photos from "../assets/Photos.jpg"

const LeadershipSection = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
     <h2 className="text-5xl font-bold text-gray-900 relative inline-block">
        Meet <span className="relative text-black">Our Leadership</span>
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full animate-draw"></span>
      </h2>
      <p className="text-gray-600 text-center mt-2 max-w-lg">
        Introducing Our Visionary Leaders: Meet the brilliant minds shaping our organization's success and driving innovation forward.
      </p>
      <div className="mt-10 flex flex-col items-center">
        <div className="bg-white p-3 rounded-full shadow-lg">
          <img
            src={Photos}  
            alt="Leadership"
            className="w-100 h-100 rounded-full object-cover border-4 border-gray-300"
          />
        </div>
        <h3 className="text-4xl font-bold text-black mt-4">MR. JENISH KAKADIYA</h3>
        <p className="text-gray-600 text-center font-bold text-lg">CEO & FOUNDER <br></br>OF SATYAMEV INTERNATIONAL<br></br>
        ( SINCE 2015 )</p>
      </div>
      <style>
        {`
          @keyframes draw {
            0% { width: 0; }
            100% { width: 100%; }
          }
          .animate-draw {
            animation: draw 1.5s infinite alternate ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default LeadershipSection;
