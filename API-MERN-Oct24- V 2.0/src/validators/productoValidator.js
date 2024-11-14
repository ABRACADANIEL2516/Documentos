import Joi from "joi";

export const validateProducto = (req, res, next) => {
  const schema = Joi.object({
    producto: Joi.string().required(),
    material_fabricacion: Joi.string().required(),
    tipo_producto: Joi.string().required(),
    cliente: Joi.string().required(),
    pedido: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
