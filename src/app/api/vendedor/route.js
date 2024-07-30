import { Conexion } from "../../../../libs/mongodb";
import vendedores from "@/models/vendedores";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { verificarToken } from "@/utils/middleware/token";
export async function GET(request) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const vendedor = await vendedores.find();
    return NextResponse.json(vendedor);
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
    const hashedPassword = await bcryptjs.hash(data.password, 10);
    const vendedor = await vendedores.create({
      usuario:data.usuario,
      password: hashedPassword,
    });
    return NextResponse.json({message:"Usuario Creado correctamente",vendedor});
  } catch (error) {
    console.log(error);
  }
}
