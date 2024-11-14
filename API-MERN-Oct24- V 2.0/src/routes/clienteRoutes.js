import express from "express";
import { createCliente, getClientes, getClienteById } from "../controllers/clienteController.js";
import { validateCliente } from "../validators/clienteValidator.js";

const router = express.Router();

router.post("/", validateCliente, createCliente);
router.get("/", getClientes);
router.get("/:id", getClienteById);

export default router;
