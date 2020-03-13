const friendsModel = require("../models/friends");
require("dotenv").config();

//const miscHelper = require("../helpers/helper");

var jwt = require("jsonwebtoken");

module.exports = {
  addFriends: (req, res) => {
    id_user = req.params.id_user;
    id_friends = req.params.id_friends;

    friendsModel.getAllFriends(id_user, id_friends).then(result => {
      if (result.length === 0) {
        friendsModel.addFriends(id_user, id_friends).then(result => {
          res.json(true);
        });
      } else {
        res.json(false);
      }
    });
  },
  delFriends: (req, res) => {
    id_user = req.params.id_user;
    id_friends = req.params.id_friends;
    friendsModel
      .delFriends(id_user, id_friends)
      .then(result => {
        res.json(true);
      })
      .catch(false);
  },
  getFriends: (req, res) => {
    id_user = req.params.id_user;
    friendsModel
      .getFriends(id_user)
      .then(result => {
        res.json(result);
      })
      .catch(false);
  }
};
