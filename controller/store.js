const storage = require("../connectDB/schemaStorage");

const gettingInfoStorage = (req, res) => {
  storage.find().then((result) => {
    res.send(result);
  });
};

const gettingSingleData = (req, res) => {
  const id = req.params.id;

  storage.findById(id).then((result) => {
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

const updatingData = (req, res) => {
  const id = req.params.id;
  var updateData = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    color: req.body.color,
    date: req.body.date,
  };

  storage.findByIdAndUpdate(id, updateData, function () {
    res.send(updateData);
  });
};

const deletingData = (req, res) => {
  const id = req.params.id;

  storage.findByIdAndDelete(id, function () {
    storage.find().then((result) => {
      res.send(result);
    });
  });
};

module.exports = {
  gettingInfoStorage,
  gettingSingleData,
  creatingNewData,
  updatingData,
  deletingData,
};
