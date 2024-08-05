"use client";
import React, { useEffect, useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { useListarDetalleQuery } from "@/store/consultas";

const ProductoDetalle = () => {
  const { data, isLoading, isError, error } = useListarDetalleQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const nodes =
    data.detalles?.map((detalle, index) => ({
      key: index,
      data: {
        cantidadProducto: detalle.producto.cantidad,
        id: detalle.producto._id,
        nombre: detalle.producto.nombre,
        precio: detalle.producto.precio,
        codigo: detalle.producto.codigo,
        cantidad: detalle.cantidad,
      },
    })) || [];
  return (
    <TreeTable value={nodes} tableStyle={{ minWidth: "50rem" }}>
      <Column field="cantidadProducto" header="Cantidad Producto"></Column>
      <Column field="id" header="id Producto"></Column>
      <Column field="nombre" header="Nombre  Producto"></Column>
      <Column field="precio" header="Precio Producto "></Column>
      <Column field="codigo" header="codigo Producto"></Column>
      <Column field="cantidad" header="Cantidad Vendidas"></Column>
    </TreeTable>
  );
};

export default ProductoDetalle;
