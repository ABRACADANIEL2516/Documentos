import express from "express";
import { createMaterialFabricacion, getMaterialesFabricacion, getMaterialFabricacionById, updateMaterialFabricacion, deleteMaterialFabricacion } from "../controllers/materialFabricacionController.js";
import { validateMaterialFabricacion } from "../validators/materialFabricacionValidator.js";

const router = express.Router();

router.post("/", validateMaterialFabricacion, createMaterialFabricacion);
router.get("/", getMaterialesFabricacion);
router.get("/:id", getMaterialFabricacionById);
router.put("/:id", validateMaterialFabricacion, updateMaterialFabricacion);
router.delete("/:id", deleteMaterialFabricacion);

export default router;
