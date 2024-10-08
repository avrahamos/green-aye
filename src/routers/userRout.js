const router = require("express").Router();
const {
  register,
  getProfile,
  setSetinngs,
} = require("../controllers/userController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");

router.post("/register", register);
router.get("/profile", onlySoldiersAndCommanders, getProfile);
router.patch("/settings", onlySoldiersAndCommanders, setSetinngs);

module.exports = router;
