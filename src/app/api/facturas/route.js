import { Conexion } from "../../../../libs/mongodb";
import Factura from "@/models/factura";
import { verificarToken } from "@/utils/middleware/token";
import { NextResponse } from "next/server";
import productosModels from "@/models/productos"

import DetallesModels from "@/models/facturaDetalle"

export async function GET(request) {
  const token = await verificarToken(request);
  if (token) return token;
  await Conexion();

  try {
    const facturas = await Factura.find()
      .populate("cliente", "nombre")
      .populate("vendedor", "usuario")
      .exec()
    return NextResponse.json(facturas);
  } catch (error) {
    console.error("Error al obtener las facturas:", error);
    return NextResponse.json({ error: "Error al obtener las facturas" }, 500);
  }
}

export async function POST(request) {
  await Conexion();
  const token = await verificarToken(request);
  if (token) return token;

  try {
    const data = await request.json();
    const productos = data.carrito.items;
    const dataNuew = {
      fecha: new Date(),
      cliente: data.carrito.items[0].cliente,
      valorTotal: data.total,
      vendedor: data.carrito.items[0].vendedor,
    };

    const nuevaFactura = await Factura.create(dataNuew);
    const facturaId = nuevaFactura._id;
    console.log(productos);

    if (productos.length > 0) {
      // Creamos los detalles de la factura con el ID de la factura recién creada
      const detallesPromesas = productos.map(async (item) => {
        const detalle = {
          numero: facturaId,
          producto: item.producto,
          cantidad: item.cantidad,
        };
        const ProductoQuery = await productosModels.findById(item.producto);
        const cantidadPorducto = ProductoQuery.cantidad;

        const operacion = cantidadPorducto - item.cantidad;
        const dataProducto = {
          codigo: ProductoQuery.codigo,
          descripcion: ProductoQuery.descripcion,
          valor: ProductoQuery.valor,
          cantidad: operacion,
        };

        await productosModels.findByIdAndUpdate({ _id: item.producto }, dataProducto, {
          new: true,
        });

        const response = await DetallesModels.create(detalle);
        if (!response) {
          throw new Error('Error al crear el detalle');
        }
        return response;
      });

      // Esperamos a que todas las promesas de inserción se completen
      await Promise.all(detallesPromesas);
    }

    if (nuevaFactura) {

      const facturas = await Factura.aggregate([
        {
          $match: {
            _id: facturaId
          },
        },
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
          $lookup: {
            from: "detalles",
            localField: "_id",
            foreignField: "numero",
            as: "detalles",
          },
        },
        {
          $unwind: "$detalles",
        },
        {
          $lookup: {
            from: "productos",
            localField: "detalles.producto",
            foreignField: "_id",
            as: "producto",
          },
        },
        {
          $unwind: "$producto",
        },
        {
          $group: {
            _id: "$_id",
            valorTotal: { $first: "$valorTotal" },
            // $first hace que los datos no se repitan 
            cliente_Cedula: { $first: "$cliente.cedula" },
            cliente_Nombre: { $first: "$cliente.nombre" },
            vendedor_Nombre: { $first: "$vendedor.usuario" },
            productos: {
              $push: {
                _id: "$producto._id",
                descripcion: "$producto.descripcion",
                cantidad: "$detalles.cantidad",
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            valorTotal: 1,
            cliente_Cedula: 1,
            cliente_Nombre: 1,
            vendedor_Nombre: 1,
            productos: 1,
          },
        },
      ]);

      console.log("facturaFinal", facturas);
      return NextResponse.json({ message: "Factura creada correctamente", data: facturas });
    }

    return NextResponse.json({ message: "Error al crear la Factura" });

  } catch (error) {
    console.error("Error al crear la factura:", error);
    return NextResponse.json({ error: "Error al crear la factura" }, 500);
  }
}
