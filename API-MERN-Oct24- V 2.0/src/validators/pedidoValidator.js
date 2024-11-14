import Joi from "joi";

export const validatePedido = (req, res, next) => {
  const schema = Joi.object({
    cant_productos: Joi.number().integer().min(1).required(),
    localidad: Joi.string().required(),
    cliente: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
