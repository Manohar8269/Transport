import { useState } from "react";

const CourseOverview = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    { title: "Certificate Courses", content: "Our course offers an in-depth exploration of the import-export industry, covering topics such as market research, product sourcing, logistics, and more. You'll gain a holistic understanding of the entire process." },
    { title: "Expert Guidance", content: "Learn from seasoned industry experts with years of experience in international trade. Our instructors bring a wealth of knowledge and practical insights to the table, ensuring you receive the best guidance and mentorship throughout the course." },
    { title: "Practical Case Studies", content: "Dive into real-world case studies and practical examples that illustrate the challenges and opportunities faced in import-export operations. These scenarios will sharpen your problem-solving skills and prepare you to handle various situations with confidence." },
    { title: "Hands-On Training", content: "Gain practical experience through hands-on training exercises, simulations, and interactive workshops. We believe in learning by doing, and our course provides ample opportunities to apply your knowledge in a realistic setting." },
    { title: "International Networking", content: " Connect with fellow participants, industry professionals, and potential business partners through our exclusive networking events. Expand your professional network and open doors to new global collaborations." },
    { title: "Ongoing Support", content: "Even after completing the course, you’ll continue to receive support from our dedicated team. Access to valuable resources, updates on industry trends, and personalized guidance will help you stay ahead in the ever-evolving import-export landscape." }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-4 border-b-2 pb-2">Course Overview</h2>
      <p className="text-gray-600 text-center mb-6">
      Our Import-Export Mastery Course is a power-packed program that covers all aspects of the import-export business, ,
      from essential concepts to practical strategies. Whether you’re a beginner or an experienced professional,
      this course is tailored to suit your needs and help you excel in the global marketplace.
      </p>
      
      {sections.map((section, index) => (
        <div key={index} className="mt-2 border rounded-lg overflow-hidden">
          <button
            className="w-full p-4 bg-blue-100 text-blue-800 font-semibold text-left"
            onClick={() => toggleSection(index)}
          >
            {openSection === index ? "- " : "+ "} {section.title}
          </button>
          {openSection === index && (
            <p className="p-4 bg-gray-100 text-gray-700">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseOverview;
