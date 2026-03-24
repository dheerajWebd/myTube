import express from "express";
import { upload } from "../middlweares/multer.middlewares.js";
import { register } from "../controllers/register.controller.js";
import { logInUser } from "../controllers/logIn.controller.js";
import { authMiddileware } from "../middlweares/auth.middlewares.js";
import { logOutUser } from "../controllers/logOut.controller.js";
import { getMe } from "../controllers/getUser.controller.js";
import { refreshAccessToken } from "../controllers/refreshAccessToken.controller.js";
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
UserRoute.route("/getme").get(authMiddileware,getMe);

export default UserRoute;