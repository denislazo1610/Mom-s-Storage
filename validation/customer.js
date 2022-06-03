const Joi = require("@hapi/joi");

const validationCustomer = Joi.object().keys({
  FirstName: Joi.string().required(),
  LastName: Joi.string().required(),
  BornPlace: Joi.string().required(),
  Trust: Joi.number().integer().min(1).max(10).required(),
  Birthday: Joi.string().required(),
  Residence: Joi.string().required(),
  LastActionActive: Joi.string().required(),
});

module.exports = { validationCustomer };
