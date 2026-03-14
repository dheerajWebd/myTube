import { app } from "../app.js";
import { testControlers } from "../controlls/testControles.js";

function ResponseRoute() {
  app.post("/kam/test/response", testControlers);
}
export default ResponseRoute;
