import Joi from "joi";

export const validateFactura = (req, res, next) => {
  const schema = Joi.object({
    total_factura: Joi.number().min(0).required(),
    pedido: Joi.string().required(),
    metodo_pago: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
