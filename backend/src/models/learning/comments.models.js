import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({});

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;
