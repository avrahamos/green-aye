const router = require("express").Router();
const { login, logout } = require("../controllers/aouthController");

router.post("/login", login);
router.delete("/logout", logout);

module.exports = router;
