import { Conexion } from "../../../../libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { NextResponse } from "next/server";
export async function GET() {
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
    return NextResponse.json(clientes);
  } catch (error) {
    console.log(error);
  }

}
