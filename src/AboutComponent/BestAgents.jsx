import React from "react";
import { motion } from "framer-motion";

export default function BestAgents() {
  const agents = [
    {
      name: "David Richard",
      role: "Branch Manager",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      name: "Bobby Jenkins",
      role: "Branch Manager",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      name: "Hallie Moss",
      role: "CEO",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full py-16 px-4 md:px-10 lg:px-20">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-bold text-primary mb-12"
      >
        Meet the Best Agents
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img
              src={agent.img}
              alt={agent.name}
              className="w-full h-72 object-cover"
            />

            <div className="bg-primary text-white p-6">
              <h2 className="text-2xl font-semibold">{agent.name}</h2>
              <p className="mt-2 opacity-90">{agent.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
