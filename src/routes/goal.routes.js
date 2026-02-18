import express from "express";
import { createGoal } from "../controllers/goal.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createGoal);

export default router;
