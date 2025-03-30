import React from 'react';
import Gallery from "../assets/Gallery.jpg";
import Navbar from './Navbar1';
import Images from './Images';
import Last from './Last';

function Gallery2() {
  return (
   <>
   <Navbar/>
   <div className="w-full">
              <div
                className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
                style={{ backgroundImage: `url(${Gallery})` }}
              >
                <div className="absolute inset-0  bg-opacity-60"></div>
                <div className="relative z-10">
                <h2 className="text-5xl font-bold mb-4">Gallery</h2><br></br>
                <h3 className="text-2xl font-semibold">
                Welcome to The Satyamev Import - Export Training Center
                </h3><br></br>
                <p className="text-orange-400 font-semibold my-2">|| नए भारत की नई उड़ान ||</p>
                <br></br>
                <p className="max-w-3xl mx-auto ">
                Are you ready to tap into the immense potential of the import-export industry? <br></br>
                satyamev presents our comprehensive Import-Export Mastery Course, <br></br>
                designed to equip you with the knowledge and skills needed to navigate the dynamic <br></br>
                world of international trade successfully.
                </p>
                </div>
              </div>
              </div>
              <Images/>
              <Last/>

   </>
  )
}

export default Gallery2