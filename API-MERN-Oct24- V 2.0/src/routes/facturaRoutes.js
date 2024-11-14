import express from "express";
import { createFactura, getFacturas, getFacturaById, updateFactura, deleteFactura } from "../controllers/facturaController.js";
import { validateFactura } from "../validators/facturaValidator.js";

const router = express.Router();

router.post("/", validateFactura, createFactura);
router.get("/", getFacturas);
router.get("/:id", getFacturaById);
router.put("/:id", validateFactura, updateFactura);
router.delete("/:id", deleteFactura);

export default router;
