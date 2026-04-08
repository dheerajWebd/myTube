import asyncHandler from "../utils/ansicHandler.js";

const likeSchema = asyncHandler(async (req, res, next) => {
  const userId = req.user;
  const { reaction } = req.body;
  
});
