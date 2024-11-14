import Joi from "joi";

export const validateRol = (req, res, next) => {
  const schema = Joi.object({
    rol: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
