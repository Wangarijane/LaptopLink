import { useState } from "react";

export default function DonorMessages({ messages = [], onSend }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      onSend?.(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      
      {/* Messages List */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === "donor"
                ? "bg-blue-100 self-end"
                : "bg-gray-100 self-start"
            }`}
          >
            <p>{msg.text}</p>
            <span className="block text-xs text-gray-500">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg p-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
