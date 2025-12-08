import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      theme: "dark",
      icon: "success",
      title: "Message Sent",
      text: "Your query has been submitted successfully!",
      confirmButtonColor: "#3085d6",
    });
    reset();
  };

  return (
    <div className="w-full py-16 px-4 md:px-16 grid md:grid-cols-2 gap-10">
      
      {/* Left Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div>
          <p className="text-primary font-semibold">Get in touch with us</p>
          <h1 className="text-4xl font-bold mt-2">Ask for your query</h1>
        </div>

        {/* Call */}
        <div className="flex items-start gap-4 border-b pb-6">
          <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
            <FaPhoneAlt />
          </div>
          <div>
            <h2 className="text-xl font-bold">Call Anytime</h2>
            <p className="text-gray-600">+880 1234-567890</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 border-b pb-6">
          <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
            <FaEnvelope />
          </div>
          <div>
            <h2 className="text-xl font-bold">Write Email</h2>
            <p className="text-gray-600">support@LoanLink.com</p>
          </div>
        </div>

        {/* Office */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h2 className="text-xl font-bold">Visit Office</h2>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>
      </motion.div>

      {/* Right Section – Form */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className="p-4 border border-primary rounded-md w-full 
                       focus:border-primary focus:ring-1 focus:ring-primary"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            className="p-4 border border-primary rounded-md w-full 
                       focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <div className="grid grid-cols-2 gap-4">
          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone")}
            className="p-4 border border-primary rounded-md w-full 
                       focus:border-primary focus:ring-1 focus:ring-primary"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="p-4 border border-primary rounded-md w-full 
                       focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Write Message"
          rows="6"
          {...register("message", { required: "Message is required" })}
          className="p-4 border border-primary rounded-md w-full 
                     focus:border-primary focus:ring-1 focus:ring-primary"
        ></textarea>

        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-md font-semibold"
        >
          Send A Message
        </button>
      </motion.form>
    </div>
  );
}
