const storage = require("../connectDB/schemaStorage");

const gettingInfoStorage = (req, res) => {
  storage.find().then((result) => {
    res.send(result);
  });
};

module.exports = { gettingInfoStorage };
