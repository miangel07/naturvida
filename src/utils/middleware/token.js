import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export const verificarToken =async (req,) => {
  const token = await req.headers.get("token");

  if (!token) {
    return NextResponse.json({ message: "requiere un token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return null;
  } catch (e) {
    return NextResponse.json({ message: "token invalido o expirado" });
  }
};
