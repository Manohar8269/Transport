import React from "react";
import { FaFileAlt, FaUsers, FaBusinessTime, FaLightbulb, FaBook, FaHandsHelping } from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt className="text-orange-500 text-3xl" />,
    title: "Our Course Content [ 30 hrs+ ]",
    description:
      "We are Offering Courses Includes Basic and Advance Course with Exporter Development Program",
  },
  {
    icon: <FaUsers className="text-orange-500 text-3xl" />,
    title: "Expert Faculties",
    description:
      "We have Team of Expert Faculties with Vast Experience from Conglomerate Industries so Students can Train by Professional Expert",
  },
  {
    icon: <FaBusinessTime className="text-orange-500 text-3xl" />,
    title: "We Guide for Business Setup",
    description:
      "After Training We Guide for their Business Whenever They Need. After Training There is No Any Charge for Guidance and Consulting",
  },
  {
    icon: <FaLightbulb className="text-orange-500 text-3xl" />,
    title: "Training with Practical Exposure",
    description:
      "We Provide Training with Practical Approach in Depth Manners and in Class Training, Each and Every Topic have Practical Aspects",
  },
  {
    icon: <FaBook className="text-orange-500 text-3xl" />,
    title: "Comprehensive Curriculum",
    description:
      "Our meticulously crafted curriculum covers all aspects of export-import operations, including documentation, customs regulations, logistics, international marketing, risk management, and more.",
  },
  {
    icon: <FaHandsHelping className="text-orange-500 text-3xl" />,
    title: "Help & Support",
    description:
      "Our team is committed to providing ongoing assistance, mentorship, and a strong alumni network to ensure your success in the import-export industry.",
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          {feature.icon}
          <h3 className="text-lg font-bold text-gray-900 mt-4">{feature.title}</h3>
          <p className="text-gray-700 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
