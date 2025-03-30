import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Building from "../assets/Building.jpg";
import P1 from "../assets/P1.jpg";
import P2 from "../assets/P3.jpeg";
import P3 from "../assets/P4.jpeg";
import P4 from "../assets/P5.jpeg";
import P5 from "../assets/P6.jpeg";
import P6 from "../assets/P8.jpeg";
import P7 from "../assets/P9.jpeg";
import P8 from "../assets/P10.jpeg";
import U1 from "../assets/U1.jpg";
import U2 from "../assets/U2.jpg";
import U3 from "../assets/U3.jpg";
import U4 from "../assets/U4.jpeg";
import U5 from "../assets/U5.jpeg";
import S1 from "../assets/S1.jpg";
import S2 from "../assets/S2.jpg";
import S3 from "../assets/S3.jpg";
import S4 from "../assets/S4.jpeg";
import S5 from "../assets/S5.jpeg";
import Port1 from "../assets/Port1.jpeg";
import Port2 from "../assets/Port2.jpeg";
import Port3 from "../assets/Port3.jpeg";
import T1 from "../assets/T1.jpeg";
import T2 from "../assets/T2.jpeg";
import T3 from "../assets/T3.jpg";
import T4 from "../assets/T4.jpeg";
import T5 from "../assets/T5.jpg";
import T6 from "../assets/T6.jpg";

const categories = {
  ALL: [P1, P2, P3, P4, P5, P6, P7, P8, U1, U2, U3, U4, U5, S1, S2, S3, S4, S5, Port1, Port2, Port3, T1, T2, T3, T4, T5, T6],
  LECTURE: [P1, P2, P3, P4, P5, P6, P7, P8],
  "UNIVERSITY VISIT": [U1, U2, U3, U4, U5],
  "COLD STORAGE VISIT": [S1, S2, S3, S4, S5],
  "PORT VISIT": [Port1, Port2, Port3],
  "TRADE & EXHIBITION": [T1, T2, T3, T4, T5, T6],
  OFFICE: [Building],
};

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = categories[selectedCategory];
  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-center space-x-4 mb-4">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Gallery"
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80"
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>

      {selectedImage !== null && (
        <Dialog open={!!selectedImage} onClose={() => setSelectedImageIndex(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-4 rounded-lg relative">
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2  text-white px-2 py-1 rounded" onClick={showPrevImage}>
                ◀
              </button>
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-[80vh] rounded-lg" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2  text-white px-2 py-1 rounded" onClick={showNextImage}>
                ▶
              </button>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded block mx-auto" onClick={() => setSelectedImageIndex(null)}>Close</button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}