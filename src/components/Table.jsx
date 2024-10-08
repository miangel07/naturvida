import React, { useEffect, useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { useClienteQuery, ClienteDelete, ClientePut } from "@/store/clientes";
import { Button } from "primereact/button";
import { useRefresh } from "@/context";
import { useMutation } from "@tanstack/react-query";
import Modal from "./Modal";
import From from "./From";
import { useForm } from "react-hook-form";
import Input from "./Input";

const TableComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
  const { refresh } = useRefresh();
  const { data: clientes, isLoading, refetch } = useClienteQuery();
  const [idDelete, setIdDelete] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  useEffect(() => {
    setValue("cedula", dataUpdate?.cedula);
    setValue("nombre", dataUpdate?.nombre);
    setValue("direccion", dataUpdate?.direccion);
    setValue("telefono", dataUpdate?.telefono);
    setValue("email", dataUpdate?.email);
  }, [dataUpdate, setValue]);
  const useMutationClientedelete = useMutation({
    mutationFn: ClienteDelete,
    onSuccess: (data) => {
      alert(`${data}`);
      refetch();
    },
    onError: (error) => {
      console.error("Error", error.message);
    },
  });
  const useMutationClientePut = useMutation({
    mutationFn: ClientePut,
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
      cedula: data.cedula,
      nombre: data.nombre,
      direccion: data.direccion,
      telefono: data.telefono,
      email: data.email,
    };
    useMutationClientePut.mutate(dataUpdateId);
  };
  const handleOpen = () => {
    setShowModal(false);
  };
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
      title={"Editar Cliente"}
      children={
        <From onSubmit={handleSubmit(onsubmit)} valor={"Actualizar"}>
          <label className="font-bold">Numero De Cedula</label>
          <Input
            errors={errors}
            name={"cedula"}
            placeholder={"Ejemplo 1006452385"}
            type={"number"}
            register={register}
          />
          <label className="font-bold">Nombre</label>
          <Input
            errors={errors}
            name={"nombre"}
            placeholder={"Miguel Osorio"}
            type={"text"}
            register={register}
          />
          <label className="font-bold">Dirrecion</label>
          <Input
            errors={errors}
            name={"direccion"}
            placeholder={"Ejemplo 3136156071"}
            type={"text"}
            register={register}
          />
          <label className="font-bold">Telefono</label>
          <Input
            errors={errors}
            name={"telefono"}
            placeholder={"Ejemplo 1006452385"}
            type={"number"}
            register={register}
          />
          <label className="font-bold">Correo</label>
          <Input
            errors={errors}
            name={"email"}
            placeholder={"Ejemplo Miguel@gmail.com"}
            type={"email"}
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
    clientes?.map((cliente) => ({
      key: cliente._id,
      data: {
        id: cliente._id,
        cedula: cliente.cedula,
        nombre: cliente.nombre,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        email: cliente.email,
      },
      actions: {
        editar: (data) => {
          handleSubmitUpdate(data);
        },
        eliminar: (_id) => {
          setIdDelete(cliente._id);
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
        <Column field="cedula" header="Cedula"></Column>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="direccion" header="Direccion"></Column>
        <Column field="telefono" header="Telefono"></Column>
        <Column field="email" header="Email"></Column>
        <Column body={actionBodyTemplate} header="Acciones"></Column>
      </TreeTable>
    </div>
  );
};

export default TableComponent;
