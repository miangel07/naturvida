"use client";
import React from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { useListarFacturaQuery } from "@/store/consultas";

const TableProductoVenta = () => {
    const { data ,isLoading ,isError,error } = useListarFacturaQuery();
    

    if (isLoading) return <p>Loading...</p>;
    if (isError  ) return <p>Error: {error.message}</p>;
    
     const nodes = data.facturas?.map((factura) => ({
        key: factura._id,
        data: {
            id: factura._id,
            valorTotal: factura.valorTotal,
            cliente_Cedula: factura.cliente_Cedula,
            cliente_Nombre: factura.cliente_Nombre,
            vendedor_Nombre: factura.vendedor_Nombre,
        },
    })) || []
  return (
    <TreeTable value={nodes} tableStyle={{ minWidth: "50rem" }}>
      <Column field="id" header="Codigo"></Column>
      <Column field="valorTotal" header="valor Total"></Column>
      <Column field="cliente_Cedula" header="Cedula Cliente"></Column>
      <Column field="cliente_Nombre" header="Nombre Cliente "></Column>
      <Column field="vendedor_Nombre" header="Nombre del Vendedor"></Column>
    </TreeTable>
  );
};

export default TableProductoVenta;
