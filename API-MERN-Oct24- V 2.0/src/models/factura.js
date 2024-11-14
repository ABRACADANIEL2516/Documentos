import mongoose from "mongoose";

const facturaSchema = mongoose.Schema({
  total_factura: { type: Number, required: true },
  pedido: { type: mongoose.Schema.Types.ObjectId, ref: "Pedido" },
  metodo_pago: { type: mongoose.Schema.Types.ObjectId, ref: "MetodoPago" },
});

export default mongoose.model("Factura", facturaSchema);
