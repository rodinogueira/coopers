import Joi from 'joi';

export const toDoTaskValidation = Joi.object({
  text: Joi.string().required(),
  checked: Joi.boolean().default(false),
  done: Joi.boolean().default(false),
  userId: Joi.object(),
  created_at: Joi.date().default(Date.now),
  updated_at: Joi.date().default(Date.now)
});

