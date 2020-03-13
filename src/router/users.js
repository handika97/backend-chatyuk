const express = require("express");
const Router = express.Router();
const userController = require("../controllers/users");
Router.post("/register", userController.registerUsers)
  //   .patch("/verification/:token", userController.verificationUsers)
  //   .patch("/forgetPassword/", userController.forgetPasswordUsers)
  //   .patch("/forgetPassword/:token", userController.setPasswordUsers)
  .patch("/:token", userController.updateUsers)
  .delete("/:token", userController.deleteUsers)
  .post("/login", userController.loginUsers)
  .post("/logout/:token", userController.logoutUsers)
  .get("/:token", userController.checkingToken)
  .get("/getusers/:email", userController.getUsers),
  (module.exports = Router);
