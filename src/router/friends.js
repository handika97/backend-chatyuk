const express = require("express");
const Router = express.Router();
const friendsController = require("../controllers/friends");
Router.post("/:id_user/:id_friends", friendsController.addFriends);
Router.delete("/:id_user/:id_friends", friendsController.delFriends);
Router.get("/all/:id_user/", friendsController.getFriends);

module.exports = Router;
