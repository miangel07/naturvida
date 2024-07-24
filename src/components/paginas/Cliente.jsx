"use client";
import React, { useState } from "react";
import Menu from "../Menu";
import Modal from "../Modal";
import TableComponet from "../Table";
import From from "../From";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { ClientePost } from "@/store/clientes";
import { useMutation } from "@tanstack/react-query";
import { useRefresh } from "@/context";

const Cliente = () => {
  const {setRefresh} = useRefresh();
  const [showModal, setShowModal] = useState(false);
  const useMutationCliente = useMutation({
    mutationFn: ClientePost,
    onSuccess: (data) => {
      console.log("Success", data);
      alert(data);
      setShowModal(false);
    },
    onError: (error) => {
      console.error("Error", error.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleModal = () => {
    setShowModal(true);
  };
  const handleOpen = () => {
    setShowModal(false);
  };
  const onsubmit = (data) => {
    useMutationCliente.mutate(data);
    reset();
    setRefresh(true);
  };

  const modal = showModal ? (
    <Modal
      visible={true}
      title={"Registrar Cliente"}
      children={
        <From onSubmit={handleSubmit(onsubmit)} valor={"Registrar"}>
          <label className="font-bold">Numero De Cedula</label>
          <Input
            erros={errors}
            name={"cedula"}
            placeholder={"Ejemplo 1006452385"}
            type={"number"}
            register={register}
          />
          <label className="font-bold">Nombre</label>
          <Input
            erros={errors}
            name={"nombre"}
            placeholder={"Miguel Osorio"}
            type={"text"}
            register={register}
          />{" "}
          <label className="font-bold">Dirrecion</label>
          <Input
            erros={errors}
            name={"direccion"}
            placeholder={"Ejemplo 3136156071"}
            type={"text"}
            register={register}
          />{" "}
          <label className="font-bold">Telefono</label>
          <Input
            erros={errors}
            name={"telefono"}
            placeholder={"Ejemplo 1006452385"}
            type={"number"}
            register={register}
          />{" "}
          <label className="font-bold">Correo</label>
          <Input
            erros={errors}
            name={"email"}
            placeholder={"Ejemplo Miguel@gmail.com"}
            type={"email"}
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
      <div className=" w-full  h-screen  ">
        <div className="w-full justify-center flex  flex-col gap-6 mt-5">
          <div className="justify-center w-full flex">
            {modal}
            <h1 className="text-black text-4xl">Clientes</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="ml-3">
              <button
                onClick={() => handleModal()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Agregar Cliente
              </button>
            </div>
            <TableComponet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cliente;
