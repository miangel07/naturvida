"use client";
import React, { useState } from "react";
import Menu from "../Menu";
import TableProducto from "../TableProducto";
import Modal from "../Modal";
import From from "../From";
import { useMutation } from "@tanstack/react-query";
import { ProductoPost } from "@/store/productos";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { useRefresh } from "@/context";

const Producto = () => {
  const { setRefresh } = useRefresh();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(false);
  };

  const useMutationProducto = useMutation({
    mutationFn: ProductoPost,
    onSuccess: (data) => {
      console.log("Success", data);
      alert(data);
      setShowModal(false);
    },
    onError: (error) => {
      console.error("Error", error.message);
    },
  });

  const onsubmit = (data) => {
    useMutationProducto.mutate(data);
    reset();
    setRefresh(true);
  };

  const handleModal = () => {
    setShowModal(true);
  };

  const modal = showModal ? (
    <Modal
      visible={true}
      title={"Registrar Producto"}
      children={
        <From onSubmit={handleSubmit(onsubmit)} valor={"registrar"}>
          <label className="font-bold">codigo</label>
          <Input
            errors={errors}
            name="codigo"
            placeholder="12356"
            type="number"
            register={register}
          />
          <label className="font-bold">descripcion</label>
          <Input
            errors={errors}
            name="descripcion"
            placeholder=""
            type="text"
            register={register}
          />
          <label className="font-bold">valor</label>
          <Input
            errors={errors}
            name="valor"
            placeholder="35000"
            type="number"
            register={register}
          />
          <label className="font-bold">cantidad</label>
          <Input
            errors={errors}
            name="cantidad"
            placeholder="Ejemplo 5"
            type="number"
            register={register}
          />
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
      <div className="w-full h-screen">
        {modal}
        <div className="w-full justify-center flex flex-col gap-6 mt-5">
          <div className="justify-center w-full flex">
            <h1 className="text-black text-4xl">Productos</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="ml-3">
              <button
                onClick={handleModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Agregar Productos
              </button>
            </div>
            <TableProducto />
          </div>
        </div>
      </div>
    </>
  );
};

export default Producto;
