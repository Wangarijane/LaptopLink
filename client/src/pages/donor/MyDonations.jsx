export default function MyDonations({ donations = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">My Donations</h2>
      {donations.length === 0 ? (
        <p className="text-gray-500">No donations yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((d, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{d.date}</td>
                <td className="p-2">{d.description}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      d.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : d.status === "In Transit"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {d.status}
                  </span>
                </td>
                <td className="p-2 space-x-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-red-600 hover:underline">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
