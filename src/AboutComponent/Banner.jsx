import React from "react";
import { NavLink } from "react-router";
import bgImage from "../assets/banner-bg.png"; // এখানে তোমার ব্যাকগ্রাউন্ড ইমেজ দিবে

export default function Banner() {
  return (
    <div
      className="w-full h-64 bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B1F35]/70"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-white/80 text-sm mb-4">
          <NavLink to="/" className="hover:text-white">
            Home
          </NavLink>
          <span>/</span>
          <NavLink to="/about" className="text-white">
            About Us
          </NavLink>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </div>
    </div>
  );
}
