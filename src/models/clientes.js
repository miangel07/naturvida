import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  cedula: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

let Cliente;

try {
  // Intenta obtener el modelo si ya está definido
  Cliente = mongoose.model("clientes");
} catch (error) {
  // Si el modelo no está definido, define uno nuevo
  Cliente = mongoose.model("clientes", clienteSchema);
}

export default Cliente;
