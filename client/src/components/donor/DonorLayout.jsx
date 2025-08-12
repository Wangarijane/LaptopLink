import React, { useState } from 'react';
import DonorSidebar from './DonorSidebar';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';

const DonorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <DonorSidebar />
      </div>

      {/* Sidebar drawer for mobile */}
      <div
        className={`fixed inset-0 z-50 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeSidebar}
        />
        <div className="relative w-64 h-full bg-white border-r z-50">
          <DonorSidebar onClose={closeSidebar} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto w-full">
        {/* Top navbar */}
        <header className="md:hidden p-4 flex items-center justify-between bg-green-600 text-white shadow">
          <button onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold">Donor Dashboard</h1>
          <div className="w-6" /> {/* Placeholder */}
        </header>

        {/* Content area */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DonorLayout;

