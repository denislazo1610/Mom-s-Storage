const customer = require("../models/customer");
const Joi = require("@hapi/joi");
const createError = require("http-errors");
const { validationCustomer } = require("../validation/customer");

const gettingInfoCustomers = (req, res, next) => {
  customer
    .find()
    .then((result) => {
      if (result.length == 0) {
        throw createError(404, "No Customer");
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      next(error);
    });
};

const gettingSingleCustomer = (req, res, next) => {
  const id = req.params.id;

  customer
    .findById(id)
    .then((result) => {
      if (!result) {
        throw createError(404, "This customer does not exist");
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      next(error);
    });
};

const creatingNewCustomer = (req, res, next) => {
  var newData = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    BornPlace: req.body.BornPlace,
    Trust: req.body.Trust,
    Birthday: req.body.Birthday,
    Residence: req.body.Residence,
    LastActionActive: req.body.LastActionActive,
  };

  try {
    const { value, error } = validationCustomer.validate(newData);

    if (error) {
      throw createError(405, error.message);
    } else {
      customer.insertMany(newData);
      res.send(newData);
    }
  } catch (error) {
    next(error);
  }
};

const updatingCustomer = (req, res, next) => {
  const id = req.params.id;
  var updateData = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    BornPlace: req.body.BornPlace,
    Trust: req.body.Trust,
    Birthday: req.body.Birthday,
    Residence: req.body.Residence,
    LastActionActive: req.body.LastActionActive,
  };

  customer
    .findById(id)
    .then((result) => {
      if (!result) {
        throw createError(404, "This custome does not exist");
      } else {
        const { value, error } = validationCustomer.validate(updateData);

        if (error) {
          throw createError(405, error.message);
        } else {
          customer.findByIdAndUpdate(id, updateData, function () {
            res.send(updateData);
          });
        }
      }
    })
    .catch((error) => {
      next(error);
    });
};

const deletingCustomer = (req, res, next) => {
  const id = req.params.id;

  customer
    .findById(id)
    .then((result) => {
      if (!result) {
        throw createError(404, "This customer already did not exist");
      } else {
        customer.findByIdAndDelete(id, function () {
          customer.find().then((result) => {
            res.send(result);
          });
        });
      }
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = {
  gettingInfoCustomers,
  gettingSingleCustomer,
  creatingNewCustomer,
  updatingCustomer,
  deletingCustomer,
};
