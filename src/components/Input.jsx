import React from "react";

const Input = ({ placeholder, name, errors, type, register }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...register(name, {
          required: {
            value: true,
            message: `${name} es obligatorio`,
          },
        })}
        className="w-full text-black h-[36px] rounded-lg outline-none pl-3 border-solid border-2"
      min={1}/>
      {errors && errors[name] && (
        <p className="text-amber-700">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Input;
