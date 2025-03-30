import React from "react";

const HelpSection = () => {
  return (
    <div className="bg-gray-100 text-center py-12 px-6">
      <h2 className="text-5xl font-bold text-gray-900 relative inline-block">
        How can we <span className="relative text-black">help you?
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full animate-draw"></span>
        </span>
      </h2>
      <br />
      <p className="text-gray-700 max-w-2xl mx-auto mt-4">
        Unlock your potential in import-export with our comprehensive courses,
        experienced faculty, hands-on training, and industry connections. Let us
        help you succeed in the dynamic world of international trade.
      </p>
      <p className="text-gray-700 max-w-2xl mx-auto mt-4">
        Contact us now to learn more about our courses and kick-start your
        export-import career!
      </p>
      <style>
        {`
          @keyframes draw {
            0% { width: 0; }
            100% { width: 100%; }
          }
          .animate-draw {
            animation: draw 1.5s infinite alternate ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default HelpSection;
