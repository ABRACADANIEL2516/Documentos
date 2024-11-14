import mongoose from "mongoose";

const materialFabricacionSchema = mongoose.Schema({
  material: { type: String, required: true },
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: "Proveedor" },
});

export default mongoose.model("MaterialFabricacion", materialFabricacionSchema);
