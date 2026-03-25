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
// echo "# myTube" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dheerajWebd/myTube.git
// git push -u origin main