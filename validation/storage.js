const Joi = require("@hapi/joi");

const validationStorage = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  price: Joi.number().integer().min(0).required(),
  color: Joi.string().required(),
  date: Joi.string().required(),
});

module.exports = { validationStorage };
