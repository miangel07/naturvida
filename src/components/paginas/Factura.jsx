"use client";
import React, { useState } from "react";
import Menu from "../Menu";
import TableFacturas from "../TableFacturas";
import Modal from "../Modal";
import From from "../From";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Select from "../Select";
import { useClienteQuery } from "@/store/clientes";
import { useVendedorQuery } from "@/store/vendedor";
import { FacturaPost } from "@/store/factura";
import { useMutation } from "@tanstack/react-query";
import { useRefresh } from "@/context";

const Factura = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {setRefresh}=useRefresh()
  const { data: clientes, isLoading } = useClienteQuery();
  const { data: vendedor, isLoading: vendedoresLoading } = useVendedorQuery();
  const [showModal, setShowModal] = useState(false);

  const useFacturaPost = useMutation({
    mutationFn: FacturaPost,
    onSuccess: (data) => {
      alert(data);
      setShowModal(false);
      reset();
    },
    onError: (error) => {
      console.error("Error", error.message);
    },
  });

  const onsubmit = (data) => {
    useFacturaPost.mutate(data);
    setRefresh(true)
    
  };

  const handleOpen = () => {
    setShowModal(false);
  };
  const handleModal = () => {
    setShowModal(true);
  };
  const handleonChange = (e) => {
    setValue(e.target.value);
  };
  if (isLoading && vendedoresLoading) {
    return <p>Loading...</p>;
  }
  const modal = showModal ? (
    <Modal
      visible={true}
      title={"Registrar Factura"}
      children={
        <From onSubmit={handleSubmit(onsubmit)} valor={"registrar"}>
          <label className="font-bold">fecha</label>
          <Input
            errors={errors}
            name="fecha"
            placeholder="12356"
            type="date"
            register={register}
          />
          <label className="font-bold">cliente</label>
          <Select
            errors={errors}
            register={register}
            name={"cliente"}
            data={clientes}
            handleonChange={handleonChange}
          />
          <label className="font-bold">valorTotal</label>
          <Input
            errors={errors}
            name="valorTotal"
            placeholder="35000"
            type="number"
            register={register}
          />
          <label className="font-bold">vendedor</label>

          <select
            {...register("vendedor", {
              required: {
                value: true,
                message: `el campo vendedor es obligatorio`,
              },
            })}
          >
            <option value="">Selecione una opcion</option>
            {vendedor?.map((item) => (
              <option key={item._id} value={item._id}>
                {item.usuario}
              </option>
            ))}
          </select>
          {errors.vendedor && (
            <p className="text-amber-700">{errors.vendedor.message}</p>
          )}
        </From>
      }
      closeModal={handleOpen}
    />
  ) : (
    ""
  );
  return (
    <>
      <Menu />
      <div className=" w-full  h-screen  ">
        {modal}
        <div className="w-full justify-center flex  flex-col gap-6 mt-5">
          <div className="justify-center w-full flex">
            <h1 className="text-black text-4xl">Facturas</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="ml-3">
              <button
                onClick={handleModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Agregar Cliente
              </button>
            </div>
            <TableFacturas />
          </div>
        </div>
      </div>
    </>
  );
};

export default Factura;
