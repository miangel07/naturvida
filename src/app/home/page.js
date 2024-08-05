"use client"
import Home from "@/components/paginas/Home";
import React from "react";
import proteccionRuta from "../middleware/ProteccionRuta.js";

const Page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default proteccionRuta(Page);
