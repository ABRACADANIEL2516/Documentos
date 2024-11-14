import express from "express";
import {
  createMark,
  getMarks,
  getMarkById,
  getMarkByIdWithCategories,
  updateMark,
  deleteMark,
} from "../controllers/markCtrl.js";

const router = express.Router();

router.post("/mark", createMark);

router.get("/mark", getMarks);

router.get("/mark/:id", getMarkById);

router.get("/mark/:id/categories", getMarkByIdWithCategories);

router.put("/mark/:id", updateMark);

router.delete("/mark/:id", deleteMark);

//Aqui van las rutas para consultar las categorias de una marca

// // Agregar una categoría a una marca
// router.post("/mark/:id/categories", addCategoryToMark);

export default router;
