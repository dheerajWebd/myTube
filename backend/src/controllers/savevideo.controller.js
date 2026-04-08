import asyncHandler from "../utils/ansicHandler.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";
import { Channel } from "../models/channel.model.js";
import successResponse from "../utils/successResponse.js";
import { SaveVideo } from "../models/saveVideo.model.js";

export const saveVideoController = asyncHandler(async (req, res, next) => {
  const user = req?.user;
  if (!user)
    throw new ErrorFormater("unathorised requested plz login", "", 404);
  const { tittle, discription, videoId, channelId } = req.body;

  if (!tittle || !videoId || !channelId)
    throw new ErrorFormater(
      "this fild are required tittle, videoId, channelId",
      "",
      402
    );

  const channel = await Channel.findById(channelId);

  if (!channel) throw new ErrorFormater("channel is not found ", "", 404);

  const saveVideoCreated = await SaveVideo.create({
    owner: channelId,
    tittle,
    discription: discription || "",
    videoId: [videoId],
  });

  if (!saveVideoCreated)
    throw new ErrorFormater("server error while saveing the vedio ", "", 500);

  res
    .status(200)
    .json(
      new successResponse(200, saveVideoCreated, "video saved successfully ")
    );
});
