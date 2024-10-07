const mongoose = require("mongoose");

const userScema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "required name"],
    minlangth: [5, "5"],
  },
  password: {
    type: String,
    required: [true, "required password"],
  },
  role: {
    type: String,
    enoum: ["soldier", "commandar"],
    required: [true, "required role"],
  },
  area: {
    type: String,
    required: [true, "required area"],
    enum: ["north", "west", "center", "suoth", "east"],
  },
  units: {
    type: [Number],
    required: [true, "required unit"],
  },
});

const UserModel = mongoose.model("user", userScema);
module.exports = { UserModel, userScema };
