import asyncHandler from "../utils/ansicHandler.js";

export const testControlers = asyncHandler(async (req, res, next) => {
  res.success(201, req.body, "Data fetched successfully");
});
