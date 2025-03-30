import React from 'react';
import VIDEOS from "../assets/Videos.mp4";

function Home() {
  return (
    <>
      <section id="home">
      <div className="fixed top-0 left-0 w-full z-50">
        
      </div>

      <div className="relative w-full h-screen overflow-hidden">
       
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={VIDEOS} type="video/mp4" />

        </video>

        <div className="absolute top-0 left-0 w-full h-full flex justify-end items-center bg-black bg-opacity-50 p-10">
          <div className="text-white max-w-lg text-right z-20">
            <h1 className="text-4xl font-bold mb-4">Satyamev International...!!</h1>
            <p className="mb-6">
              At Satyamev International, we are your reliable partner for all your import and export needs. 
              With years of experience and a commitment to excellence, we provide seamless solutions for businesses across the globe.
            </p>
            <button className="bg-orange-500 px-8 py-3 rounded text-white font-semibold hover:bg-orange-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      </section>
      
     
      
    </>
  );
}

export default Home;
