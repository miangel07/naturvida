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
    console.log(login);
    const isPasswordValid = await bcryptjs.compare(password, login.password);

    if (isPasswordValid && login) {
      const token = jwt.sign({ usuario }, process.env.SECRET, {
        expiresIn: process.env.TIME,
      });
      return NextResponse.json({
        status: 200,
        message: "Inicio de Sesion exitoso",
        token,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Usuario o contraseña incorrecta",
    });
  } catch (error) {
    console.error(error);
  }
}
export const validarToken = async (req, res) => {
  let token_user = req.headers["token"];
  if (!token_user) {
    return NextResponse.json(res, { mensaje: "Se requiere un token" });
  } else {
    try {
      const decode = jwt.verify(token_user, process.env.SECRET);
      next();
    } catch (error) {
      return NextResponse.json(res, { mensaje: "Token inválido" });
    }
  }
};
