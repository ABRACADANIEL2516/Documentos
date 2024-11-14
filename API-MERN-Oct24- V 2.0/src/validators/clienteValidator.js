import Joi from "joi";

export const validateCliente = (req, res, next) => {
  const schema = Joi.object({
    num_doc: Joi.string().required(),
    correo: Joi.string().email().required(),
    contrasena: Joi.string().min(8).required(),
    tipo_documento: Joi.string().required(),
    rol: Joi.string().required(),
    estado: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
