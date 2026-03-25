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
    [decription, tittle].some(field => field === "") ||
    !video ||
    !thumbnail ||
    isPublish === undefined ||
    isChildren === undefined
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
      $inc: { videosCount: 1 },
    },
    { new: true }
  );

  const postedVideo = await Video.create({
    isPublish,
    owner:req.params._id,
    decription,
    tittle,
    isChildren,
    video: {
      publicId: videolUplode?.public_id,
      url: videolUplode?.url,
    },
    thumbnail: {
      publicId: thumbnailUplode?.public_id,
      url: thumbnailUplode?.url,
    },
  });

  res
    .status(200)
    .json(
      new successResponse(201, { postedVideo ,updateVideoCount}, "video uploded successfully ")
    );
});
