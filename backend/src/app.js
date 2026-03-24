import express from "express";
import cors from "cors";
import { LIMITE_DATA } from "./constent.js";
import cookieParser from "cookie-parser";
import UserRoute from "./routes/user.route.js";
import { channelRoute } from "./routes/cannel.route.js";
import videoRouter from "./routes/video.route.js";
const app = express();

app.use(cookieParser());
app.use(express.json({ limit: LIMITE_DATA }));
app.use(
  cors({
    origin: [process.env.ORIGIN_FRONTEND, "http://localhost:5173"],
    credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: LIMITE_DATA,
  })
);

app.use("/user/api/v1", UserRoute);
app.use("/channel/api/v1", channelRoute);
app.use("/video/api/v1", videoRouter);

export { app };
