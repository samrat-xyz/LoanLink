import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Small Business Owner",
    review:
      "MicroLoan-Hub helped me expand my shop within weeks. The process was smooth and approval was super fast!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Ayesha Rahman",
    role: "Freelancer",
    review:
      "I needed quick funds to buy my laptop. This platform made everything so easy and reliable!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    role: "Startup Founder",
    review:
      "I applied for a startup loan and got approval without any hassle. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* ✅ Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base-content/70 max-w-xl mx-auto">
            Real feedback from people who trusted MicroLoan-Hub for their financial needs.
          </p>
        </div>

        {/* ✅ Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="card bg-base-100 shadow-md p-6 rounded-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* ✅ User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-base-content/60">{item.role}</p>
                </div>
              </div>

              {/* ✅ Review */}
              <p className="text-base-content/80 italic leading-relaxed">
                “{item.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
