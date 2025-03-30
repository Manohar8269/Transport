import React from "react";
import { FaThumbsUp, FaClock, FaUserCheck, FaMoneyBillWave, FaBookmark, FaGift } from "react-icons/fa";

const reasons = [
  {
    icon: <FaThumbsUp className="text-orange-500 text-5xl mb-4" />,
    title: "Quality Product",
    description: "Satyamev International Believes In Nothing But, Quality With Commitment."
  },
  {
    icon: <FaClock className="text-orange-500 text-5xl mb-4" />,
    title: "Time Shipment",
    description: "Dedicated Order Fulfillment To Ensure On Time Shipment."
  },
  {
    icon: <FaUserCheck className="text-orange-500 text-5xl mb-4" />,
    title: "Classic Bland",
    description: "Satyamev International Is a Classic Bland Of Ethics And Morals With Spirituality."
  },
  {
    icon: <FaMoneyBillWave className="text-orange-500 text-5xl mb-4" />,
    title: "Best Pricing",
    description: "We Give a Best Competitive Price To Our Customers."
  },
  {
    icon: <FaBookmark className="text-orange-500 text-5xl mb-4" />,
    title: "Execution Expertise",
    description: "Unique Expertise In Agriculture Analysis And Quality Control."
  },
  {
    icon: <FaGift className="text-orange-500 text-5xl mb-4" />,
    title: "Best Packaging",
    description: "We Embrace The Packaging Standards Of Indian Institute Of Packaging."
  }
];

function ChooseUs() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800">Reason For Choose Us</h2>
        <div className="w-28 h-[3px] bg-gray-500 mx-auto my-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mt-10">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-700 text-base max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
