import React from "react";
import Navbar from "./Navbar1";
import Counting from "./Counting";
import ProjectCTA from "./ProjectCTA";
import Last from "./Last";
import Seminar from "../assets/seminar.jpg";
import Process from "./Process";
import WhyChooseUs from "./whychoose";


const AboutUs = () => {
  return (
    <>
      <Navbar />
      
      <br />

      <div className="w-full">
        <div
          className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
          style={{ backgroundImage: `url(${Seminar})` }}
        >
          <div className="absolute inset-0  bg-opacity-60"></div>
          <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <h3 className="text-xl font-semibold">
            Welcome to The Satyamev Import - Export Training Center
          </h3>
          <p className="text-orange-400 font-semibold my-2">|| नए भारत की नई उड़ान ||</p>
          <p className="max-w-3xl mx-auto text-gray-300">
            Satyamev Import-Export Training Center is the premier destination for
            comprehensive import-export education. Industry-focused courses,
            experienced faculty, and practical training prepare you for success in
            international trade. Join us today!
          </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-8 -mt-16">
          
          <div className="bg-white p-15  shadow-lg text-center z-10">
            <h2 className="text-xl font-bold mb-2 border-b-2 border-orange-500 inline-block ">
              Who Are We
            </h2>
            <p className="text-gray-600 mt-2">
              Satyamev Import-Export Training Center is a leading institute
              offering comprehensive import-export training, experienced
              faculty, and industry partnerships.
            </p>
          </div>

          <div className="bg-white p-15 shadow-lg text-center z-10">
            <h2 className="text-xl font-bold mb-2 border-b-2 border-orange-500 inline-block">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-2">
              Our mission is to empower aspiring trade professionals with the
              knowledge and skills needed to excel in import-export operations.
            </p>
          </div>

          <div className="bg-white p-15 shadow-lg text-center z-10">
            <h2 className="text-xl font-bold mb-2 border-b-2 border-orange-500 inline-block">
              What We Do
            </h2>
            <p className="text-gray-600 mt-2">
              We provide comprehensive import-export training, offering
              specialized courses, practical learning, and industry connections.
            </p>
          </div>
        </div>
      </div>
      <Process/>
      <WhyChooseUs/>
      <Counting />
      <ProjectCTA />
      <Last />
    </>
  );
};

export default AboutUs;
