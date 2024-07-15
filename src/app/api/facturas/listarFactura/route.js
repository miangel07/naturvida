import { Conexion } from "@/libs/mongodb";
import Factura from "@/models/factura";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await Conexion();
    const facturas = await Factura.aggregate([
      {
        $lookup: {
          from: "clientes",
          localField: "cliente",
          foreignField: "_id",
          as: "cliente",
        },
      },
      {
        $unwind: "$cliente",
      },
      {
        $lookup: {
          from: "vendedores",
          localField: "vendedor",
          foreignField: "_id",
          as: "vendedor",
        },
      },
      {
        $unwind: "$vendedor",
      },
      {
        $project: {
          _id: 1,
          valorTotal: 1,
          cliente_Cedula: "$cliente.cedula",
          cliente_Nombre: "$cliente.nombre",
          vendedor_Nombre: "$vendedor.usuario",
        },
      },
    ]);
    if (facturas) {
      return NextResponse.json({
        status: 200,
        message: "facturas Listadas correctamente",
        facturas,
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Error al obtener las facturas",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
