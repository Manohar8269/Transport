import React from "react";
import Photos from '../assets/Photos.jpg';

const AboutUs = () => {
  return (
    <section id="about">
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8">
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <img
          src={Photos}
          alt="Jenish Kakadiya"
          className="rounded-full w-80 h-80 object-cover border-4 border-gray-300"
        />
        <h3 className="text-xl font-bold text-gray-900 mt-4">MR. JENISH KAKADIYA</h3>
        <p className="text-gray-600 font-medium">CEO & Founder of Satyamev International</p>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-orange-600 text-2xl font-bold uppercase">About Us</h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Welcome to The Satyamev International</h1>
        <p className="text-gray-700 mt-4">
          At Satyamev International, we pride ourselves on being a leading player in the
          import and export industry. Our mission is to facilitate international trade by
          providing efficient and cost-effective solutions to businesses of all sizes. With
          our team of experts and a strong global network, we ensure smooth operations,
          timely deliveries, and exceptional customer service.
        </p>
        <p className="text-gray-700 mt-4">
          Satyamev International is a globally recognized import and export company dedicated
          to helping businesses thrive in the international marketplace. With a strong foundation
          built on integrity, reliability, and customer satisfaction, we have become a trusted
          partner for companies across various industries.
        </p>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
