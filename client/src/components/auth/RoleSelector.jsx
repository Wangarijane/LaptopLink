// src/components/auth/RoleSelector.jsx
const RoleSelector = ({ selectedRole, onChange }) => {
  const roles = ["student", "admin", "donor"];

  return (
    <div className="flex justify-center gap-4 flex-wrap mb-6 animate-fadeIn">
      {roles.map((role) => {
        const isSelected = selectedRole === role;
        return (
          <button
            key={role}
            onClick={() => onChange(role)}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium capitalize shadow-md ${
              isSelected
                ? "bg-blue-600 text-white scale-105 shadow-blue-300"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {role}
          </button>
        );
      })}
    </div>
  );
};

export default RoleSelector;
