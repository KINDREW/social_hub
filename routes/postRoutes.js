const express = require("express");
const router = express.Router();
const {
  createPost,
  getUserPosts,
  likePost,
  commentPost,
} = require("../controllers/postController");
const { authenticateUser } = require("../middleware/authMiddleware");

router.post("/", authenticateUser, createPost);
router.get("/", authenticateUser, getUserPosts);
router.post("/:postId/like", authenticateUser, likePost);
router.post("/:postId/comment", authenticateUser, commentPost);

module.exports = router;
