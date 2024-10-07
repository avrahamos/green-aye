const jwt = require("crypto");

const onlyCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userData;
    if (userData.role !== "commander") {
      res.status(403).send("shtzchhhhh.....");
    }
    next();
  } catch (eror) {}
};
const onlySoldiersAndCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userData;
    next();
  } catch (eror) {
    console.log(eror);
    res.status(401).send(eror.messege);
  }
};

module.exports = {
  onlyCommanders,
  onlySoldiersAndCommanders,
};
