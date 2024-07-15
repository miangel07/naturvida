import { Conexion } from "@/libs/mongodb";
import detalleModels from "@/models/factura";
import { NextResponse } from "next/server";

export async function GET(response, { params }) {
  try {
    await Conexion();
    const id = params.id;
    const facturas = await detalleModels.findById(id);
    if (!facturas) {
      return NextResponse.json({
        status: 400,
        error: " Factura no encontrado",
      });
    }
    return NextResponse.json({ status: 200, facturas });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}

export async function DELETE(response, { params }) {
  try {
    await Conexion();
    const id = params.id;

    const facturas = await detalleModels.findByIdAndDelete(id);
    if (!facturas) {
      return NextResponse.json({
        status: 400,
        error: " Factura no encontrado",
      });
    }
    return NextResponse.json({ status: 200, facturas });
  } catch (error) {}
}

export async function PUT(request, { params }) {
  try {
    await Conexion();
    const data = await request.json();
    const id = params.id;
    const facturas = await detalleModels.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!facturas) {
      return NextResponse.json({
        status: 400,
        error: " Factura no encontrado",
      });
    }
    return NextResponse.json({ status: 200, facturas });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}
