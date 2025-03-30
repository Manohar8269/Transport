import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row p-15 bg-gray-50">
      
      <div className="md:w-1/2 p-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name*"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your email*"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your message*"
            className="w-full p-2 border border-gray-300 rounded h-32"
          ></textarea>
          <button className="bg-blue-700 text-white px-6 py-2 rounded">SUBMIT</button>
        </form>
      </div>

     
      <div className="md:w-1/2 p-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
        <br></br>
        <div className="space-y-5">
          <div className="flex items-start space-x-3 border-b pb-3">
            <FaMapMarkerAlt className="text-orange-600 mt-1" />
            <p>810, Silver Trade Center, Near VIP Circle, Mota Varachha, Surat, Gujarat 394101</p>
          </div>
          <div className="flex items-center space-x-3 border-b pb-2">
            <FaEnvelope className="text-orange-600" />
            <p>info@sietc.in</p>
          </div>
          <div className="flex items-center space-x-3 border-b pb-2">
            <FaPhoneAlt className="text-orange-600" />
            <p>+91 7600 230 298</p>
          </div>
          <div className="flex items-center space-x-3 border-b pb-2">
            <FaPhoneAlt className="text-orange-600" />
            <p>+91 7600 230 241</p>
          </div>
        </div>
        <div className="mt-6 ">
          <p className="font-semibold">Call us Now</p>
          <p className="text-orange-600 text-xl font-bold">+91 7600 230 298</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
