const Joi = require("@hapi/joi");

const validationStorage = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.string().required(),
  price: Joi.string().required(),
  color: Joi.string().required(),
  date: Joi.string().required(),
});

module.exports = { validationStorage };
