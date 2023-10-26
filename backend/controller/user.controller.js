import express from "express";
import { getUsers, getSummedAge, getUsersIncludingApplications } from "../service/user.service.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  res.json(await getUsers());
});

router.get("/users/summedAge", (req, res) => {
  res.json(getSummedAge());
});

router.get("/users/includeApplications", async (req, res) => {
  res.json(getUsersIncludingApplications());
});

export default router;
