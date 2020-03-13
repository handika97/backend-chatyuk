const imageModel = require("../models/image");
require("dotenv").config();
module.exports = {
  insertImage: (req, res) => {
    const data = {
      Image: `${process.env.URL}/upload/${req.file.filename}`
    };
    imageModel
      .insertImage(data)
      .then(result => {})
      .catch(err => console.log(err));
  },
  Image: (req, res) => {
    imageModel
      .image()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  }
};
