import { app } from "../app.js";
import asyncHandler from "../utils/ansicHandler.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";

function CommentRouts() {
  app.get(
    "/kam/user",
    asyncHandler(async (req, res) => {
      throw new ErrorFormater(
        "User not available",
        ["user not available","somthings went "],
        401
      );
    })
  );
}                     
export { CommentRouts };
