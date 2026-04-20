import mongoose from "mongoose";
import { Post } from "../models/post.model.js";
import asyncHandler from "../utils/ansicHandler.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";
import successResponse from "../utils/successResponse.js";
import { CommentController } from "./comment.controller.js";

export const postController = asyncHandler(async (req, res, next) => {
  const user = req?.user;

  if (!user)
    throw new ErrorFormater("unathorised requested plz login", "", 401);
  const { postData, title, description, links, channelId } = req.body;

  if (!title || !description || !channelId)
    throw new ErrorFormater(
      "this fild are required title and description channelId",
      "",
      400
    );

  const newPost = await Post.create({
    postData: postData || undefined,
    title,
    description,
    links: links || undefined,
    owner: channelId,
  });

  if (!newPost)
    throw new ErrorFormater(
      "post not created plz try again due to server error",
      "",
      500
    );

  res
    .status(201)
    .json(new successResponse(201, newPost, "post created successfully"));
});

export const editpostController = asyncHandler(async (req, res, next) => {
  const user = req?.user;

  if (!user)
    throw new ErrorFormater("unathorised requested plz login", "", 401);
  const { postData, title, description, links, postId } = req.body;

  if (!title || !description)
    throw new ErrorFormater(
      "this fild are required title and description",
      "",
      400
    );
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      postData: postData || undefined,
      title,
      description,
      links: links || undefined,
    },
    { new: true, validateDeforeSave: false }
  );

  if (!updatedPost) throw new ErrorFormater("Invalid postId provided", "", 400);
  res
    .status(200)
    .json(new successResponse(200, updatedPost, "post updated successfully"));
});

export const deletepostController = asyncHandler(async (req, res, next) => {
  const user = req?.user;

  if (!user)
    throw new ErrorFormater("unathorised requested plz login", "", 401);
  const { postId } = req.body;

  if (!postId)
    throw new ErrorFormater("this fild are required postId", "", 400);

  const deletedPost = await Post.findByIdAndDelete(postId);

  if (!deletedPost) throw new ErrorFormater("Invalid postId provided", "", 400);
  res
    .status(200)
    .json(new successResponse(200, deletedPost, "post deleted successfully"));
});

export const getpostController = asyncHandler(async (req, res, next) => {
  // const { postId } = req.params;
  const { channelId, postId } = req.query;

  if (!channelId)
    throw new ErrorFormater("this fild are required channelId", "", 400);

  const post = await Post.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(postId) } },

    {
      $lookup: {
        from: "channels",
        localField: "owner",
        foreignField: "_id",
        as: "ownerInfo",
      },
    },
    {
      $unwind: {
        path: "$ownerInfo",
        preserveNullAndEmptyArrays: true,
      },
    },
    // {
    //   $lookup: {
    //     from: "links",
    //     localField: "links",
    //     foreignField: "_id",
    //     as: "linkInfo"
    //   }
    // },
    // CommentController
    {
      $lookup: {
        from: "comments",
        // let: { postId: "$_id" },
        pipeline: [
          {
            $match: {
              postId: new mongoose.Types.ObjectId(postId),
            },
          },
        ],
        as: "commentInfo",
      },
    },
    {
      $unwind: "$commentInfo",
    },
  ]);
  console.log(post[0]);

  if (!post) throw new ErrorFormater("Invalid postId provided", "", 400);
  res
    .status(200)
    .json(new successResponse(200, post[0], "post fetched successfully"));
});
