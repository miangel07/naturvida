import { validarToken } from "./auth";

export const verificarToken = (handler) => {
  return async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "requiere un token" });
      }
      validarToken(token);
      return handler(req, res);
    } catch (error) {
      return res.status(403).json({ message: "token invalido " });
    }
  };
};
