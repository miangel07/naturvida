import React from "react";

const Select = ({ data, register, name, errors }) => {
  return (
    <>
      <select
        {...register(name, {
          required: {
            value: true,
            message: `${name} es obligatorio`,
          },
        })}
      >
        <option value="" hidden>
          Selecione una opcion
        </option>
        {data?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.nombre}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <p className="text-amber-700">{errors[name].message}</p>
      )}
    </>
  );
};

export default Select;
