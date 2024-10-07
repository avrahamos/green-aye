const { login: loginFromService } = require("../services/authService");

const login = async (req, res) => {
  try {
    const token = await loginFromService(req.body);
    res.cookie("token", token);
    res.json({
      msg: `welcome ${req.body.user_name}`,
    });
  } catch (eror) {
    res.status(400).json(eror);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCooki("token");
    res.sendStatus(200);
  } catch (eror) {
    res.sendStatus(500);
  }
};

module.exports = {
  logout,
  login,
};
