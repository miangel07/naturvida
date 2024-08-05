import React, { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { listarfecha } from "@/store/consultas";

const ListarFecha = () => {
  const [data, setData] = useState(false);
  const [errorData, setErrorData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const useMutationListarFecha = useMutation({
    mutationFn: listarfecha,
    onSuccess: (data) => {
      if (data.status === 200) {
        setData(data.detalles);
        setErrorData("")
      } else {
        setErrorData(data.message);
        setData(false);
      }
    },
    onError: (error) => {
      console.log("Error:", error);
    },
    refetchInterval: 30000,
  });
  const onsubmit = (data) => {
    useMutationListarFecha.mutate(data);
  };
  const dataFecha = data ? (
    <ul>
      {data.map((item, index) => (
        <li key={index}>-{item.producto.nombre}</li>
      ))}
    </ul>
  ) : (
    ""
  );
  const error = errorData ? <p>{errorData}</p> : "";
  return (
    <div className="flex gap-4 flex-col">
      <p>Listar las ventas de los productos de acuerdo con un rango de fecha</p>
      <form className="flex gap-3" onSubmit={handleSubmit(onsubmit)}>
        <Input
          errors={errors}
          name={"fecha_inicio"}
          placeholder={"Tipo Fecha aa/dd/mm"}
          type={"date"}
          register={register}
        />
        <Input
          errors={errors}
          name={"fecha_fin"}
          placeholder={"Tipo Fecha aa/dd/mm"}
          type={"date"}
          register={register}
        />
        <input
          className="w-16 h-10 text-white bg-blue-400 rounded-lg"
          type="submit"
        />
      </form>

      <div>
        <p>Ventas</p>
        {error}
        {dataFecha}
      </div>
    </div>
  );
};

export default ListarFecha;
