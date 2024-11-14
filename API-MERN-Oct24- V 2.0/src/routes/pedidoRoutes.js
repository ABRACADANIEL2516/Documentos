import express from "express";
import { createPedido, getPedidos, getPedidoById, updatePedido, deletePedido } from "../controllers/pedidoController.js";
import { validatePedido } from "../validators/pedidoValidator.js";

const router = express.Router();

router.post("/", validatePedido, createPedido);
router.get("/", getPedidos);
router.get("/:id", getPedidoById);
router.put("/:id", validatePedido, updatePedido);
router.delete("/:id", deletePedido);

export default router;
