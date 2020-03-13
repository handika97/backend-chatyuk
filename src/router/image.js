const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./upload");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });
const Router = express.Router();
const imageController = require("../controllers/image");
//, upload.single("Image")
Router.post("/", upload.single("Image"), imageController.insertImage);

module.exports = Router;
