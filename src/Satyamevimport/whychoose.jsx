import { useState } from "react";
import Building from "../assets/Building.jpg"


const faqData = [
  {
    title: "Extensive Course Offerings",
    content:
      "We offer a wide range of courses that cover all aspects of import-export operations, including documentation, customs procedures, logistics management, international marketing, risk assessment, trade finance, and more. Our comprehensive curriculum is designed to provide you with a holistic understanding of the intricacies of international trade.",
  },
  { title: "Experienced and Knowledgeable Faculty", content: "Our faculty consists of industry experts with years of experience in international trade and business." },
  { title: "Hands-on Training", content: "Practical learning through real-world case studies, simulations, and workshops." },
  { title: "Industry Partnerships and Collaborations", content: "Collaboration with top industry professionals to provide valuable insights and networking opportunities." },
  { title: "Cutting-edge Facilities and Resources", content: "Access to the latest tools, technologies, and research materials." },
  { title: "Global Perspective", content: "Courses designed to prepare students for the global market and international trade challenges." },
  { title: "Ongoing Support and Alumni Network", content: "A strong network of alumni and continuous career support." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {faqData.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left py-3 flex justify-between items-center font-semibold text-lg"
            onClick={() => toggleFAQ(index)}
          >
            {item.title}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && <p className="text-gray-600 p-3">{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <div className=" p-6 bg-gray-100 flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-1/2">
        <img src={Building} alt="Why Choose Us" className=" shadow-md" />
      </div>
      <div className="w-full md:w-1/2">
      <h2 className="text-5xl text-center font-bold mb-6 relative">
          Why Choose Us?
        </h2>
        <span className="block h-1 bg-blue-600 w-60 mx-auto mb-8"></span>
        <p className="text-gray-700 mb-6">
          At Satyamev Import Export Training Center, we pride ourselves on delivering top-quality education through our experienced faculty and industry-focused curriculum. Our courses cover a wide range of import-export operations, including documentation, customs regulations, logistics management, international marketing, risk assessment, and trade finance.
        </p>
        <FAQSection />
      </div>
    </div>
  );
}
