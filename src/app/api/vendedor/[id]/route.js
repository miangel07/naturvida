import { Conexion } from "@/libs/mongodb";
import vendedorModels from "@/models/vendedores";
import { NextResponse } from "next/server";

export async function GET(response, { params }) {
  try {
    await Conexion();
    const id = params.id;
    const vendedor = await vendedorModels.findById(id);
    if (!vendedor) {
      return NextResponse.json({
        status: 400,
        error: "vendedor no encontrado",
      });
    }
    return NextResponse.json({ status: 200, vendedor });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}

export async function DELETE(response, { params }) {
  try {
    await Conexion();
    const id = params.id;

    const vendedor = await vendedorModels.findByIdAndDelete(id);
    if (!vendedor) {
      return NextResponse.json({
        status: 400,
        error: "vendedor no encontrado",
      });
    }
    return NextResponse.json({ status: 200, vendedor });
  } catch (error) {}
}

export async function PUT(request, { params }) {
  try {
    await Conexion();
    const data = await request.json();
    const id = params.id;
    const vendedor = await vendedorModels.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!vendedor) {
      return NextResponse.json({
        status: 400,
        error: "vendedor no encontrado",
      });
    }
    return NextResponse.json({ status: 200, vendedor });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}
