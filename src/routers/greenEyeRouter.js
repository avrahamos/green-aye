const router = require("express").Router();
const {
  createPoll,
  getNotification,
  getPollById,
  reply,
  deletePoll,
} = require("../controllers/greenEyeController");
const {
  onlySoldiersAndCommanders,
  onlyCommanders,
} = require("../middlewares/authMiddlewares");

router.post("/", onlyCommanders, createPoll);
router.get("/my", onlySoldiersAndCommanders, getNotification);
router.get("/:id", onlySoldiersAndCommanders, getPollById);
router.post("/reply", onlySoldiersAndCommanders, reply);
router.delete("/:id", onlyCommanders, deletePoll);

module.exports = router;
