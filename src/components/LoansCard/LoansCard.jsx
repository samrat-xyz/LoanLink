import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function LoansCard({ loan }) {
  const { image, description, title } = loan;
  
  return (
    <motion.div
      className="bg-base-100 rounded-2xl shadow-md overflow-hidden w-full group hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}    
      animate={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
     
      <div className="h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

     
      <div className="p-6 space-y-3">
        <h3 className="text-xl text-primary font-semibold">
          {title}
        </h3>

        <p className="text-base-content/70 leading-relaxed">
          {description}
        </p>

        
        <button
          className="mt-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer 
          hover:bg-primary/90 transition-all duration-300 group-hover:translate-x-1"
          aria-label="View Loan Details"
        >
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

export default LoansCard;
