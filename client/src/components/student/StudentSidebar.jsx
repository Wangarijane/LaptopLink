// client/src/components/student/StudentSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiUser,
  FiMonitor,
  FiInfo,
  FiBell,
  FiHelpCircle,
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext'; // ✅ Adjust path if needed

const navItems = [
  { label: 'Dashboard', to: '/dashboard/student', icon: <FiHome /> },
  { label: 'Profile', to: '/dashboard/student/profile', icon: <FiUser /> },
  { label: 'Laptop Info', to: '/dashboard/student/laptop', icon: <FiMonitor /> },
  { label: 'Status', to: '/dashboard/student/status', icon: <FiInfo /> },
  { label: 'Notifications', to: '/dashboard/student/notifications', icon: <FiBell /> },
  { label: 'Support', to: '/dashboard/student/support', icon: <FiHelpCircle /> },
];

const StudentSidebar = ({ onClose }) => {
  const { user } = useAuth();

  return (
    <div className="h-full p-4 bg-white border-r">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600">LaptopLink</h2>
        {user && (
          <div className="mt-4">
            <p className="text-gray-700 text-sm">Welcome,</p>
            <p className="font-semibold text-gray-900">{user.name}</p>
          </div>
        )}
      </div>

      <nav className="flex flex-col space-y-2">
        {navItems.map(({ label, to, icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            onClick={onClose} // 👈 Automatically close sidebar drawer
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${
                isActive
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default StudentSidebar;
