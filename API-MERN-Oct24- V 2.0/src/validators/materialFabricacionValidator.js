import Joi from "joi";

export const validateMaterialFabricacion = (req, res, next) => {
  const schema = Joi.object({
    material: Joi.string().required(),
    proveedor: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
