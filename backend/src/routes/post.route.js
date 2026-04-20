import express from "express";
import { authMiddileware } from "../middlewares/auth.middlewares.js";
import { postCommentController } from "../controllers/postComment.controller.js";
import {
  deletepostController,
  editpostController,
  getpostController,
  postController,
} from "../controllers/post.controller.js";

const postRouter = express.Router();
postRouter.use(authMiddileware);
postRouter
  .route("/createpost")
  .post(postController)
  .put(editpostController)
  .delete(deletepostController)
  .get(getpostController);

postRouter.route("/postcomment").post(postCommentController);
// .put(editcommentController)
// .delete(deletedcommentController);

export default postRouter;
