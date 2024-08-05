"use client"
import Producto from "@/components/paginas/Producto";
import React from "react";
import proteccionRuta from "../middleware/ProteccionRuta";

const page = () => {
  return (
    <div>
      <Producto />
    </div>
  );
};

export default proteccionRuta(page)
