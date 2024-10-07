const bcrypt = require("crypto");
const { UserModel } = require("../models/userModel");
const createUser = async (user) => {
  try {
    const { user_name, password, role, area, units } = user;
    const hashPassword = bcrypt.hash(password, 10);
    const dbUser = new UserModel({
      user_name,
      password: hashPassword,
      role,
      area,
      units,
    });
    await dbUser.save();
  } catch (err) {}
};

module.exports = {
  createUser,
};
