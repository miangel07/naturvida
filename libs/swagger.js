import { createSwaggerSpec } from "next-swagger-doc";
import { clientesDocs } from "@/swagger/clientesSwagger";

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
      },
    },
  });
  return spec;
};
