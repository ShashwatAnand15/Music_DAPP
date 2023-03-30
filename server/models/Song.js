import mongoose from "mongoose";

const songSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    artistName: {
      type: String,
      required: true,
    },
    picturePath: String,
    audioPath: String,
    viewCount: Number,
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Post", songSchema);

export default Song;
