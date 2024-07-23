"use client";
import React, { useState } from "react";
import Menu from "../Menu";
import Modal from "../Modal";
import TableComponet from "../Table";
import From from "../From";

const Cliente = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  const handleOpen = () => {
    setShowModal(false);
  };


  const modal = showModal? <Modal visible={true} title={"Registrar Cliente"} children={<From/>} closeModal={handleOpen}/> :""
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
