import { commentReaction, Like, videoReaction } from "../models/like.model.js";
import asyncHandler from "../utils/ansicHandler.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";
import { Video } from "../models/video.model.js";
import { Comment } from "../models/comment.model.js";
import successResponse from "../utils/successResponse.js";

export const likeControll = asyncHandler(async (req, res, next) => {
  let create;
  const userId = req.user;

  if (!userId) throw new ErrorFormater("unathorized request", "", 401);

  const { reaction, whichlikeId, id } = req.body;
  if (!reaction?.trim() || !whichlikeId || !id)
    throw new ErrorFormater(
      "reaction or Whichlike or id, fild are required. Where react like or dislike and whichlike video ,post comment",
      "",
      401
    );

  if (whichlikeId?.trim()?.toLowerCase() === "video") {
    const isvideo = await Video.findById(id);
    if (!isvideo) throw new ErrorFormater("video is not present ", "", 404);

    if (reaction?.trim()?.toLowerCase() === "like") {
      const isvideoReaction = await videoReaction.findOne({
        userId: userId._id,
        videoId: id,
      });

      if (isvideoReaction)
        throw new ErrorFormater("videoReaction is present", "", 403);

      create = await videoReaction.create({
        userId: userId._id,
        reaction: "like",
        videoId: id,
      });
    } else if (reaction?.trim()?.toLowerCase() === "dislike") {
      const isvideoReaction = await videoReaction.findOne({
        videoId: id,
        userId: userId._id,
        reaction: "like",
      });

      if (isvideoReaction)
        throw new ErrorFormater("videoreaction is present ", "", 403);

      create = await videoReaction.create({
        userId: userId._id,
        reaction: "dislike",
        videoId: id,
      });
    }
  } else if (whichlikeId?.trim()?.toLowerCase() === "comment") {
    const iscomment = await Comment.findById(id);
    if (!iscomment) throw new ErrorFormater("comment is not present ", "", 404);

    if (reaction?.trim()?.toLowerCase() === "like") {
      const iscommentReaction = await commentReaction.findOne({
        userId: userId._id,
        commentId: id,
      });

      if (iscommentReaction)
        throw new ErrorFormater("commentreaction is present", "", 403);

      create = await commentReaction.create({
        userId: userId._id,
        reaction: "like",
        commentId: id,
      });
    } else if (reaction?.trim()?.toLowerCase() === "dislike") {
      const iscommentReaction = await commentReaction.findOne({
        commentId: id,
        userId: userId._id,
      });

      if (iscommentReaction)
        throw new ErrorFormater("commentreaction is present ", "", 403);

      create = await commentReaction.create({
        userId: userId._id,
        reaction: "dislike",
        commentId: id,
      });
    }
  }

  console.log(create);

  res.json(new successResponse(200, create, "create successfull"));
});
