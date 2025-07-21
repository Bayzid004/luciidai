import React from "react";

const TextareaField = ({
  label,
  id,
  placeholder,
  required,
  register,
  errors,
}) => {
  return (
    <div className="contact-form__field w-full pb-[35px]">
      <label
        className="contact-form__label text-base 5xl:text-lg font-normal text-[#0E6260] leading-normal"
        htmlFor={id}
      >
        {label} {required && <sup className="text-[#0E6260]">*</sup>}
      </label>
      <textarea
        className="contact-form__textarea w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal bg-[#188B8926] rounded-md"
        id={id}
        placeholder={placeholder}
        {...register(id, { required })}
      ></textarea>
      {errors[id] && (
        <span className="text-red-500 text-sm">This field is required</span>
      )}
    </div>
  );
};

export default TextareaField;
