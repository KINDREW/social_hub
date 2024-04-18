const express = require("express");
const router = express.Router();
const {
  register,
  login,
  followUser,
} = require("../controllers/userController");
const { authenticateUser } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/:userId/follow", authenticateUser, followUser);

module.exports = router;
