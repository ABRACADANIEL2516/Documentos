import markSchema from "../models/markSchema.js";
import { validatorHandler } from "../middleware/validator.handler.js";
import {
  createMarkSchema,
  getMarkSchema,
  updateMarkSchema,
  deleteMarkSchema,
} from "../validators/markValidatorDTO.js";

export const createMark = [
  validatorHandler(createMarkSchema, "body"),
  async (req, res) => {
    const mark = new markSchema(req.body);
    await mark
      .save()
      .then((data) => res.status(201).json(data)) // Cambio el código de estado a 201 para indicar que se creó un nuevo recurso
      .catch((error) => res.status(500).json({ message: error.message })); // Asegúrate de enviar `error.message` para obtener un mensaje más claro
  },
];

export const getMarks = (req, resp) => {
  markSchema
    .find() //Metodo usado para buscar todos los docs de una coleccion
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error }));
};

export const getMarkById = [
  validatorHandler(getMarkSchema, "params"),
  async (req, resp) => {
    const { id } = req.params;
    try {
      const mark = await markSchema.findById(id); //Metodo usado para buscar un documento de una coleccion
      if (!mark) {
        return resp.status(404).json({
          message: "Marca no encontrada",
        });
      }
      resp.json(mark);
    } catch (error) {
      resp.status(500).json({
        message: error.message,
      });
    }
  },
];

export const getMarkByIdWithCategories = [
  validatorHandler(getMarkSchema, "params"),
  async (req, resp) => {
    const { id } = req.params;
    try {
      const mark = await markSchema.findById(id).populate("categories"); // Usar populate para incluir las categorías relacionadas
      if (!mark) {
        return resp.status(404).json({ message: "Marca no encontrada" });
      }
      resp.json(mark);
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
];

export const updateMark = [
  validatorHandler(getMarkSchema, "params"),
  validatorHandler(updateMarkSchema, "body"),
  async (req, resp) => {
    const { id } = req.params;
    const { nombre, imagen, categories } = req.body;
    try {
      // Obtener la marca actual
      const currentMark = await markSchema.findById(id);
      if (!currentMark) {
        return resp.status(404).json({ message: "Marca no encontrada" });
      }
      // Si no se proporcionan categorías en la solicitud, mantener las categorías actuales
      const updatedCategories =
        categories !== undefined ? categories : currentMark.categories;
      const markUpdate = await markSchema.updateOne(
        { _id: id },
        { $set: { nombre, imagen, categories: updatedCategories } }
      );
      if (markUpdate.matchedCount === 0) {
        return resp.status(404).json({ message: "Marca no encontrada" });
      }
      if (markUpdate.modifiedCount === 0) {
        return resp
          .status(400)
          .json({ message: "No se realizaron cambios en la marca" });
      }
      resp.status(200).json({ message: "Marca actualizada correctamente" });
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
];

////
export const deleteMark = [
  // validatorHandler(deleteUserSchema, "params"),

  async (req, resp) => {
    const { id } = req.params;
    try {
      const result = markSchema.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        resp.status(404).json({ message: "Categoria no encontrada" });
      }
      resp.status(200).json({ message: "Categoria eliminada correctamente" });
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
];

// disableUser(){ }
