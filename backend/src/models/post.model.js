// create a post scheama for post image or message
// // post [icon:post ,color:gray]{
//   id string pk
//   postData string
//   tittle string
//   discription string
//   links  enum channel,video
//   owner user
//   like number 0
//   comment object comment

import mongoose from "mongoose";

// }
const postSchema = new mongoose.Schema(
  {
    postData: {
      type: String,
      trim: true,
    },
    tittle: {
      type: String,
      trim: true,
      maxlength: 100,
      required: true,
    },
    discription: {
      type: String,
      trim: true,
      maxlength: 500,
      required: true,
    },
    links: {
      type: mongoose.Types.ObjectId,
      ref: "links",
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Channel",
    },
    comment: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);
