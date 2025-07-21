"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import { mailSendHandler } from "@/libs/mailSendHandeler";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mailSendHandler({data, reset, setIsLoading, toast});
  };



  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form__row w-full flex justify-between items-center gap-[20px]">
        <InputField
          label="Your Name"
          id="name"
          type="text"
          placeholder="Enter Your Name"
          required
          register={register}
          errors={errors}
        />
        <InputField
          label="Your Email"
          id="email"
          type="email"
          placeholder="Enter Your Email"
          required
          register={register}
          errors={errors}
        />
      </div>

      <div className="contact-form__row w-full flex items-center gap-[20px] py-[25px]">
        <InputField
          label="Subject"
          id="subject"
          type="text"
          placeholder="Subject"
          required
          register={register}
          errors={errors}
        />
        <InputField
          label="Your Phone"
          id="phone"
          type="tel"
          placeholder="Enter Phone Number"
          required
          register={register}
          errors={errors}
          pattern={{
            value: /^\+?\d{1,14}$/,
            message: "Please enter a valid phone number",
          }}
        />
      </div>

      <TextareaField
        label="Message"
        id="message"
        placeholder="Write Message"
        required
        register={register}
        errors={errors}
      />

      <div className="contact-form__submit flex justify-start pb-[28px] md:pb-0">
        <button
          type="submit"
          className="contact-form__button flex items-center gap-[5px] text-lg font-normal py-[7px] px-[33px] bg-[#04672E] rounded text-white"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Submit"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
          >
            <path
              d="M1.614 2.76096L7.66652 5.26541L1.614 4.48763V2.76096ZM7.66652 9.54319L1.614 12.0476V10.321L7.66652 9.54319ZM0 0.404297V5.84874L12.105 7.4043L0 8.95985V14.4043L16.947 7.4043L0 0.404297Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
