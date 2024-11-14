import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
  cant_productos: { type: Number, required: true },
  localidad: { type: mongoose.Schema.Types.ObjectId, ref: "Localidad" },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
});

export default mongoose.model("Pedido", pedidoSchema);
