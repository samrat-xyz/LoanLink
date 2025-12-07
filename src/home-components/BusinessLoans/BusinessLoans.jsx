import React from "react";
import { FaHandHoldingUsd, FaClipboardCheck, FaGlobe } from "react-icons/fa";

function BusinessLoans() {
  const features = [
    {
      icon: <FaHandHoldingUsd className="text-blue-500 w-10 h-10" />,
      title: "Very Low Rates on All Loans",
    },
    {
      icon: <FaClipboardCheck className="text-blue-500 w-10 h-10" />,
      title: "99.9% Success Rate Guarantee",
    },
    {
      icon: <FaGlobe className="text-blue-500 w-10 h-10" />,
      title: "Flexible with Your Repayments",
    },
  ];

  return (
    <section className="bg-base-100  py-16 px-12">
      {" "}
      <div className="container mx-auto px-4">
        {/* Header */}{" "}
        <div className="md:flex md:justify-between md:items-start mb-12">
          {" "}
          <div className="md:w-1/2">
            {" "}
            <p className="text-primary font-medium flex items-center gap-2">
          Get to Know About
          <span className="w-10 h-[2px] bg-primary inline-block"></span>
        </p>
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Flexible and Quick Business Loans For You{" "}
            </h2>{" "}
          </div>{" "}
         
        </div>
     
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-base-100 shadow-md rounded-xl p-6 flex items-center space-x-4 hover:shadow-xl transition"
            >
              <div>{feature.icon}</div>
              <h3 className="text-lg font-medium">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessLoans;
