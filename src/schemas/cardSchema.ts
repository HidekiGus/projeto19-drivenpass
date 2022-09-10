import Joi from 'joi';

export const cardSchema = Joi.object({
  title: Joi.string().required(),
  cardNumber: Joi.string().required(),
  securityCode: Joi.string().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid('Credit', 'Debit', 'Both').required(),
  userId: Joi.number().integer().required(),
});
