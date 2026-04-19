import asyncHandler from "../utils/ansicHandler.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";
import { Channel } from "../models/channel.model.js";
import { Playlist } from "../models/playlist.model.js";
import successResponse from "../utils/successResponse.js";

export const PlaylistController = asyncHandler(async (req, res, next) => {
  const user = req?.user;
  if (!user)
    throw new ErrorFormater("unathorised requested plz login", "", 404);
  const { title, discription,ispublic,  videoId, channelId } = req.body;

  if (!title || !videoId || !channelId)
    throw new ErrorFormater(
      "this fild are required title, videoId, channelId",
      "",
      402
    );

  const channel = await Channel.findById(channelId);

  if (!channel) throw new ErrorFormater("channel is not found ", "", 404);

  const PlaylistCreated = await Playlist.create({
    owner: channelId,
    title,
    discription: discription || "",
    videoId: [videoId],
  });

  if (!PlaylistCreated)
    throw new ErrorFormater("server error while created playlisted ", "", 500);

  res
    .status(200)
    .json(
      new successResponse(
        200,
        PlaylistCreated,
        "palylist is created successfully "
      )
    );
});
