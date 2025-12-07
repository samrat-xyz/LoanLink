import React from "react";
import { motion } from "framer-motion";
import { Users, Wallet, CheckCircle, TrendingUp } from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Total Users",
    value: "12,450+",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Loans Approved",
    value: "8,320+",
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Total Disbursed",
    value: "$2.4M+",
    icon: <Wallet className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Success Rate",
    value: "96%",
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* ✅ Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Platform in Numbers
          </h2>
          <p className="text-base-content/70 max-w-xl mx-auto">
            Trusted by thousands of users for fast, secure, and reliable microloans.
          </p>
        </div>

        {/* ✅ Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="card bg-base-200 shadow-md p-6 rounded-xl text-center hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* ✅ Icon */}
              <div className="flex justify-center mb-4 text-primary">
                {stat.icon}
              </div>

              {/* ✅ Value */}
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>

              {/* ✅ Title */}
              <p className="text-base-content/70 font-medium">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
