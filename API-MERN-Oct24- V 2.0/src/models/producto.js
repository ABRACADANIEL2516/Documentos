import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
  producto: { type: String, required: true },
  material_fabricacion: { type: mongoose.Schema.Types.ObjectId, ref: "MaterialFabricacion" },
  tipo_producto: { type: mongoose.Schema.Types.ObjectId, ref: "TipoProducto" },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  pedido: { type: mongoose.Schema.Types.ObjectId, ref: "Pedido" },
});

export default mongoose.model("Producto", productoSchema);
