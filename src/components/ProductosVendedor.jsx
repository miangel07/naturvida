import React, { useState } from "react";
import { useVendedorQuery } from "@/store/vendedor";
import { useForm } from "react-hook-form";
import { vendedorProducto } from "@/store/consultas";
import { useMutation } from "@tanstack/react-query";

const ProductosVendedor = () => {
  const { data: vendedor } = useVendedorQuery();
  const [dataProductos, setDataProductos] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const useMutationVendedor = useMutation({
    mutationFn: vendedorProducto,
    onSuccess: (data) => {
      setDataProductos(data.productos_Vendidos);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const onsubmit = (data) => {
    useMutationVendedor.mutate(data);
    console.log(data);
  };
  const dataConsulta = dataProductos
    ? dataProductos.map((item, index) => (
        <div key={index}>
          <p>*{item.producto.nombre}</p>
        </div>
      ))
    : "";

  return (
    <div className=" flex  gap-4 flex-col">
      <form className="flex flex-row gap-3" onSubmit={handleSubmit(onsubmit)}>
        <select
          {...register("vendedor", {
            required: {
              value: true,
              message: `el campo vendedor es obligatorio`,
            },
          })}
          className="rounded-lg outline outline-offset-0"
        >
          <option value="">Selecione una opcion</option>
          {vendedor?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.usuario}
            </option>
          ))}
        </select>

        <input
          className="bg-blue-400 text-white rounded-lg w-24 cursor-pointer"
          type="submit"
          value={"enviar"}
        />
      </form>
      {errors.vendedor && (
        <p className="text-amber-700">{errors.vendedor.message}</p>
      )}
      <div>
        <h1>Lista de productos segun vendedor</h1>
        {dataConsulta}
      </div>
    </div>
  );
};

export default ProductosVendedor;
