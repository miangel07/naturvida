import { Conexion } from "../../../../../libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = await verificarToken(request);
  if (token) return token;
  try {
    await Conexion();
    const detalles = await detalle.aggregate([
      {
        $lookup: {
          from: "productos",
          localField: "producto",
          foreignField: "_id",
          as: "producto",
        },
      },
      {
        $unwind: "$producto",
      },
      {
        $group: {
          _id: {
            productoId: "$producto._id",
            nombre: "$producto.descripcion",
            precio: "$producto.valor",
            codigo: "$producto.codigo",
            cantidad: "$producto.cantidad",
          },
          cantidadTotal: { $sum: "$cantidad" }
        }
      },
      {
        $project: {
          _id: 0,
          producto: {
            _id: "$_id.productoId",
            nombre: "$_id.nombre",
            precio: "$_id.precio",
            codigo: "$_id.codigo",
            cantidad: "$_id.cantidad",
          },
          cantidad: "$cantidadTotal"
        }
      }
    ]);

    if (detalles) {
      return NextResponse.json({
        status: 200,
        message: "Detalles listados correctamente",
        detalles,
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Error al obtener los detalles",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error en el servidor",
    });
  }
}
