const router = require("express").Router();
const {
  register,
  getProfile,
  setSetinngs,
} = require("../controllers/userController");

router.post("/register", register);
router.get("/profile", getProfile);
router.patch("/settings", setSetinngs);

module.exports = router;
