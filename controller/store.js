const storage = require("../connectDB/schemaStorage");

const gettingInfoStorage = (req, res) => {
  storage.find().then((result) => {
    res.send(result);
  });
};

const gettingSingleData = (req, res) => {
  storage.findById(req.params.id).then((result) => {
    res.send(result);
  });
};

const creatingNewData = (req, res) => {
  var newData = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    color: req.body.color,
    date: req.body.date,
  };
  storage.insertMany(newData);
  res.send(newData);
};

module.exports = { gettingInfoStorage, gettingSingleData, creatingNewData };
