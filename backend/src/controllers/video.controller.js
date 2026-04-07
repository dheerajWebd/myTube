import { Channel } from "../models/channel.model.js";
import { Video } from "../models/video.model.js";
import asyncHandler from "../utils/ansicHandler.js";
import successResponse from "../utils/successResponse.js";
import uplodOnCloudinary from "../utils/cloudinary.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";

export const videoControll = asyncHandler(async (req, res, next) => {
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

  const postedVideo = await Video.create({
    isPublish,
    owner: req.params._id,
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

  const updateVideoCount = await Channel.findByIdAndUpdate(
    req.params._id,
    {
      $inc: { videosCount: 1 },
    },
    { new: true }
  );


  res
    .status(200)
    .json(
      new successResponse(
        201,
        { postedVideo, updateVideoCount },
        "video uploded successfully "
      )
    );
});

export const editVideos = asyncHandler(async (req, res, next) => {
  const { tittle, tag, decription, video_id } = req.body;
  if (!tittle || !tag || !decription)
    throw new ErrorFormater(
      "required tittle tag or discription for edit",
      "",
      400
    );

  const Video = await Video.findOne({
    _id: video_id,
  });

  if (!Video)
    throw new ErrorFormater(
      "video_id is wrong plz send correct video_id ",
      "",
      400
    );

  const updatedvideo = await Video.findByIdAndUpdate(
    video_id,
    {
      $set: {
        tittle,
        decription,
        tag,
      },
    },
    {
      new: true,
      validateDeforeSave: false,
    }
  );

  if (!updatedvideo) {
    throw ErrorFormater(
      "server error to save in db plz reupdate th vedio deatials ",
      "",
      500
    );
  }
  res
    .status(200)
    .json(new successResponse(200, updatedvideo, "video updated successfully"));
});

export const editThumbnail = asyncHandler(async (req, res, next) => {
  if (!req.file.thumbnail.path) {
    return new ErrorFormater(
      "file is not find plz send the image file ",
      "",
      400
    );
  }
  if (!req.body.video_id) {
    return new ErrorFormater(
      "plz send the video_id to edit thumbnail",
      "",
      400
    );
  }
  const thumbnailUplode = await uplodOnCloudinary(
    req.body.video_id,
    "/video/thumbnail/",
    "videoThumdnails"
  );
  if (!thumbnailUplode) {
    return new ErrorFormater(
      "server error to uplode the thumbnail plz reupload the thumbnail image file",
      "",
      500
    );
  }

  const updatedThumbnail = await Video.findByIdAndUpdate(
    req.body.video_id,
    {
      $set: {
        thumbnail: {
          publicId: thumbnailUplode.public_id,
          url: thumbnailUplode.url,
        },
      },
    },
    {
      new: true,
      validateDeforeSave: false,
    }
  );
  res
    .status(200)
    .json(
      new successResponse(
        200,
        updatedThumbnail,
        "thumbnail updated successfully"
      )
    );
});

export const deleteVideo = asyncHandler(async (req, res, next) => {
  const deletedVideo = await Video.findOneAndDelete({
    _id: req.params.video_id,
  });
  if (!deleteVideo) {
    throw new ErrorFormater(
      "does not find the video to send the video id so plz send correct id ",
      "",
      404
    );
  }
  res
    .status(200)
    .json(
      new successResponse(
        200,
        {},
        "deleted video successfully enjoy the services or typo in spallings and sorry"
      )
    );
});
