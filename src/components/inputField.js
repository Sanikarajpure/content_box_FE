// InputField.js

import React from "react";

const InputField = ({ id, name, type, placeholder, register, errors }) => {
  return (
    <>
      <input
        className="appearance-none transition-border-color duration-200 border bg-light-hover rounded border-light-accent focus:border-light-call-sec border-dark-accent dark:bg-dark-bg dark:focus:border-white w-full py-2 px-3 text-light-text-small text-sm font-semibold focus:outline-none"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors && (
        <div
          className="invalid-feedback text-output-error text-xs px-2 pt-1"
          style={errors[name] ? { display: "block" } : {}}
        >
          {errors[name]?.message}
        </div>
      )}
    </>
  );
};

export default InputField;
