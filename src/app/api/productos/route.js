import { Conexion } from "../../../../libs/mongodb";
import productos from "@/models/productos";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";
export async function GET(request) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const producto = await productos.find();
    return NextResponse.json(producto);
  } catch (error) {
    console.error(error);
  }
}
export async function POST(request) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const data = await request.json();
    const producto = await productos.create(data);
    if (producto) {
      return NextResponse.json({ message: "producto creado correactamente" })
    }
    return NextResponse.json({ message: "Error al crear el producto" });
  } catch (error) {
    console.log(error);
  }
}
