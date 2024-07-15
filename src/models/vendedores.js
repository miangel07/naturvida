import mongoose from "mongoose"
const vendedoresSchema = mongoose.Schema({
    usuario : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required: true
    }
})

let vendedores;

try {
  // Intenta obtener el modelo si ya está definido
  vendedores = mongoose.model("vendedores");
} catch (error) {
  //vendedoresSi el modelo no está definido, define uno nuevo
  vendedores = mongoose.model("vendedores", vendedoresSchema);
}

export default vendedores