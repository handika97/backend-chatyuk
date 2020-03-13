const express = require("express");
const Router = express.Router();
const chatController = require("../controllers/chat");
Router.post("/:idUser_1/:idUser_2", chatController.addChat);
Router.delete("/:idUser_1/:idUser_2", chatController.delChat);

module.exports = Router;
