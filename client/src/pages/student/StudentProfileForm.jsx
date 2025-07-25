// src/components/student/StudentProfileForm.jsx
import React, { useState } from 'react';

const StudentProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    school: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile submitted:', formData);
    // TODO: Add backend integration
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Update Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Jane Muriithi"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="jane@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="0712 345 678"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">School Name</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Nairobi Technical Training Institute"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Course of Study</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Diploma in Information Technology"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default StudentProfileForm;
