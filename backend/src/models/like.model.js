import mongoose from "mongoose";

const Option = {
  discriminatorKey: "type",
  collection: "likes",
  timestamps: true,
};

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reaction: {
      type: String,
      enum: ["like", "dislike"],
    },
  },
  Option
);

export const Like = mongoose.model("Like", likeSchema);

export const video = Like.discriminator(
  "video",
  new mongoose.Schema({
    videoId: {
      type: mongoose.Types.ObjectId,
      ref: "Video",
      required: true,
    },
  })
);

export const post = Like.discriminator(
  "post",
  new mongoose.Schema({
    postId: {
      type: mongoose.Types.ObjectId,
      ref: "post",
      required: true,
    },
  })
);

export const comment = Like.discriminator(
  "comment",
  new mongoose.Schema({
    commenttId: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
  })
);
