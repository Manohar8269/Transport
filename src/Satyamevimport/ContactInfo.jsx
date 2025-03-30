import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-3xl mb-2" />,
      title: "Address",
      details: "810, Silver Trade Center, Near VIP Circle, Mota Varaccha, Surat, Gujarat 394101",
    },
    {
      icon: <FaPhoneAlt className="text-blue-600 text-3xl mb-2" />,
      title: "Phone Number",
      details: "+91 7600 230 298",
    },
    {
      icon: <FaEnvelope className="text-blue-600 text-3xl mb-2" />,
      title: "Mail",
      details: "info@sietc.in",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-gray-50">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 text-center w-80 h-48 flex flex-col justify-center items-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-2 hover:border-blue-500"
        >
          {contact.icon}
          <h3 className="text-lg font-semibold mt-2">{contact.title}</h3>
          <p className="text-gray-600 mt-1 text-sm text-center max-w-[90%]">{contact.details}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
