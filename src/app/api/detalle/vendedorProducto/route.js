import { Conexion } from "../../../../../libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { verificarToken } from "@/utils/middleware/token";
import { ObjectId } from 'mongodb'

import { NextResponse } from "next/server";


export async function POST(response) {
  const token = await verificarToken(response);
  if (token) return token;
  try {
    await Conexion();
    const vendedor = await response.json()

    const vendedorId = ObjectId.createFromHexString(vendedor.vendedor);
    console.log("vendedor id", vendedorId);

    const productosVendidosPorVendedor = await detalle.aggregate([

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
          "facturas.vendedor": vendedorId,
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
    console.log("consulta detalle", productosVendidosPorVendedor)

    if (productosVendidosPorVendedor) {
      return NextResponse.json({
        status: 200,
        message: "detalles Listadas correctamente",
        productos_Vendidos: productosVendidosPorVendedor,
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
