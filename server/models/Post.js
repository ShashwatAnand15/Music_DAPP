import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    artistName: {
      type: String,
      required: true,
    },
    picturePath: String,
    songPath: String,
    viewCount: Number,
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
