import { Conexion } from "../../../../libs/mongodb";
import detalle from "@/models/facturaDetalle";
import { verificarToken } from "@/utils/middleware/token";
import productosModels from "@/models/productos";
import { NextResponse } from "next/server";
export async function GET(response) {
  const token = await verificarToken(response);
  if (token) return token;
  try {
    await Conexion();
    const clientes = await detalle.find();
    return NextResponse.json(clientes);

  } catch (error) {
    console.error(error);
  }

}
export async function POST(request) {

  try {
    await Conexion();
    const data = await request.json();
    const producto = data.producto
    const cantidadDetalle = data.cantidad

    const ProductoQuery = await productosModels.findById(producto);
    const cantidadPorducto = ProductoQuery.cantidad
    const id = ProductoQuery._id
    if (cantidadDetalle > cantidadPorducto) {
      return NextResponse.json({ message: "Lo siento no hay suficientes  productos para Realizar la compra" })
    }
    const operacion = cantidadPorducto - cantidadDetalle
    if (cantidadDetalle < 1) {
      return NextResponse.json({ message: "Lo siento no se puede ejecutar esta accion debes escoger un numero positivo mayor a 0" })
    }
    const dataProducto = {
      codigo: ProductoQuery.codigo,
      descripcion: ProductoQuery.descripcion,
      valor: ProductoQuery.valor,
      cantidad: operacion
    }
    const detalleFactura = await productosModels.findByIdAndUpdate({ _id: id }, dataProducto, {
      new: true,
    });


    const clientes = await detalle.create(data);
    if (clientes && detalleFactura) {
      return NextResponse.json({ message: "detalle registrado correctamente" })
    }
    return NextResponse.json({ message: "no se  registrado correctamente" })

  } catch (error) {
    console.log(error);
  }

}
