import express from "express";
import { authMiddileware } from "../middlweares/auth.middlewares.js";
import { channelController } from "../controllers/channel.controller.js";

export const channelRoute = express.Router();
// proteted route
channelRoute.use(authMiddileware);
channelRoute.route("/create_channel").post(channelController);
