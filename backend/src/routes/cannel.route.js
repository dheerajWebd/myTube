import express from "express";
import { authMiddileware } from "../middlweares/auth.middlewares.js";
import { channelController } from "../controllers/channel.controller.js";
import allMulter from "../middlweares/allMulter.middlewares.js";
import { upload } from "../middlweares/multer.middlewares.js";

export const channelRoute = express.Router();
// proteted route
channelRoute.use(authMiddileware);
channelRoute
  .route("/create_channel")
  .post(upload.single("coverImg"), channelController);
