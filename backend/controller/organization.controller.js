import express from "express";
import { getOrganizationData } from "../service/organization.service.js";

const router = express.Router();

router.get("/list", async (req, res) => {
  res.json(await getOrganizationData());
});

export default router;
