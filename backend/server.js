import express from "express";
import cors from "cors";
import userController from "./controller/user.controller.js";
import organizationController from "./controller/organization.controller.js";

const app = express();
app.use(cors());
app.use("/api", [userController]);
app.use("/api/organization", [organizationController]);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
