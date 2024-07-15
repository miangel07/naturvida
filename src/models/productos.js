import mongoose from "mongoose"
const productoSchemal = mongoose.Schema({
    codigo:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    valor:{
        type: Number,
        required:true
    },
    cantidad:{
        type: Number,
        required:true
    }
})
let productos;

try {
  // Intenta obtener el modelo si ya está definido
  productos = mongoose.model("productos");
} catch (error) {
  //productosSi el modelo no está definido, define uno nuevo
  productos = mongoose.model("productos", productoSchemal);
}
export default productos;