import { Conexion } from "../../../../libs/mongodb";
import clienteModels from "@/models/clientes";
import { NextResponse } from "next/server";
import { validarToken } from "@/utils/middleware/auth";

export async function GET(req) {
  try {
    await Conexion();

    const clientes = await clienteModels.find();
    if (clientes) {
      return NextResponse.json({
        status: 200,
        message: "Clientes listados correctamente",
        data: clientes,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "No se encontraron clientes",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error al intentar listar clientes",
    });
  }
}
export async function POST(request) {
  validarToken(request, NextResponse, async () => {
    try {
      await Conexion();
      const token = request.hedears.get("token");
      if (!token) {
        return NextResponse.json({ message: "Token invalido" });
      }
      const data = await request.json();
      const cliente = await clienteModels.create(data);
      return NextResponse.json(cliente);
    } catch (error) {
      console.log(error);
    }
  });
}