import { Conexion } from "../../../../../libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";

export async function GET(response) {
  const token = await verificarToken(response);
  if (token) return token;
  try {
    await Conexion();
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
          as: "factura",
        },
      },
      {
        $unwind: "$factura",
      },
      {
        $lookup: {
          from: "vendedores",
          localField: "factura.vendedor",
          foreignField: "_id",
          as: "vendedor",
        },
      },
      {
        $unwind: "$vendedor",
      },
      {
        $project: {
          _id: 0,
          producto: {
            nombre: "$producto.descripcion",
          },
          vendedor: {
            nombre: "$vendedor.usuario",
          },
        },
      },
    ]);

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
