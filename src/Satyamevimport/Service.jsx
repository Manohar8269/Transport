import React from 'react'
import Services from "../assets/Service.jpg";
import FeatureSection from './Feature';
import ProjectCTA from './ProjectCTA';
import Last from "./Last";
import Navbar from './Navbar1';
import Facilities from './Facilities';

function Service() {
  return (
    <>
    <Navbar/>
    <div className="w-full">
            <div
              className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
              style={{ backgroundImage: `url(${Services})` }}
            >
              <div className="absolute inset-0  bg-opacity-60"></div>
              <div className="relative z-10">
              <h2 className="text-6xl font-bold mb-4">Service</h2>
              <h3 className="text-xl font-semibold">
              Satyamev Import-Export Training Institute: Unlock Global 
              Trade Success
              </h3>
              <p className="max-w-3xl mx-auto text-gray-300">
              Discover the secrets to thriving in the import-export industry with Satyamev 
              Import-Export Training Institute. Our comprehensive courses equip you with the 
              knowledge and skills needed to excel in the dynamic world of international trade. 
              From market research to logistics and documentation, our expert-led training 
              empowers you to navigate every aspect of global business with confidence. 
              Join us today and embark on a journey towards import-export success.
              </p>
              </div>
            </div>
            </div>

            <br></br><br></br>
            <div>
            <h2 className="text-6xl font-bold text-center mb-4">How can we help you?​</h2>
             <p className="max-w-3xl mx-auto text-center text-black-300">
                 Unlock your potential in import-export with our comprehensive courses, 
                 experienced faculty, hands-on training, and industry connections. 
                 Let us help you succeed in the dynamic world of international trade.</p>
                  <br></br>
                <p className="max-w-3xl mx-auto text-center text-black-300"> Contact us now to learn more about our courses and kick-start your export-import career!
            </p>
            </div>
            <FeatureSection/>
            <Facilities/>
            <ProjectCTA/>
            <Last/>
    </>
  )
}

export default Service