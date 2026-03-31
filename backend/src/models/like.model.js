import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    vedioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    disLike: {
      type: Number,
      default: 0,
    },

    likeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
      required: true,
    },

    likeHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
