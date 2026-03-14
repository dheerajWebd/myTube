import User from "../models/learning/sample.model.js";
import withDbErrorHandling from "../utils/DBErrorHendaler.js";

function usersFind() {
  return withDbErrorHandling(async () => {
    return await User.find().limit(200);
  });
}

export default usersFind;
