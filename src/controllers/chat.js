const chatModel = require("../models/chat");
require("dotenv").config();

//const miscHelper = require("../helpers/helper");

var jwt = require("jsonwebtoken");

module.exports = {
  addChat: (req, res) => {
    idUser_1 = req.params.idUser_1;
    idUser_2 = req.params.idUser_2;
    console.log("idUser_1");
    chatModel.getAllChat(idUser_1, idUser_2).then(result => {
      if (result.length === 0) {
        chatModel.addChat(idUser_1, idUser_2).then(result => {
          res.json(true);
        });
      } else {
        res.json(result[0].idRoom);
      }
    });
  },
  delChat: (req, res) => {
    idUser_1 = req.params.idUser_1;
    idUser_2 = req.params.idUser_2;
    chatModel
      .delChat(idUser_1, idUser_2)
      .then(result => {
        res.json(true);
      })
      .catch(false);
  }
};
