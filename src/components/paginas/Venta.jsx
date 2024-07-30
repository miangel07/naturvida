import React from "react";
import Menu from "../Menu";
import ProductosVendedor from "../ProductosVendedor";
import ListarFecha from "../ListarFecha";

const Venta = () => {
  return (
    <div>
      <>
        <Menu />
        <div className=" w-full  h-screen  ">
          <div className="w-full justify-center flex  flex-col gap-6 mt-5">
            <div className="justify-center w-full flex">
              <p className="text-black ">
                Listar los productos vendidos por vendedor
              </p>
            </div>
            <div className="flex flex-col gap-9 justify-center  items-center">
              <div>
                <ProductosVendedor />
              </div>
              <div>
                <ListarFecha/>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Venta;
