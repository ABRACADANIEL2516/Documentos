import Rol from "../models/rol.js";

// Crear un nuevo rol
export const createRol = async (req, res) => {
  try {
    const rol = new Rol(req.body);
    await rol.save();
    res.status(201).json(rol);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los roles
export const getRoles = async (req, res) => {
  try {
    const roles = await Rol.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un rol por ID
export const getRolById = async (req, res) => {
  try {
    const rol = await Rol.findById(req.params.id);
    if (!rol) return res.status(404).json({ message: "Rol no encontrado" });
    res.json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un rol
export const updateRol = async (req, res) => {
  try {
    const rol = await Rol.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rol) return res.status(404).json({ message: "Rol no encontrado" });
    res.json(rol);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un rol
export const deleteRol = async (req, res) => {
  try {
    const rol = await Rol.findByIdAndDelete(req.params.id);
    if (!rol) return res.status(404).json({ message: "Rol no encontrado" });
    res.json({ message: "Rol eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
