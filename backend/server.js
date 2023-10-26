import express from "express";
import cors from "cors";
import userController from "./controller/user.controller.js";

const app = express();
app.use(cors());
app.use("/api", [userController]);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
