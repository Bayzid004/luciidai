'use client'
import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="w-full bg-[#F4F7FB] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h3 className="text-pink-500 font-bold text-lg mb-2">CONTACT US</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Leave a Message</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Left Card */}
        <div className="bg-white shadow-xl p-6 text-left relative">
          <div className="absolute -bottom-3 -right-3 bg-white shadow-xl w-full h-full -z-10 rounded-md"></div>

          <div className="flex items-center gap-3 mb-6">
            <Image src="/locationIcon.png" alt="Location" width={24} height={24} />
            <h4 className="font-bold text-lg">Location</h4>
          </div>
          <p className="text-gray-700 mb-6">
            House: 6, Road: 3, Block: D, <br />
            Bosila Garden City, <br />
            Mohammadpur Dhaka - 1207, <br />
            Bangladesh
          </p>

          <hr className="my-4" />

          <div className="flex items-center gap-3 mt-6">
            <Image src="/mailIcon.png" alt="Mail" width={24} height={24} />
            <h4 className="font-bold text-lg">Send A Mail</h4>
          </div>
          <p className="text-gray-700 mt-2">hr@genmorphicsai.com</p>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-xl font-bold mb-4">We’d love to hear from you anytime</h3>

          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-pink-500"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email*"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-pink-500"
            />
            <input
              type="text"
              placeholder="Phone"
              {...register("phone")}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-pink-500"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Tell Us About Project *"
            {...register("message", { required: true })}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-pink-500"
          ></textarea>

          <button
            type="submit"
            className="mt-4 flex items-center gap-2 bg-white border border-gray-300 px-6 py-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition"
          >
            Send Message
            <Send className="text-pink-500 group-hover:text-white" size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
