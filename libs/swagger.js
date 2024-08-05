import { createSwaggerSpec } from "next-swagger-doc";
import { clientesDocs } from "@/swagger/clientesSwagger";
import { facturasDocs } from "@/swagger/facturaSwagger";
import { detallesDocs } from "@/swagger/facturaDetalleSwgger";
import { productosDocs } from "@/swagger/productoSwagger";
import { vendedoresDocs } from "@/swagger/vendedorSwagger";
import { listarDeatlledocs } from "@/swagger/listarDetalleSwagger";

export const ApiDocs = async () => {
  const spec = createSwaggerSpec({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API Naturvida",
        version: "1.0.0",
        description: "API para administración de Naturvida",
      },
    },
    apiFolder: "src/swagger",
    schema: {
      paths: {
        ...clientesDocs,
        ...facturasDocs,
        ...detallesDocs,
        ...productosDocs,
        ...vendedoresDocs,
        ...listarDeatlledocs
      },
    },
  });
  return spec;
};
