import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxleanght: 100,
    },
    discription: {
      type: String,
      trim: true,
      maxleanght: 500,
    },
    vedioId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
