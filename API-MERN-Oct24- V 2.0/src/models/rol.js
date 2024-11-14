import mongoose from "mongoose";

const rolSchema = mongoose.Schema({
  rol: { type: String, required: true },
});

export default mongoose.model("Rol", rolSchema);
