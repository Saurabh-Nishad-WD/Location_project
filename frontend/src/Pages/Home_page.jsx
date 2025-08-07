import React from 'react'
import { FaBell, FaHome, FaSearch, FaEnvelope, FaUser } from 'react-icons/fa'

const Home_page = () => {
  return (
    <div className="relative min-h-screen pb-[10vh]">
      {/* === Top Navbar === */}
      <div className="bg-amber-200 h-[10vh] w-full flex items-center  px-6">
        {/* Logo */}
        <div className="text-xl font-bold">MyLogo</div>

        {/* Search + Links (hidden on small screens) */}
        <div className="flex items-center pl-2 space-x-8">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-[40vw]"
          />
        </div>
 
        <div className="absolute right-0 flex p-5">
                 <div className="hidden space-x-6 pr-5 md:block">
            <button className="hover:text-blue-600">Home</button>
            <button className="hover:text-blue-600">Explore</button>
            <button className="hover:text-blue-600">Messages</button>
            <button className="hover:text-blue-600">Profile</button>
          </div>
        {/* Notification bell */}
        <div className="text-2xl cursor-pointer hover:text-blue-600  md:block">
          <FaBell />
        </div>
        </div>
      </div>

      {/* === Page Content Placeholder === */}
      <div className="p-6">
        <p>Page content here...</p>
      </div>

      {/* === Bottom Nav (Mobile Only) === */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around items-center h-[10vh] md:hidden">
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500">
          <FaHome className="text-xl" />
          Home
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500">
          <FaSearch className="text-xl" />
          Explore
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500">
          <FaEnvelope className="text-xl" />
          Messages
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500">
          <FaUser className="text-xl" />
          Profile
        </button>
      </div>
    </div>
  )
}

export default Home_page
