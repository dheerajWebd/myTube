import { Channel } from "../models/channel.model.js";
import { User } from "../models/user.model.js";
import asyncHandler from "../utils/ansicHandler.js";
import uplodOnCloudinary from "../utils/cloudinary.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";
import successResponse from "../utils/successResponse.js";

export const channelController = asyncHandler(async (req, res, next) => {
  const isVarified = await User.findById(req.user?._id);
  if (!isVarified)
    throw new ErrorFormater(
      "unathoriztion request user is no not Verified ",
      [""],
      403
    );

  const { description, handle, channelName, isChildren, link } = req.body;

  if (!channelName || !handle)
    throw new ErrorFormater(
      "the channel name or handle is required ",
      [""],
      403
    );
  const isHandle = await Channel.findOne({
    $or: [{ owner: req.user?._id }, { handle }],
  });

  if (isHandle)
    throw new ErrorFormater(
      "heandle is taken bay other user or you have already created a channel ",
      "",
      403
    );
  const uplodeChannelCoverimg = await uplodOnCloudinary(
    req.file?.path,
    "/channelCoverImg/",
    "channelcoverimage"
  );

  console.log(uplodeChannelCoverimg?.url);
  const createdChannel = await Channel.create({
    description: description || "",
    owner: isVarified._id,
    channelName,
    handle,
    coverImg: uplodeChannelCoverimg?.url || "",
    isChildren: isChildren || false,
    link: link || [{ url: "", title: "" }],
  });

  if (!createdChannel)
    throw new ErrorFormater(
      "server error data is not save while save in db plz try agan later "[""],
      500
    );

  res
    .status(201)
    .json(
      new successResponse(201, createdChannel, "channel created successfully")
    );
});
