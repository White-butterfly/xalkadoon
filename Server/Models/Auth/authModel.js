const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  role: { 
    type: String,
    enum: [
      "admin",
      "user",
    ],
    default: "user", 
  },
});

const Model = mongoose.model("user", userSchema);
module.exports = Model;