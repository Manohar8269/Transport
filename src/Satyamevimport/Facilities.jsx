import React from "react";

const Facilities = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <p className="max-w-3xl mx-auto text-center text-black-300">EVERY INSTITUTE’S FEES DEPENDS ON THESE FACILITIES</p>
      <br></br>
      <h1 className="text-4xl font-bold text-center mb-6 underline">Our Facility</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ul className="list-disc pl-5 space-y-4">
          <li>Our Course Content: Basic + Advance + EDP (90 Hrs+)</li>
          <li>Expert Faculties (All Faculties are experts in their Fields)</li>
          <li>We Guide License Procedure</li>
          <li>Our Batch Strength - 25 Students</li>
          <li>We Guide Product Selection, Market Analysis, etc</li>
          <li>We Teach Digital Marketing (Google, FB, Insta, LinkedIn, YouTube - Basic)</li>
          <li>We Teach Logistic, Custom Clearance, and Freight Forwarding</li>
          <li>We Teach Banking, Trade Finance, and RBI Guidelines</li>
          <li>We Teach GST and Legal Compliance</li>
          <li>We Teach Sales and Marketing With Skill Development Topics</li>
          <li>We Teach E-Commerce Business (Amazon)</li>
        </ul>
        <ul className="list-disc pl-5 space-y-4">
          <li>We Teach Export-Import Documents</li>
          <li>We Teach Entrepreneurship Development Program</li>
          <li>We Provide a Buyer’s List</li>
          <li>After Training We Guide for Trade</li>
          <li>We Guide for Business Setup</li>
          <li>We Provide Placement Assistance (Many Companies are Our Placement Partners)</li>
          <li>Training With Practical Exposure</li>
          <li>After Training Guidance and Consulting is Free</li>
          <li>We Guide for Business Start-Up</li>
        </ul>
      </div>
      <p className="mt-6 text-1xl ">
        <span className="font-bold">Note:</span> For these reasons, every institute has different fees, so you can’t compare with each other because it is our misunderstanding.
      </p>
    </div>
  );
};

export default Facilities;
