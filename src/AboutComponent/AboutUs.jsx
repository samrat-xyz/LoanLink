import React from "react";

export default function AboutUs() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Subtitle */}
      <p className="text-sm font-medium text-primary flex items-center gap-3">
        Get To Know About Us
        <span className="w-12 h-[2px] bg-primary inline-block"></span>
      </p>

      {/* Title & Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
        {/* Left Title */}
        <h2 className="text-4xl font-bold  leading-snug">
          Few Words About Our <br /> LoanLink


        </h2>

        {/* Right Description */}
        <p className="leading-7 text-[15px]">
          About our LoanLink company — we provide quick and secure loan
          services to customers with a smooth and transparent process.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.  
          <br /><br />
          Our goal is to support small and middle-scale businesses with accessible funding
          and create financial opportunities for everyone.
        </p>
      </div>
    </section>
  );
}
