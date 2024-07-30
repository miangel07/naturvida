import { Conexion } from "../../../../../libs/mongodb";
import detalleModels from "@/models/factura";
import vendedores from "@/models/vendedores";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const id = params.id;
    const facturas = await detalleModels.findById(id);
    if (!facturas) {
      return NextResponse.json({
        status: 400,
        error: "Factura no encontrado",
      });
    }
    return NextResponse.json({ status: 200, facturas });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}

export async function DELETE(request, { params }) {
  const token = await verificarToken(request);
  if (token) return token;
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
    return NextResponse.json({ status: 200, message: "Factura Eliminado Correctamente" });
  } catch (error) { }
}

export async function PUT(request, { params }) {
  try {
    await Conexion();
    const data = await request.json();
    const date = new Date(data.fecha)
    const id = params.id;
    const facturas = await detalleModels.findByIdAndUpdate({ _id: id }, {
      fecha: date,
      cliente: data.cliente,
      valorTotal: data.valorTotal,
      vendedor: data.vendedor
    }, {
      new: true,
    });
    if (!facturas) {
      return NextResponse.json({
        status: 400,
        error: " Factura no encontrado",
      });
    }
    return NextResponse.json({ status: 200, message: "factura Acualizada correactemente" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}
