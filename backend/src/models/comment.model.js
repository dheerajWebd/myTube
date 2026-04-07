import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    vedioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    hertByOwner: {
      type: Boolean,
      default: false,
    },
    commentText: {
      type: String,
      trim: true,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    perentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
      default: null,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
