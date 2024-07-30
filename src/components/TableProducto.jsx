import React, { useEffect, useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import {
  useProductoQuery,
  ProductoDelete,
  ProductoPut,
} from "@/store/productos";
import { Button } from "primereact/button";
import { useRefresh } from "@/context";
import { useMutation } from "@tanstack/react-query";
import Modal from "./Modal";
import From from "./From";
import { useForm } from "react-hook-form";
import Input from "./Input";

const TableProducto = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
  const { refresh } = useRefresh();
  const { data: productos, isLoading, refetch } = useProductoQuery();
  const [idDelete, setIdDelete] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  useEffect(() => {
    setValue("codigo", dataUpdate?.codigo);
    setValue("descripcion", dataUpdate?.descripcion);
    setValue("valor", dataUpdate?.valor);
    setValue("cantidad", dataUpdate?.cantidad);
  }, [dataUpdate, setValue]);
  
  const useMutationClientedelete = useMutation({
    mutationFn: ProductoDelete,
    onSuccess: (data) => {
      alert(`${data}`);
      refetch();
    },
    onError: (error) => {
      console.error("Error", error.message);
    },
  });
  const useMutationClientePut = useMutation({
    mutationFn: ProductoPut,
    onSuccess: (data) => {
      alert(`${data}`);
      setShowModal(false);
      refetch();
    },
    onError: (error) => {
      console.error("Error", error.message);
    },
  });
  const handleSubmitUpdate = (data) => {
    setShowModal(true);

    setDataUpdate(data);
  };

  const onsubmit = (data) => {
    const dataUpdateId = {
      id: dataUpdate.id,
      codigo: data.codigo,
      descripcion: data.descripcion,
      valor: data.valor,
      cantidad: data.cantidad,
    };
    useMutationClientePut.mutate(dataUpdateId);
  };
  const handleOpen = () => {
    setShowModal(false);
  };
  const handleDelate =(data)=>{
    useMutationClientedelete.mutate(data);
  }
  if (refresh) {
    refetch();
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (idDelete) {
    useMutationClientedelete.mutate(idDelete);
    setIdDelete("");
  }
  const modal = showModal ? (
    <Modal
      visible={true}
      title={"Editar Producto"}
      children={
        <From onSubmit={handleSubmit(onsubmit)} valor={"Actualizar"}>
          <label className="font-bold">codigo</label>
          <Input
            erros={errors}
            name={"codigo"}
            placeholder={"Ejemplo 1006452385"}
            type={"number"}
            register={register}
          />
          <label className="font-bold">descripcion</label>
          <Input
            erros={errors}
            name={"descripcion"}
            placeholder={"Miguel Osorio"}
            type={"text"}
            register={register}
          />
          <label className="font-bold">valor</label>
          <Input
            erros={errors}
            name={"valor"}
            placeholder={"35000"}
            type={"number"}
            register={register}
          />
          <label className="font-bold">cantidad</label>
          <Input
            erros={errors}
            name={"cantidad"}
            placeholder={"Ejemplo 1006452385"}
            type={"number"}
            register={register}
          />
        </From>
      }
      closeModal={handleOpen}
    />
  ) : (
    ""
  );

  const nodes =
    productos?.map((producto) => ({
      key: producto._id,
      data: {
        id: producto._id,
        codigo: producto.codigo,
        descripcion: producto.descripcion,
        valor: producto.valor,
        cantidad: producto.cantidad,
      },
      actions: {
        editar: (data) => {
          handleSubmitUpdate(data);
        },
        eliminar: () => {
          handleDelate( producto._id)
          
        },
      },
    })) || [];

  const actionBodyTemplate = (node) => {
    return (
      <div>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => node.actions.editar(node.data)}
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
      {modal}
      <TreeTable value={nodes} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="ID"></Column>
        <Column field="codigo" header="codigo"></Column>
        <Column field="descripcion" header="descripcion"></Column>
        <Column field="valor" header="valor"></Column>
        <Column field="cantidad" header="cantidad"></Column>
        <Column body={actionBodyTemplate} header="Acciones"></Column>
      </TreeTable>
    </div>
  );
};

export default TableProducto;
