const { createUser } = require("../services/userService");

const register = async (req, res) => {
  try {
    await createUser(req.body);
    res.status(201).json({
      msg: "user created",
    });
  } catch (eror) {
    res.status(400).json(err);
  }
};

const getProfile = async (req, res) => {
  try {
  } catch (eror) {}
};

const setSetinngs = async (req, res) => {
  try {
  } catch (eror) {}
};

module.exports = {
  getProfile,
  setSetinngs,
  register,
};
