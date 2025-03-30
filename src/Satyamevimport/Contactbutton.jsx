import React from 'react'
import ContactForm from '../SatyamevInternational/Contactform';
import ProjectCTA from './ProjectCTA';
import Last from './Last';
import Class from "../assets/Class.jpg"
import Navbar from './Navbar1';

function Contactbutton() {
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
             <h2 className="text-6xl font-bold mb-4">Contact Us</h2>
             <h3 className="text-2xl font-semibold">
             We are here for you! Get in touch with us.
             </h3>
             <p className="max-w-3xl mx-auto text-gray-300">
             Ready to embark on your import-export journey? Get in touch with us to learn 
             more about our comprehensive training programs and kick-start your global 
             career. Reach out today!
             </p>
             </div>
           </div>
           </div>
           <ContactForm/>
           <ProjectCTA/>
           <Last/>
           </>
  )
}

export default Contactbutton