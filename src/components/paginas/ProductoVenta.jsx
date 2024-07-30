"use client";
import React from "react";
import Menu from "../Menu";
import TableProductoVenta from "../TableProductoVenta";
import ProductoDetalle from "../ProductoDetalle";

const ProductoVenta = () => {
  return (
    <>
      <Menu />
      <div className=" w-full  h-screen  ">
        <div className="w-full justify-center flex  flex-col gap-6 mt-5">
          <div className="justify-center w-full flex">
            <p className="text-black ">
              Listar información de todas las facturas en la cual debe mostrar
              código de la factura, valor tal, cedula del cliente, nombre del
              cliente y nombre del vendedor
            </p>
          </div>
          <div className="flex flex-col gap-9 justify-center  items-center">
            <div>
              <TableProductoVenta />
            </div>
            <h1>
              Consulta detallada de los productos de la tienda naturista, en
              dicha consulta se debe presentar todos los datos del producto,
              además de la cantidad disponible y las unidades vendidas.
            </h1>
            <div>
              <ProductoDetalle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductoVenta;
