import React from 'react';
import Class from "../assets/Class2.jpg"
import Navbar from './Navbar1';
import CourseOverview from './Courseoverview';
import ContactInfo from './ContactInfo';
import CourseModules from './CourseModules';
import Opportunities from './Opportunities';
import ProjectCTA from './ProjectCTA';
import Last from './Last';

function Course() {
  return (
   <>
   <Navbar/>
    <div className="w-full">
           <div
             className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
             style={{ backgroundImage: `url(${Class})` }}
           >
             <div className="absolute inset-0  bg-opacity-60"></div>
             <div className="relative z-10">
             <h2 className="text-5xl font-bold mb-4">Certificate Course</h2><br></br>
             <h3 className="text-xl font-semibold">
             Introducing Satyamev Import-Export Mastery Course: <br></br>
             Unlock Global Opportunities
             </h3>
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
           <CourseOverview/>
           <ContactInfo/>
           <CourseModules/>
           <Opportunities/>
           <ProjectCTA/>
           <Last/>
   </>
  )
}

export default Course