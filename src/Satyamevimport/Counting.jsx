import React from "react";

const Stats = () => {
  const stats = [
    { number: "1,050+", label: "Satisfied Clients" },
    { number: "760+", label: "Projects Completed" },
    { number: "75+", label: "Awards Winners" },
    { number: "8+", label: "Year Experience" },
  ];

  return (
    <div className="flex justify-around bg-gray-100 py-10 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-orange-600">{stat.number}</span>
          <span className="text-lg font-semibold text-black">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
