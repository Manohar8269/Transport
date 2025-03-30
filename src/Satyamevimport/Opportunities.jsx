import React from "react";
import { FaBriefcase } from "react-icons/fa";

const opportunities = [
  "Merchant Exporter & Importer",
  "Manufacturer Exporter",
  "Logistics Business",
  "International Marketing",
  "Export-Import Documentation",
  "Air Lines(Air Cargo)",
  "Bank(Foreign Trade Department)",
  "Marine Insurance Business",
  "Corporate Agent/ International Broker",
  "Consultant : Export & Import",
  "E-Commerce Business",
  "International Business Tour, Exhibition, Events",
  "Freight Forwarding",
  "Digital Marketing Business",
  "Forex Business",
  "Custom House Agent(CHA)",
  "Cold Storage & Warehouse for Export-Import",
  "Fumigation Business",
  "International Courier Service"
];

const OpportunitiesList = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-black mb-4">
        OPPORTUNITIES AFTER <br></br><span className="text-blue-600">TRAINING</span>
      </h2><br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {opportunities.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded-lg shadow-sm">
            <FaBriefcase className="text-orange-600" />
            <span className="text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div><br></br>
      <div className="mt-10 ">
        <h2 className="text-2xl font-bold text-black text-center mb-2">
          Your Business After <span className="text-blue-600">Course</span>..
        </h2><br></br>
        <p className="text-gray-700 max-w-5xl mx-auto">
          Has everything you need to grow in one place. You can access every latest lesson, ready-to-use documents, live support, exim community, and more from a single dashboard. Everything is built and combined together for better use. All that frustrated energy you've spent on solving doubts? Now you can focus that same energy on growing your import-export business.
        </p>
      </div>
    </div>
  );
};

export default OpportunitiesList;
