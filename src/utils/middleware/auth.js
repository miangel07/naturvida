import jwt from "jsonwebtoken";

export const validarToken = async (token) => {
  try {
    return (decode = jwt.verify(token_user, process.env.SECRET));
  } catch (error) {
    return NextResponse.json(res, { mensaje: "Token inválido" });
  }
};
