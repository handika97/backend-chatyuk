const express = require("express");
// const orders = require("./orders");
const users = require("./users");
const roomChat = require("./roomChat");
const friends = require("./friends");
const image = require("./image");

const Router = express.Router();

Router.use("/users", users);
Router.use("/roomChat", roomChat);
Router.use("/friends", friends);
Router.use("/image", image);

module.exports = Router;
