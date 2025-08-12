// client/src/pages/donor/DonationForm.jsx
import { useState } from "react";

export default function DonationForm({ onSubmit }) {
  const [type, setType] = useState("Laptop");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationData = { type, description, details };
    onSubmit?.(donationData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Type of Donation</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
          >
            <option value="Laptop">Laptop</option>
            <option value="Funds">Funds</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brand, specs, condition..."
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Pickup/Delivery */}
        <div>
          <label className="block text-sm font-medium mb-1">Pickup / Delivery Details</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Address or meeting location..."
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
}
