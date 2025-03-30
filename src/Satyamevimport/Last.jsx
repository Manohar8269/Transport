import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from '../assets/training-center.png';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-30 px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <img src={Logo} alt="Satyamev Logo" className="h-12 mb-4" />
          <p>
            Are you ready to explore the exciting world of import-export and tap into the vast opportunities it offers? Look no further than <strong>Satyamev Import-Export Training Center</strong>, your premier destination for comprehensive and specialized training in the field of international trade.
          </p>
          <div className="flex space-x-5 mt-8">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">Company</h3>
          <ul className="space-y-2">
          <li><Link to = "/Home">Home</Link></li>
            <li><Link to = "/Aboutus">About</Link></li>
            <li><Link to = "/Course">Course</Link></li>
            <li><Link to = "/Service">Service</Link></li>
            <li><a href="#" className="hover:text-gray-400">Gallery</a></li>
            <li><Link to = "/admission">Admission Open</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
          <p><strong>Address :</strong> 810, Silver Trade Center, Near VIP Circle, Mota Varaccha, Surat, Gujarat 394101</p>
          <p><strong>Mail :</strong> <a href="mailto:info@sietc.in" className="text-blue-400">info@sietc.in</a></p>
          <p><strong>Phone Number :</strong></p>
          <p className="text-blue-400">+91 7600 230 298</p>
          <p className="text-blue-400">+91 7600 230 241</p>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        Copyright &copy; 2025 SIETC - Satyamev Import Export Training Center | Powered by SIETC - Satyamev Import Export Training Center
      </div>
    </footer>
  );
}