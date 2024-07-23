import React from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { useClienteQuery } from "@/store/clientes";
import { Button } from "primereact/button";

const TableComponent = () => {
  const { data: clientes, isLoading } = useClienteQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const nodes =
    clientes?.map((cliente) => ({
      key: cliente._id,
      data: {
        id: cliente._id,
        cedula: cliente.cedula,
        nombre: cliente.nombre,
        dirrecion: cliente.direccion,
        telefono: cliente.telefono,
        email: cliente.email,
      },
      actions: {
        editar: () => {
          console.log("editar", cliente._id);
        },
        eliminar: () => {
          console.log("eliminar", cliente._id);
        },
      },
    })) || [];

  const actionBodyTemplate = (node) => {
    return (
      <div>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => node.actions.editar()}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => node.actions.eliminar()}
        />
      </div>
    );
  };

  return (
    <div>
      <TreeTable value={nodes} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="ID"></Column>
        <Column field="cedula" header="Cedula"></Column>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="dirrecion" header="Direccion"></Column>
        <Column field="telefono" header="Telefono"></Column>
        <Column field="email" header="Email"></Column>
        <Column body={actionBodyTemplate} header="Acciones"></Column>
      </TreeTable>
    </div>
  );
};

export default TableComponent;
