import { Conexion } from "../../../../libs/mongodb";
import vendedoresModels from "@/models/vendedores";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await Conexion();
    const data = await request.json();
    const usuario = data.usuario;
    const password = data.password;

    const login = await vendedoresModels.findOne({ usuario });

    const isPasswordValid = await bcryptjs.compare(password, login.password);
    if (!login) {
      return NextResponse.json({
        status: 400,
        message: "Contraseña o usuario incorrecto",
      });
    }

    if (!isPasswordValid) {
      return NextResponse.json({
        status: 400,
        message: "Contraseña o usuario incorrecto",
        token,
      });
    }
    const token = jwt.sign({ usuario }, process.env.SECRET, {
      expiresIn: process.env.TIME,
    });
    return NextResponse.json({
      status: 200,
      message: "Inicio de Sesion exitoso",
      token,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Usuario o contraseña incorrecta",
    });
  }
}