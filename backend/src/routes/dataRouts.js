import { app } from "../app.js";
import usersFind from "../db/findData.js";
import asyncHandler from "../utils/ansicHandler.js";

function dataRouts() {
  app.get(
    "/kam/lannd",
    asyncHandler(async (req, res) => {
      const users = await usersFind();
      res.json(users);
    })
  );
}
export default dataRouts;
