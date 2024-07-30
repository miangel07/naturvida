"use client";
import { useEffect, useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { useFacturasQuery, FacturaDelete, FacturaPut } from "@/store/factura";

import { Button } from "primereact/button";
import { useRefresh } from "@/context";
import { useMutation } from "@tanstack/react-query";
import Modal from "./Modal";
import From from "./From";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useClienteQuery } from "@/store/clientes";
import { useVendedorQuery } from "@/store/vendedor";
import React from "react";
import Select from "./Select";

const TableFacturas = () => {
  const [showModal, setShowModal] = useState(false);

  const [dataUpdate, setDataUpdate] = useState();
  const { refresh } = useRefresh();
  const { data: facturas, isLoading, refetch } = useFacturasQuery();
  const [idDelete, setIdDelete] = useState("");
  const { data: clientes, isLoading: loandCliente } = useClienteQuery();
  const { data: vendedor, isLoading: vendedoresLoading } = useVendedorQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("fecha", dataUpdate?.fecha);
    setValue("cliente", dataUpdate?.cliente);
    setValue("valorTotal", dataUpdate?.valorTotal);
    setValue("vendedor", dataUpdate?.telefono);
  }, [dataUpdate, setValue]);
  const useMutationClientedelete = useMutation({
    mutationFn: FacturaDelete,
    onSuccess: (data) => {
      alert(`${data}`);
      refetch();
    },
    onError: (error) => {
      console.error("Error", error.message);
    },
  });
  const useMutationfacturaPut = useMutation({
    mutationFn: FacturaPut,
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
      fecha: data.fecha,
      cliente: data.cliente,
      valorTotal: data.valorTotal,
      vendedor: data.vendedor,
    };
    useMutationfacturaPut.mutate(dataUpdateId);
  };
  const handleOpen = () => {
    setShowModal(false);
  };
  if (refresh) {
    refetch();
  }
  if (isLoading && loandCliente && vendedoresLoading) {
    return <p>Loading...</p>;
  }
  if (idDelete) {
    useMutationClientedelete.mutate(idDelete);
    setIdDelete("");
  }
  const modal = showModal ? (
    <Modal
      visible={true}
      title={"Registrar Factura"}
      children={
        <From onSubmit={handleSubmit(onsubmit)} valor={"registrar"}>
          <label className="font-bold">fecha</label>
          <Input
            errors={errors}
            name="fecha"
            placeholder="12356"
            type="text"
            register={register}
          />
          <label className="font-bold">cliente</label>
          <Select
            errors={errors}
            register={register}
            name={"cliente"}
            data={clientes}
          />
          <label className="font-bold">valorTotal</label>
          <Input
            errors={errors}
            name="valorTotal"
            placeholder="35000"
            type="number"
            register={register}
          />
          <label className="font-bold">vendedor</label>

          <select
            {...register("vendedor", {
              required: {
                value: true,
                message: `el campo vendedor es obligatorio`,
              },
            })}
          >
            <option value="">Selecione una opcion</option>
            {vendedor?.map((item) => (
              <option key={item._id} value={item._id}>
                {item.usuario}
              </option>
            ))}
          </select>
          {errors.vendedor && (
            <p className="text-amber-700">{errors.vendedor.message}</p>
          )}
        </From>
      }
      closeModal={handleOpen}
    />
  ) : (
    ""
  );

  const nodes =
    facturas?.map((factura) => ({
      key: factura._id,
      data: {
        id: factura._id,
        fecha: factura.fecha,
        cliente: factura.cliente?.nombre,
        valorTotal: factura.valorTotal,
        vendedor: factura.vendedor?.usuario,
      },
      actions: {
        editar: (data) => {
          handleSubmitUpdate(data);
        },
        eliminar: (_id) => {
          setIdDelete(factura._id);
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
        <Column field="fecha" header="fecha"></Column>
        <Column field="cliente" header="cliente"></Column>
        <Column field="valorTotal" header="valorTotal"></Column>
        <Column field="vendedor" header="vendedor"></Column>
        <Column body={actionBodyTemplate} header="Acciones"></Column>
      </TreeTable>
    </div>
  );
};

export default TableFacturas;
