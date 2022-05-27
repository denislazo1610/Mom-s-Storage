const storage = require("../connectDB/schemaStorage");
const Joi = require("@hapi/joi");
const createError = require("http-errors");
const { validationStorage } = require("../connectDB/validation");

const gettingInfoStorage = (req, res, next) => {
  storage
    .find()
    .then((result) => {
      if (result.length == 0) {
        throw createError(404, "No Clothes Available");
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      next(error);
    });
};

const gettingSingleData = (req, res, next) => {
  const id = req.params.id;

  storage
    .findById(id)
    .then((result) => {
      if (!result) {
        throw createError(404, "This clothes is not available");
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      next(error);
    });
};

const creatingNewData = (req, res, next) => {
  var newData = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    color: req.body.color,
    date: req.body.date,
  };

  try {
    const { value, error } = validationStorage.validate(newData);

    if (error) {
      throw createError(405, error.message);
    } else {
      storage.insertMany(newData);
      res.send(newData);
    }
  } catch (error) {
    next(error);
  }
};

const updatingData = (req, res, next) => {
  const id = req.params.id;
  var updateData = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    color: req.body.color,
    date: req.body.date,
  };

  storage
    .findById(id)
    .then((result) => {
      if (!result) {
        throw createError(404, "This clothes is not available");
      } else {
        const { value, error } = validationStorage.validate(updateData);

        if (error) {
          throw createError(405, error.message);
        } else {
          storage.findByIdAndUpdate(id, updateData, function () {
            res.send(updateData);
          });
        }
      }
    })
    .catch((error) => {
      next(error);
    });
};

const deletingData = (req, res, next) => {
  const id = req.params.id;

  storage
    .findById(id)
    .then((result) => {
      if (!result) {
        throw createError(404, "This clothes did not exist before");
      } else {
        storage.findByIdAndDelete(id, function () {
          storage.find().then((result) => {
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
  gettingInfoStorage,
  gettingSingleData,
  creatingNewData,
  updatingData,
  deletingData,
};
