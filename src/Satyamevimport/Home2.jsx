import React from "react";
import Employees from "../assets/Employees.jpg";

const TrainingCentre = () => {
  return (
    <>
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center text-white"
      style={{ backgroundImage: `url(${Employees})` }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative text-left max-w-3xl p-5 ml-10">
        <h2 className="text-lg font-bold">
          Unlock Your Potential in International Trade
        </h2><br></br>
        <h1 className="text-4xl font-extrabold mt-2">
          || नए भारत की नई उड़ान ||
        </h1>

<br></br>
        <h3 className="text-3xl font-bold">
          SATYAMEV IMPORT EXPORT<br></br> TRAINING CENTRE
        </h3>

        <p className="mt-4 text-lg">
          Are you ready to explore the exciting world of import-export and tap
          into the vast opportunities it offers? Look no further than{" "}
          <b>Satyamev Import-Export Training Center</b>, your premier
          destination for comprehensive and specialized training in the field of
          international trade.
        </p>

        <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white  py-2 px-4 rounded-lg">
          ⬇ DOWNLOAD BROCHURE
        </button>
      </div>
    </div>
    <div className="fixed bottom-4 right-4">
    <a href="https://wa.me/8269185071" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-12 h-12" />
    </a>
  </div>
  </>
  );
};

export default TrainingCentre;
