"use client";
import React, { useEffect, useState } from "react";
import { ProductoId } from "@/store/productos";
import { useAppContext } from "@/utils/store";
import { MdDeleteOutline } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { FacturaPost } from "@/store/factura";
import { useRefresh } from "@/context";
import { useProductoQuery } from "@/store/productos";
import { facturaFinal } from "@/context/facturacontexto";

const Cariito = ({ Handleclose }) => {
  const { state, dispatch } = useAppContext();
  const { carrito } = state;
  const [productos, setProductos] = useState([]);
  const [valortotal, setValorTotal] = useState(0);
  const { data: productosData } = useProductoQuery();
  const { setRefresh } = useRefresh();
  const { setFacuturaFinal } = facturaFinal();

  const [error, setError] = useState(null);
  const useFacturaPost = useMutation({
    mutationFn: FacturaPost,
    onSuccess: (data) => {
      console.log(data.data[0]);
      setFacuturaFinal(data.data[0]);
      dispatch({ type: "VACIAR_CARRITO" });
      Handleclose();
      setRefresh(true);
      alert(data.message);
    },

    onError: (error) => {
      console.error("Error", error.message);
    },
  });

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const promises = carrito.items.map((item) => ProductoId(item.producto));
        const results = await Promise.all(promises);
        setProductos(results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductos();
  }, [carrito.items]);
  useEffect(() => {
    const sumaTotal = () => {
      //el reduce permite reducir un array a un solo valor, en este caso, la suma total de los valores de los productos.
      const suma = productos.reduce((acc, item) => {
        const carritoItem = carrito.items.find(
          (items) => items.producto === item.producto._id
        );

        return acc + item.producto.valor * (carritoItem?.cantidad || 0);
      }, 0);
      setValorTotal(suma);
    };

    sumaTotal();
  }, [productos, carrito.items]);

  const dalete = (data) => {
    const productoDelate = carrito.items.find((item) => item.producto === data);
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: productoDelate,
    });
  };
  const vaciar = () => {
    dispatch({ type: "VACIAR_CARRITO" });
  };
  const handelComprar = () => {
    // Verifica si alguna cantidad en el carrito supera la cantidad disponible en productosData
    for (const item of carrito.items) {
      const productoData = productosData.find(
        (producto) => producto._id === item.producto
      );

      if (productoData && item.cantidad > productoData.cantidad) {
        alert(
          `La cantidad del producto "${productoData.descripcion}" en el carrito supera la cantidad disponible (${productoData.cantidad}). Por favor, ajusta la cantidad.`
        );
        return;
      }
    }

    const valorFactura = {
      carrito: carrito,
      total: valortotal,
    };
    useFacturaPost.mutate(valorFactura);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className=" h-96  ">
        <table className="flex gap-3  w-full flex-col">
          <thead>
            <tr className="flex gap-3 w-full justify-between">
              <th className="w-32">Producto</th>
              <th className="w-32">Precio</th>
              <th className="w-32">Cantidad</th>
              <th className="w-32">Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {productos.length > 0 ? (
              productos.map((producto, index) => (
                <tr
                  key={producto.producto._id}
                  className="flex gap-3 w-full justify-between"
                >
                  <td className="w-32  justify-center flex ">
                    {producto.producto.descripcion}
                  </td>
                  <td className="w-32  justify-center flex">
                    {!isNaN(producto.producto.valor) &&
                    !isNaN(carrito.items[index]?.cantidad)
                      ? producto.producto.valor * carrito.items[index]?.cantidad
                      : ""}
                  </td>
                  <td className="w-32  justify-center flex">
                    {carrito.items[index]?.cantidad}
                  </td>
                  <td className="w-32  justify-center flex">
                    <MdDeleteOutline
                      className="size-8 cursor-pointer"
                      onClick={() => dalete(producto.producto._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No hay productos en el carrito</td>
              </tr>
            )}
          </tbody>
        </table>

        <h1>valor total</h1>
        <p>{valortotal}</p>
        <div className="flex w-full justify-between">
          <button
            onClick={vaciar}
            className="bg-blue-500  text-white w-36 rounded-lg"
          >
            Vaciar Carrito
          </button>
          <button
            onClick={Handleclose}
            className="bg-yellow-500  text-white w-36 rounded-lg"
          >
            Seguir Comprando
          </button>
          <button
            onClick={handelComprar}
            className="bg-green-700  text-white w-36 rounded-lg"
          >
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default Cariito;
