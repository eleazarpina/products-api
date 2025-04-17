import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().trim().required(),
  prod_line: Joi.string().trim().min(6).required(),
  min_stock: Joi.number().default(0).min(0).required(),  
});

