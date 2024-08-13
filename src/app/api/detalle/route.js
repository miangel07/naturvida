import { Conexion } from "../../../../libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { verificarToken } from "@/utils/middleware/token";
import productosModels from "@/models/productos";
import { NextResponse } from "next/server";
export async function GET(response) {
  const token = await verificarToken(response);
  if (token) return token;
  try {
    await Conexion();
    const clientes = await detalle.find();
    return NextResponse.json(clientes);

  } catch (error) {
    console.error(error);
  }

}
export async function POST(request) {

  try {
    await Conexion();
    const data = await request.json();


    const clientes = await detalle.create(data);
    if (clientes) {
      return NextResponse.json({ message: "detalle registrado correctamente" })
    }
    return NextResponse.json({ message: "no se  registrado correctamente" })

  } catch (error) {
    console.log(error);
  }

}
