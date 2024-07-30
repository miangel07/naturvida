import { Conexion } from "../../../../libs/mongodb";
import Factura from "@/models/factura";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = await verificarToken(request);
  if (token) return token;
  await Conexion();

  try {
    const facturas = await Factura.find()
      .populate("cliente", "nombre")
      .populate("vendedor", "usuario")
      .exec()
    return NextResponse.json(facturas);
  } catch (error) {
    console.error("Error al obtener las facturas:", error);
    return NextResponse.json({ error: "Error al obtener las facturas" }, 500);
  }
}

export async function POST(request) {
  await Conexion();
  const token = await verificarToken(request);
  if (token) return token;

  try {
    const data = await request.json();

    const nuevaFactura = await Factura.create(data);
    if (nuevaFactura) {

      return NextResponse.json({ message: "Factura creada correctamente" });
    }
    return NextResponse.json({ message: "Error al crear la Factura" });
  } catch (error) {
    console.error("Error al crear la factura:", error);
    return NextResponse.json({ error: "Error al crear la factura" }, 500);
  }
}
