import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


const products = [
  { name: "Vegetables", items: ["Mix Vegetables", "Cabbage", "Green Chilly", "Onion", "Cucumber", "Potatoes", "Tomato", "Lemon"] },
  { name: "Spices", items: ["Turmeric", "Coriander", "Cumin", "Chili Powder"] },
  { name: "Pulses", items: ["Lentils", "Chickpeas", "Kidney Beans", "Black Gram"] },
  { name: "Grains", items: ["Rice", "Wheat", "Barley", "Oats"] },
  { name: "Dryfruits", items: ["Almonds", "Cashews", "Walnuts", "Raisins"] },
  { name: "Flour", items: ["Wheat Flour", "Rice Flour", "Gram Flour"] },
  { name: "Cotton Bales", items: ["Cotton Bales"] },
  { name: "Ready To Use", items: ["Rava Shira", "Mohan Thal", "Kaju Curry", "Choli(Cowpea) Sabji", "Moong Sabji", "Udad Dal", "Masala Kadhi Khichdi"] },
];

const ProductList = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="product">
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-5xl font-bold text-orange-500 mb-4 text-center">Product</h1>
        <div className="bg-white shadow-lg p-4 rounded-md w-full">
          {products.map((product, index) => (
            <div key={index} className=" py-3">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">{product.name}</span>
                <button
                  onClick={() => toggleExpand(index)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  {expanded === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {expanded === index && product.items.length > 0 && (
                <div className="pl-4 mt-2">
                  {product.items.map((item, i) => (
                    <div key={i} className="text-black font-bold text-lg flex items-center gap-2 py-1">
                      {item} <span className="text-yellow-500">☝</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProductList;