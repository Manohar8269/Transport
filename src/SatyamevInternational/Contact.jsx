import React from "react";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function ContactInfo() {
  return (
    <section id="contact">
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
        
          <div className="flex flex-col items-center">
            <FiPhoneCall className="text-orange-500 text-4xl mb-2" />
            <p className="text-gray-500 font-medium">Call Us Anytime</p>
            <h2 className="text-2xl font-bold text-gray-900">
              (+91) 7600 230 298
            </h2>
          </div>

          
          <div className="flex flex-col items-center">
            <FiClock className="text-orange-500 text-4xl mb-2" />
            <p className="text-gray-500 font-medium">Sunday CLOSED</p>
            <h2 className="text-2xl font-bold text-gray-900">
              Mon - Sat 10:00AM to 6:00PM
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <GoLocation className="text-orange-500 text-4xl mb-2" />
            <p className="text-gray-500 font-medium">Surat, Gujarat – 394101</p>
            <h2 className="text-2xl font-bold text-gray-900">
              801 - 810, Silver Trade Center, <br />
              Near VIP Circle, Mota Varachha
            </h2>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
}

export default ContactInfo;
