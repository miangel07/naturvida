import mongoose from "mongoose";

const facturaModels = mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  cliente: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "clientes",
    required: true,
  },
  valorTotal: {
    type: Number,
    required: true,
  },
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendedores",
    required: true,
  },
});

let factura;

try {
  // Intenta obtener el modelo si ya está definido
  factura = mongoose.model("factura");
} catch (error) {
  //facturaSi el modelo no está definido, define uno nuevo
  factura = mongoose.model("factura", facturaModels);
}

export default factura
