import express from "express";
import { authMiddileware } from "../middlweares/auth.middlewares.js";
import {
  deleteVideo,
  editThumbnail,
  editVideos,
  videoControll,
} from "../controllers/video.controller.js";
import { upload } from "../middlweares/multer.middlewares.js";
import { CommentController } from "../controllers/comment.controller.js";
import { saveVideoController } from "../controllers/savevideo.controller.js";

const videoRouter = express.Router();
videoRouter.use(authMiddileware);
videoRouter
  .route("/video/uplode/:_id")
  .post(
    upload.fields([
      { name: "video", maxcount: 1 },
      { name: "thumbnail", maxcount: 1 },
    ]),
    videoControll
  )
  .put(editVideos)
  .delete(deleteVideo);
videoRouter
  .route("/video/edit_thumbnail")
  .put(upload.single("thumbnail"), editThumbnail);
videoRouter.route("/video/comment").post(CommentController);
videoRouter.route("/video/save_video").post(saveVideoController);

export default videoRouter;
