"use client";
import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import TableFacturas from "../TableFacturas";
import Modal from "../Modal";
import Cariito from "../Cariito";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Select from "../Select";
import { useClienteQuery } from "@/store/clientes";
import { useVendedorQuery } from "@/store/vendedor";
import { useRefresh } from "@/context";
import { useProductoQuery } from "@/store/productos";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "@/utils/store";
import { facturaFinal } from "@/context/facturacontexto";

const Factura = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { setRefresh } = useRefresh();
  const { facturaFinalstate, setFacuturaFinal } = facturaFinal();

  const { data: clientes, isLoading } = useClienteQuery();
  const { state, dispatch } = useAppContext();

  const { data: vendedor, isLoading: vendedoresLoading } = useVendedorQuery();
  const { data: productos, isLoading: productoloand } = useProductoQuery();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [count, setCount] = useState(0);
  const { carrito } = state;

  const onsubmit = (data) => {
    if (data.cantidad <= 0) {
      alert("La cantidad debe ser mayor a 0");
      return;
    }
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: {
        cliente: data?.cliente,
        vendedor: data?.vendedor,
        producto: data?.producto,
        cantidad: parseInt(data?.cantidad),
      },
    });
  };

  useEffect(() => {
    setCount(carrito.items.reduce((acc, item) => acc + item.cantidad, 0));
  }, [carrito]);
  /*  useEffect(() => {
    if (facturaFinalstate) {
      setFacuturaFinal([]);
    }
  }, []); */
  const handleOperForm = () => {
    setShowModal(true);
  };
  const handleOpenCarrito = () => {
    setShowModal2(true);
  };
  const handleonChange = (e) => {
    setValue(e.target.value);
  };
  const handleOpen = () => {
    setShowModal2(false);
  };
  const Handleclose = () => {
    setShowModal2(false);
  };
  const objetoFinalFactura = Object.entries(facturaFinalstate).length > 0;

  const facturaFinaltiket = objetoFinalFactura ? (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Factura</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">Número de Factura:</p>
        <p className="text-gray-700">{facturaFinalstate._id}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Cédula Cliente:</p>
        <p className="text-gray-700">{facturaFinalstate.cliente_Cedula}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Nombre Cliente:</p>
        <p className="text-gray-700">{facturaFinalstate.cliente_Nombre}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Valor Total:</p>
        <p className="text-gray-700">
          ${facturaFinalstate.valorTotal.toFixed(2)}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Nombre del Vendedor:</p>
        <p className="text-gray-700">{facturaFinalstate.vendedor_Nombre}</p>
      </div>
      <div>
        <p className="text-lg font-semibold mb-2">Productos:</p>
        {facturaFinalstate.productos.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-gray-200 pb-4 mb-4"
          >
            <p className="text-gray-700 font-medium">Nombre Producto:</p>
            <p className="text-gray-600">{item.descripcion}</p>
            <p className="text-gray-700 font-medium mt-2">Cantidad:</p>
            <p className="text-gray-600">{item.cantidad}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );

  if (isLoading && vendedoresLoading && productoloand) {
    return <p>Loading...</p>;
  }

  const cart = showModal2 ? (
    <Modal
      children={<Cariito Handleclose={Handleclose} />}
      title={"Carrito de compras"}
      visible={true}
      closeModal={handleOpen}
    />
  ) : (
    ""
  );
  const form = showModal ? (
    <div className="w-96 flex-col flex gap-3 ">
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-5">
        <label className="font-bold">cliente</label>
        <Select
          errors={errors}
          register={register}
          name={"cliente"}
          data={clientes}
          handleonChange={handleonChange}
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
        <label className="font-bold">Producto</label>
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

        <Input
          errors={errors}
          name={"cantidad"}
          placeholder={"ingrese una cantidad"}
          register={register}
          type={"number"}
        />
        <div className="flex flex-row justify-center items-center mt-5 w-full">
          <button className=" bg-yellow-600 text-white rounded-lg h-10 w-36">
            Continuar
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
  return (
    <>
      <Menu />
      <div className=" w-full  h-screen  ">
        <div className="w-full justify-center flex  flex-col gap-6 mt-5">
          <div className="justify-center w-full flex">
            <h1 className="text-black text-4xl">Facturas</h1>
          </div>
          {cart}
          <div className="flex flex-col gap-3">
            <div className="ml-3 justify-between flex  items-center">
              <button
                onClick={handleOperForm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Agregar Facturas
              </button>
              <div className="w-24 justify-center flex items-center">
                <FaShoppingCart
                  className="size-10 cursor-pointer"
                  onClick={handleOpenCarrito}
                />
                <a className="bg-red-400 text-white rounded-full  pl-2 pr-2 ">
                  {count}
                </a>
              </div>
            </div>
            <TableFacturas />
            <div className="w-full flex justify-center mt-32">{form}</div>
          </div>
          {facturaFinaltiket}
        </div>
      </div>
    </>
  );
};

export default Factura;
