import "dotenv/config";
import dbconoction from "./db/dbConection.js";
import { app } from "./app.js";
import { CommentRouts, dataRouts } from "./routes/AllRouts.js";
import ResponseRoute from "./routes/responceRoute.js";
import rerponseMiddlewere from "./middlweares/rerponseMiddlewere.js";
dbconoction();

app.use(rerponseMiddlewere);

CommentRouts();
dataRouts();
ResponseRoute();
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json([
    {
      success: false,
      message: err.message,
      errors: err.errors || [],
    },
  ]);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is reaning ", process.env.PORT);
});
