import "dotenv/config";
import dbconoction from "./db/dbConection.js";
import { app } from "./app.js";
import rerponseMiddlewere from "./middlweares/rerponseMiddlewere.js";
dbconoction();

app.use(rerponseMiddlewere);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json([
    {
      success: false,
      message: err.message,
      errors: err.message || [],
    },
  ]);
  next();
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is reaning ", process.env.PORT);
});
