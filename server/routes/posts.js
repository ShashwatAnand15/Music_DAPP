import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  deleteComment,
  postComment,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE

router.patch("/:id/like", verifyToken, likePost);
router.patch("/:postId/:userId/comment/delete", verifyToken, deleteComment);
// POST
router.post("/:postId/:userId/comment", verifyToken, postComment);

export default router;
