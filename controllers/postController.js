const Post = require("../models/Post");

const createPost = async (req, res) => {
  const { content } = req.body;
  const newPost = new Post({ userId: req.userId, content });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const userPosts = await Post.find({ userId: req.userId });
    res.json(userPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const likePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.likes.includes(req.userId)) {
      return res
        .status(400)
        .json({ error: "You have already liked this post" });
    }
    post.likes.push(req.userId);
    await post.save();
    res.json({ message: "Post liked successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const commentPost = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    const comment = { userId: req.userId, content };
    post.comments.push(comment);
    await post.save();
    res.status(201).json({ message: "Comment added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createPost, getUserPosts, likePost, commentPost };
