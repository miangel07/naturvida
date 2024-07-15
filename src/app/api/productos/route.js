import { Conexion } from "@/libs/mongodb";
import productos from "@/models/productos";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await Conexion();
    const producto = await productos.find();
    return NextResponse.json(producto);
  } catch (error) {
    console.error(error);
  }
}
export async function POST(request) {
  try {
    await Conexion();
    const data = await request.json();
    const producto = await productos.create(data);
    return NextResponse.json(producto);
  } catch (error) {
    console.log(error);
  }
}
