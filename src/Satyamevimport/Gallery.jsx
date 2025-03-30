import React from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";

const Gallery = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-2 relative">
        Gallery
        <span className="block w-24 h-1 bg-blue-600 absolute left-1/2 transform -translate-x-1/2 mt-1 animate-pulse"></span>
        <span className="block w-24 h-1 bg-blue-600 absolute left-1/2 transform -translate-x-1/2 mt-2 animate-pulse"></span>
      </h2>
      <br></br>
      <p className="text-center text-gray-600 mb-6">
        Practical Training, Expert Faculties, Digital Classroom, World Class <br></br>Infrastructure
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 2}`}
            className="w-64 h-48 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div><br></br>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        EXPLORE MORE
      </button>
    </div>
  );
};

export default Gallery;
