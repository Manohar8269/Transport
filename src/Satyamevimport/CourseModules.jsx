import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const topics = [
  {
    title: "Export-Import : Introduction, Overview and Business Legal Procedure",
    details: "Practical : How to start Business and It’s Legal Procedures"
  },
  {
    title: "Market Development : Product Analysis, Market Selection & How to Search Potential Buyers ???",
    details: "Practical : How To Search Potential Buyers Through Offline & Online ???"
  },
  {
    title: "Digital Marketing: Google, Website and Online Social Network",
    details: "Practical: How To Make Presence Through Digital Marketing & Online Social Media ???"
  },
  {
    title: "Export Cost & Price Analysis, Payment Terms, Risk Management",
    details: "Practical: How To Calculate Cost and Price Through Worksheet & Other Practical Aspects"
  },
  {
    title: "Export-Import Documentations",
    details: "Practical: Preparing Documentations by Practical & Digitally"
  },
  {
    title: "Customs Clearance, Quality Control, Inspection",
    details: "Practical: Customs Clearance Process, Inspection Procedures"
  },
  {
    title: "Containers, Vessel Types and Shipping Process (By Sea / By Air / By Road)",
    details: "Practical: Shipment, Terminal, Shipping Process Through By Sea/ Air / Road"
  },
  {
    title: "Export Promotional Measures: EPC, CB, DA, RODTEP, ROSCTL, MAI, MDA, TMA (Basic)",
    details: "Practical: How to Obtain Export Promotional Benefits and It’s Procedure"
  },
  {
    title: "Import Promotional Measures: Import Procedures, Advance Authorization, DFIA, EPCG (Basic)",
    details: "Practical How To Search Suppliers & Obtain Import Promotional Benefits and Procedure"
  },
  {
    title: "FOREX: FEMA, RBI, Pre-Shipment & Post-Shipment Finance",
    details: "Practical : Availing Forex Facilities and To Know FEMA/RBI Guidelines"
  },
  {
    title: "International Business Communication",
    details: "Practical E-Mail Practice, How To Convince & Convert Into Trade ???"
  },
  {
    title: "B2B: Business to Business, B2C: Business to Customer, E-Commerce (Online Selling)",
    details: "Practical: How To Start Online Selling and International Business Through B2B Portals"
  },
];

const ExpandableList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      {topics.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleDetails(index)}
            className="flex items-center justify-between w-full p-4 text-left text-orange-700 font-semibold bg-gray-100 hover:bg-gray-200"
          >
            {item.title}
            {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-700 bg-white">{item.details}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;
