import { Conexion } from "../../../../libs/mongodb";
import clienteModels from "@/models/clientes";
import { NextResponse } from "next/server";
import { verificarToken } from "@/utils/middleware/token";

export async function GET(req) {
  const token = await verificarToken(req);
  if (token) return token;
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
export async function POST(req) {
  const token = await verificarToken(req);
  if (token) return token;
  try {
    await Conexion();

    const data = await req.json();
    const cliente = await clienteModels.create(data);
    if (cliente) {
      return NextResponse.json({
        status: 201,
        message: "Cliente creado correctamente",
        data: cliente,
      });
    }
    return NextResponse.json({ message: "Error al crear el Cliente" });
  } catch (error) {
    console.log(error);
  }
}
