import { User } from "../models/user.model.js";
import asyncHandler from "../utils/ansicHandler.js";

export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
