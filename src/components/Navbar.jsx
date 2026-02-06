import React from 'react'
import { Bell, Settings, Search } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-6">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Menu icon */}
        <button className="text-gray-600 text-xl">☰</button>

        {/* Search box */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Ctrl + K"
            className="pl-10 pr-4 py-2 bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Settings */}
        <Settings className="text-gray-600 cursor-pointer" size={20} />

        {/* Notifications */}
        <div className="relative">
          <Bell className="text-gray-600 cursor-pointer" size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] bg-blue-500 text-white rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-full"
          />
        </div>
        </div>
    </div>
  );
};

export default Navbar
