import { Channel } from "../models/channel.model.js";
import { Video } from "../models/video.model.js";
import asyncHandler from "../utils/ansicHandler.js";
import successResponse from "../utils/successResponse.js";
import uplodOnCloudinary from "../utils/cloudinary.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";

export const videoControll = asyncHandler(async (req, res, next) => {
  console.log(req.params._id);

  const isVarified = await Channel.findById(req.params._id);
  if (!isVarified)
    throw new ErrorFormater(
      "unathoriztion request channel is no not find ",
      [""],
      404
    );

  const { isPublish, decription, tittle, isChildren } = req.body;
  const { video, thumbnail } = req.files;
  if (
    [isPublish, decription, tittle, isChildren, video, thumbnail].some(
      field => field === ""
    )
  ) {
    throw new ErrorFormater(
      "isPublish, decription, tittle ,isChildren,video,thumbnail this filds are required",
      [""],
      404
    );
  }
  const thumbnailPath = thumbnail[0].path;
  const videoPath = video[0].path;
  const thumbnailUplode = await uplodOnCloudinary(
    thumbnailPath,
    "/video/thumbnail/",
    "videoThumdnails"
  );
  const videolUplode = await uplodOnCloudinary(
    videoPath,
    "/video/userVideo",
    "videos"
  );

  const updateVideoCount = await Channel.findByIdAndUpdate(
    req.params._id,
    {
      $set: { videosCount: isVarified.videosCount + 1 },
    },
    { new: true }
  ).projection({ videosCount: 1 });
  const postedVideo = await Video.create({
    isPublish,
    decription,
    tittle,
    isChildren,
    video: videolUplode?.url || "",
    thumbnail: thumbnailUplode?.url || "",
  });
  res
    .status(200)
    .json(
      new successResponse(
        201,
        { ...postedVideo, ...updateVideoCount },
        "video uploded successfully "
      )
    );
});
