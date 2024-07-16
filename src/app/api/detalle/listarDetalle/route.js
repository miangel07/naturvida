import { Conexion } from "../../../../../libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { NextResponse } from "next/server";

export async function GET() {
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
        $project: {
          _id: 0,
          producto: {
            _id: "$producto._id",
            nombre: "$producto.descripcion",
            precio: "$producto.valor",
            codigo: "$producto.codigo",
            cantidad: 1,
          },

          cantidad: 1,
        },
      },
    ]);
    if (detalles) {
      return NextResponse.json({
        status: 200,
        message: "detalles Listadas correctamente",
        detalles,
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Error al obtener las detalles",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
