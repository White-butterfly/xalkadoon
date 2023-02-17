const express = require("express");
const Controller = require("../../Controllers/Auth/authController");

const Router = express.Router();

Router.route("/").post(Controller.saveUser);
Router.route("/get/:token").get(Controller.getUsers); 
Router.route("/signUp").post(Controller.loginUser);
Router.route("/forgotPassword").post(Controller.forgetPassword);
Router.route("/RestPassword/:token").post(Controller.RestPassword);

module.exports = Router; 