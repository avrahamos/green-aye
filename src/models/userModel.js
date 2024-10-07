const mongoose = require("mongoose");

const userScema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "req"],
    minLangth: [5, "5"],
  },
  password: {
    type: String,
    required: [true, "req password"],
  },
  role: {
    type: String,
    enoum: ["soldier", "commandar"],
    required: [true, "req role"],
  },
});

const UserModel = mongoose.Model("user", userScema);
