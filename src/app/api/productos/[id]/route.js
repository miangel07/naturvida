import { Conexion } from "../../../../../libs/mongodb";
import productosModels from "@/models/productos";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const id = params.id;
    const producto = await productosModels.findById(id);
    if (!producto) {
      return NextResponse.json({
        status: 400,
        error: "producto no encontrado",
      });
    }
    return NextResponse.json({ status: 200, producto });
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

    const producto = await productosModels.findByIdAndDelete(id);
    if (!producto) {
      return NextResponse.json({
        status: 400,
        error: "producto no encontrado",
      });
    }
    return NextResponse.json({ status: 200, message:"Producto eliminado correctamente" });
  } catch (error) {}
}

export async function PUT(request, { params }) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const data = await request.json();
    const id = params.id;
    const producto = await productosModels.findByIdAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );
    if (!producto) {
      return NextResponse.json({
        status: 400,
        error: "producto no encontrado",
      });
    }
    return NextResponse.json({ status: 200,message:"producto Actualizado correctamente"});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Error interno" });
  }
}
