import express from "express";
import cors from "cors";
import { LIMITE_DATA } from "./constent.js";
const app = express();
app.use(express.json({ limit: LIMITE_DATA }));
app.use(
  cors({
    origin: [process.env.ORIGIN_FRONTEND, "http://localhost:5173"],
    Credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: LIMITE_DATA,
  })
);

export { app };
