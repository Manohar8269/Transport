import React from "react";

const ProjectCTA = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-15 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-20">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-orange-600">
          Would you like to start a project with us?
          </h2><br></br>
          <p className="text-gray-600 text-xl mt-1">
          Unlock your potential in import-export with us. Join our comprehensive training<br></br> programs and start your project in the exciting world of international trade.
          </p>
        </div>
        <div className="bg-blue-700 text-white text-sm font-semibold px-4 py-4 rounded-lg hover:bg-blue-800 transition">
          +91 7600 230 298
        </div>
      </div>
    </div>
  );
};

export default ProjectCTA;
