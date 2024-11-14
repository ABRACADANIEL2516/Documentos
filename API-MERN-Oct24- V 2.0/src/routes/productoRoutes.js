import express from "express";
import { createProducto, getProductos, getProductoById, updateProducto, deleteProducto } from "../controllers/productoController.js";
import { validateProducto } from "../validators/productoValidator.js";

const router = express.Router();

router.post("/", validateProducto, createProducto);
router.get("/", getProductos);
router.get("/:id", getProductoById);
router.put("/:id", validateProducto, updateProducto);
router.delete("/:id", deleteProducto);

export default router;
