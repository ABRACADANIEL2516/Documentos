import express from "express";
import { createRol, getRoles, getRolById, updateRol, deleteRol } from "../controllers/rolController.js";
import { validateRol } from "../validators/rolValidator.js";

const router = express.Router();

router.post("/", validateRol, createRol);
router.get("/", getRoles);
router.get("/:id", getRolById);
router.put("/:id", validateRol, updateRol);
router.delete("/:id", deleteRol);

export default router;
