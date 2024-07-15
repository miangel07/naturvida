import { Conexion } from "@/libs/mongodb";
import clienteModels from "@/models/clientes";
import { NextResponse } from "next/server";

export async function GET(response, { params }) {
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

export async function DELETE(response, { params }) {
  try {
    await Conexion();
    const id = params.id;

    const cliente = await clienteModels.findByIdAndDelete(id);
    if (!cliente) {
      return NextResponse.json({ status: 400, error: "Cliente no encontrado" });
    }
    return NextResponse.json({ status: 200, cliente });
  } catch (error) {}
}

export async function PUT(request, { params }) {
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
    return NextResponse.json({ status: 200, cliente });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}
