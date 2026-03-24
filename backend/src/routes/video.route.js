import express from "express";
import { authMiddileware } from "../middlweares/auth.middlewares.js";
import { videoControll } from "../controllers/video.controller.js";
import { upload } from "../middlweares/multer.middlewares.js";

const videoRouter = express.Router();

videoRouter.route("/video/uplode/:_id").post(authMiddileware,upload.fields([
  {name:"video",maxcount:1},
  {name:"thumbnail",maxcount:1},
]), videoControll);

export default videoRouter;
