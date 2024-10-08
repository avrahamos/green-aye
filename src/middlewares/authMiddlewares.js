const jwt = require("jsonwebtoken");

const onlyCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userData;
    if (userData.role !== "commander") {
      res.status(403).send("shtzchhhhh.....");
    }
    req.user = userData;
    next();
  } catch (eror) {}
};
const onlySoldiersAndCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).send("Access denied. No token provided.");
    }

    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userData;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message);
  }
};

module.exports = {
  onlyCommanders,
  onlySoldiersAndCommanders,
};
