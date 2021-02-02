import Joi from 'joi';

export const movieSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().integer().min(0).required(),
  rating: Joi.number().min(0).max(10).required(),
  producer: Joi.string().required(),
  budget: Joi.number().min(0).required(),
  poster: Joi.string().required(),
  actors: Joi.array().items(Joi.string()).required(),
});
