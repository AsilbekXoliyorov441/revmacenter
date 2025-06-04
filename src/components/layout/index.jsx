import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import { FaPhone } from "react-icons/fa";


const Layout = () => {
  return (
    <div className="flex relative flex-col min-h-screen">
      <a
        href="tel:+998998180111"
        className="fixed bottom-6  md:hidden right-6 z-50 group"
        aria-label="Call us"
      >
        {/* Outer pulse ring */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="animate-ping shadow-2xl absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60"></span>
        </span>

        {/* Main button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
          <FaPhone className="w-6 h-6" />
        </div>
      </a>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout