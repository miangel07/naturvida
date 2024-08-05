"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useProductoQuery } from "@/store/productos";
import { useFacturasQuery } from "@/store/factura";
import { detallePost } from "@/store/detalle";
import { useMutation } from "@tanstack/react-query";

const DetalleComponets = () => {
  const { data: productos, isLoading } = useProductoQuery();
  const { data: facturas, isLoading: isLoingfactura } = useFacturasQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const DetalleMutation = useMutation({
    mutationFn: detallePost,
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        alert(data.data.message);
      }
    },
    onError: (error) => {
      console.log("Error al crear detalles", error);
    },
  });
  const onSubmit = (data) => {
    DetalleMutation.mutate(data);
    reset();
  };

  if (isLoading && isLoingfactura) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full justify-center flex items-center h-screen">
      <form
        className="flex w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-[500px] flex flex-col  pb-4 pl-4 pr-4 pt-4 justify-between h-60 rounded-lg border-solid border-2 border-slate-200 ">
          <div className="flex flex-col w-[300px]">
            <label>Nombre Del Cliente de La Factura</label>
            <select
              {...register("numero", {
                required: {
                  value: true,
                  message: "Debe seleccionar El clinete",
                },
              })}
            >
              <option value="" hidden>
                Selecione un Cliente
              </option>
              {facturas?.map((factura) => (
                <option key={factura._id} value={factura._id}>
                  {factura.cliente.nombre}
                </option>
              ))}
            </select>
            {errors.numero && (
              <p className="text-red-500">{errors.numero.message}</p>
            )}
          </div>
          <div className="flex flex-col w-[300px]">
            <label>Productos</label>
            <select
              {...register("producto", {
                required: {
                  value: true,
                  message: "Debe seleccionar un producto",
                },
              })}
            >
              <option value="" hidden>
                Selecione un producto
              </option>
              {productos?.map((items) => (
                <option key={items._id} value={items._id}>
                  {items.descripcion}
                </option>
              ))}
            </select>
            {errors.producto && (
              <p className="text-red-500">{errors.producto.message}</p>
            )}
          </div>
          <div className="flex flex-col mt-4 w-[300px]">
            <input
              className=" border-gray-700 border-solid border-2 rounded-lg pl-3"
              type="number"
              placeholder="Ingre la cantidad de producto"
              {...register("cantidad", {
                required: {
                  value: true,
                  message: "La cantidad es obligatoria",
                },
              })}
            />
            {errors.cantidad && (
              <p className="text-red-500">{errors.cantidad.message}</p>
            )}
          </div>
          <button className=" w-28 " type="submit">
            enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetalleComponets;
