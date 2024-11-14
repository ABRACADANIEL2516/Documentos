import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
  num_doc: { type: String, required: true },
  correo: { type: String, required: true },
  contrasena: { type: String, required: true },
  tipo_documento: { type: mongoose.Schema.Types.ObjectId, ref: "TipoDocumento" },
  rol: { type: mongoose.Schema.Types.ObjectId, ref: "Rol" },
  estado: { type: mongoose.Schema.Types.ObjectId, ref: "Estado" },
});

export default mongoose.model("Cliente", clienteSchema);
