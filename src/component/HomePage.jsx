import React from 'react';
import VIDEO from "../assets/video.mp4";
import INTERNATIONAL from "../assets/international.png";
import TRAINING from '../assets/training-center.png';
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VIDEO} type="video/mp4" />
      </video>

      <div className="bg-opacity-60 h-full flex flex-col justify-center items-center text-white relative">
        <div className="absolute top-0 left-0 w-full py-4">
          <h1 className="text-center text-4xl md:text-4xl font-bold">
            Satyamev Group Of Companies
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-16 mt-20 items-center">
          <div className="text-center flex flex-col items-center w-150 md:w-120">
            <img src={INTERNATIONAL} alt="Satyamev International" className="mx-auto mb-4 w-24 h-24" />
            <h2 className="text-3xl font-semibold mb-4">Satyamev International</h2>
            <Link to = "/Web1">
              <button className="bg-orange-500 px-8 py-3 rounded text-white font-semibold hover:bg-orange-600 transition">
               ENTER WEBSITE
              </button> 
            </Link>
          </div>

          <div className="text-center flex flex-col items-center w-150 md:w-120">
            <img src={TRAINING} alt="Import Export Training Center" className="mx-auto mb-4 w-24 h-24" />
            <h2 className="text-3xl font-semibold mb-4">Satyamev Import Export <br /> Training Center</h2>
            <Link to = "/Web2">
              <button className="bg-orange-500 px-8 py-3 rounded text-white font-semibold hover:bg-orange-600 transition">
                ENTER WEBSITE
              </button>
              </Link>
            
          </div>
        </div>

        <div className="fixed bottom-4 right-4">
          <a href="https://wa.me/8269185071" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </div>
    
  );
}