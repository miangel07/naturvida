import React from "react";
import Menu from "../Menu";
import DetalleComponets from "../DetalleComponets";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="w-full justify-center flex mt-5 ">
        <h1 className=" font-bold">Bienvenidos A Naturvida</h1>
      </div>
      <DetalleComponets />
    </div>
  );
};

export default Home;
