import { Conexion } from "../../../../../libs/mongodb";
import clienteModels from "@/models/clientes";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";

export async function GET(response, { params }) {
  const token = await verificarToken(req);
  if (token) return token;
  try {

    await Conexion();
    const id = params.id;
    const cliente = await clienteModels.findById(id);
    if (!cliente) {
      return NextResponse.json({ status: 400, error: "Cliente no encontrado" });
    }
    return NextResponse.json({ status: 200, cliente });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}

export async function DELETE(req, { params }) {
  const token = await verificarToken(req);
  if (token) return token;
  try {
    await Conexion();
    const id = params.id;

    const cliente = await clienteModels.findByIdAndDelete(id);
    if (!cliente) {
      return NextResponse.json({ status: 400, error: "Cliente no encontrado" });
    }
    return NextResponse.json({ status: 200, message: "Cliente Eliminado correctamente" });
  } catch (error) { }
}

export async function PUT(request, { params }) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const data = await request.json();
    const id = params.id;
    const cliente = await clienteModels.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!cliente) {
      return NextResponse.json({ status: 400, error: "Cliente no encontrado" });
    }
    return NextResponse.json({ status: 200, message: "cliente Actualizado correctamente" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}
