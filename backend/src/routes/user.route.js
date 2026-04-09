import express from "express";
import { upload } from "../middlweares/multer.middlewares.js";
import { register } from "../controllers/register.controller.js";
import { logInUser } from "../controllers/logIn.controller.js";
import { authMiddileware } from "../middlweares/auth.middlewares.js";
import { logOutUser } from "../controllers/logOut.controller.js";
import { channelProfile } from "../controllers/getUser.controller.js";
import { refreshAccessToken } from "../controllers/refreshAccessToken.controller.js";
import {
  updatepassword,
  updateProfile,
} from "../controllers/UserCURDopertions.controller.js";
import { likeControll } from "../controllers/likeVideo.controller.js";
const UserRoute = express.Router();

UserRoute.route("/register").post(
  upload.fields([
    { name: "coverImg", maxCount: 1 },
    { name: "avatar", maxCount: 1 },
  ]),
  register
);

UserRoute.route("/login").post(logInUser);

// proteted route
UserRoute.route("/logOut").post(authMiddileware, logOutUser);
UserRoute.route("/refresh/token").post(refreshAccessToken);
UserRoute.route("/change/password").post(authMiddileware, updatepassword);
UserRoute.route("/change/profile").post(
  authMiddileware,
  upload.fields([
    { name: "coverImg", maxCount: 1 },
    { name: "avatar", maxCount: 1 },
  ]),
  updateProfile
);
UserRoute.route("/channelProfile").get(authMiddileware, channelProfile);
UserRoute.route("/like").post(authMiddileware, likeControll);

export default UserRoute;
