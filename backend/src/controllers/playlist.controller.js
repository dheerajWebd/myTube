import asyncHandler from "../utils/ansicHandler.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";

export const PlaylistController = asyncHandler(async (req, res, next) => {
  const user = req?.user;
  if (!user) throw new ErrorFormater("unathorised requested plz login");
  const { tittle, discription, vedioId } = req.body;
  console.log("dkddk");
});
