import { useState } from "react";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className=" bg-gray-100 p-6 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Student Name <span className="text-red-500">*</span></label>
          <div className="flex gap-2">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First" className="border p-2 w-1/2 rounded" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last" className="border p-2 w-1/2 rounded" required />
          </div>
        </div>
        
        <div>
          <label className="block font-semibold">Phone Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border p-2 w-full rounded" required />
        </div>

        <div>
          <label className="block font-semibold">Student Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full rounded" required />
        </div>

        <div>
          <label className="block font-semibold">Comment or Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Drop your message (Optional)" className="border p-2 w-full rounded" rows="4"></textarea>
        </div>

        <div className="text-left">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 w-1/4 rounded hover:bg-blue-700"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
