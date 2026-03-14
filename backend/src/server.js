import express from "express";
import data from "./data.js";
const app = express();

app.get("/api/data", (req, rec) => {
   
});

app.listen(4000 || 5000, () => {
   console.log("server is reanning ");
});

// echo "# myTube" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dheerajWebd/myTube.git
// git push -u origin main