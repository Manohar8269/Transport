import React from "react";

const features = [
  {
    icon: "🌍",
    title: "Global Expertise",
    description:
      "Satyamev International Import Export is a globally recognized import and export company dedicated to helping businesses thrive in the international marketplace. With a strong foundation built on integrity, reliability, and customer satisfaction, we have become a trusted partner for companies across various industries.",
  },
  {
    icon: "💵",
    title: "Reliable Partnerships",
    description:
      "We have built strong and reliable partnerships with reputable suppliers, manufacturers, logistics providers, and government agencies worldwide. These partnerships enable us to offer seamless and efficient import and export services, ensuring smooth operations, timely deliveries, and cost-effective solutions for your business.",
  },
  {
    icon: "👥",
    title: "Exceptional Customer Service",
    description:
      "We prioritize delivering an exceptional customer experience. Our dedicated team is always ready to assist you, providing timely and responsive support at every step. Whether you have questions, need assistance, or require strategic guidance, we are committed to going above and beyond to ensure your satisfaction and success.",
  },
  {
    icon: "✔️",
    title: "Ethical and Sustainable Practices",
    description:
      "We believe in conducting business with integrity and sustainability in mind. Our commitment to ethical practices extends to environmental stewardship, fair trade, and community engagement. By choosing us, you align your business with responsible values and contribute to a more sustainable and equitable global trade ecosystem.",
  },
  {
    icon: "🔓",
    title: "Tailored Solutions",
    description:
      "We understand that every business has unique import and export requirements. That's why we offer tailored solutions designed to meet your specific needs. Our team takes the time to understand your goals, challenges, and industry dynamics, allowing us to develop personalized strategies and deliver exceptional results.",
  },
  {
    icon: "🏆",
    title: "Technology-driven Efficiency",
    description:
      "At Satyamev International Import Export, we leverage the power of technology to enhance efficiency and accuracy in our operations. From advanced tracking systems to automated documentation processes, we employ cutting-edge tools to streamline workflows, reduce errors, and ensure seamless communication throughout the import and export journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Choose?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-4xl bg-orange-500 text-white rounded-full p-3">
              {feature.icon}
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;