import React from "react";

const InputField = ({
  label,
  id,
  type,
  placeholder,
  required,
  register,
  errors,
  pattern,
}) => {
  return (
    <div className="contact-form__field w-1/2">
      <label
        className="contact-form__label text-base 5xl:text-lg font-normal text-[#0E6260] leading-normal"
        htmlFor={id}
      >
        {label} {required && <sup className="text-[#0E6260]">*</sup>}
      </label>
      <input
        className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal bg-[#188B8926] rounded-md"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, { required, pattern })}
      />
      {errors[id] && (
        <span className="text-red-500 text-sm">This field is required</span>
      )}
    </div>
  );
};

export default InputField;
