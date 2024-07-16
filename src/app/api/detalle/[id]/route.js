import { Conexion } from "../../../../../libs/mongodb";
import detalleModels from "@/models/facturaDetalle";
import { NextResponse } from "next/server";

export async function GET(response, { params }) {
  try {
    await Conexion();
    const id = params.id;
    const detalleFactura = await detalleModels.findById(id);
    if (!detalleFactura) {
      return NextResponse.json({ status: 400, error: "detalle de Factura no encontrado" });
    }
    return NextResponse.json({ status: 200, detalleFactura });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}

export async function DELETE(response, { params }) {
  try {
    await Conexion();
    const id = params.id;

    const detalleFactura = await detalleModels.findByIdAndDelete(id);
    if (!detalleFactura) {
      return NextResponse.json({ status: 400, error: "detalle de Factura no encontrado" });
    }
    return NextResponse.json({ status: 200, detalleFactura });
  } catch (error) {}
}

export async function PUT(request, { params }) {
  try {
    await Conexion();
    const data = await request.json();
    const id = params.id;
    const detalleFactura = await detalleModels.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!detalleFactura) {
      return NextResponse.json({ status: 400, error: "detalle de Factura no encontrado" });
    }
    return NextResponse.json({ status: 200, detalleFactura });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}