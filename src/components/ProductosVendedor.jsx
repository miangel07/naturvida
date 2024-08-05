import { Column } from "primereact/column";
import { TreeTable } from "primereact/treetable";
import React from "react";
import { useVendedorProductoQuery } from "@/store/consultas";

const ProductosVendedor = () => {
  const { data, isLoading, isError, error } = useVendedorProductoQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  const nodes = data.productos_Vendidos.map((producos, index) => ({
    key: index,
    data: {
      nombre: producos.producto.nombre,
      vendedor: producos.vendedor.nombre,
    },
  }));

  return (
    <TreeTable
      value={nodes}
    >
      <div>
      </div>
      <Column field="nombre" header="Nombre Producto"></Column>
      <Column field="vendedor" header="Nombre Vendedor"></Column>
    </TreeTable>
  );
};

export default ProductosVendedor;
