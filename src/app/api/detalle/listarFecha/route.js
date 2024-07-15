import { Conexion } from "@/libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { NextResponse } from "next/server";

export async function POST(response) {
  try {
    await Conexion();
    const fecha = await response.json();
    console.log(fecha);
    const startDate = new Date(fecha.fecha_inicio);
    const endDate = new Date(fecha.fecha_fin);

    console.log(startDate, endDate);
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
        $lookup: {
          from: "facturas",
          localField: "numero",
          foreignField: "_id",
          as: "facturas",
        },
      },
      {
        $unwind: "$facturas",
      },
      {
        $match: {
          "facturas.fecha": {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $project: {
          _id: 0,
          producto: {
            nombre: "$producto.descripcion",
          },
        },
      },
    ]);
    if (detalles) {
      return NextResponse.json({
        status: 200,
        message: "Productos Listados correctamente segun la Fecha indicada",
        detalles,
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Error",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
