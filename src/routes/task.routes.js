import express from "express";
import { completeTask } from "../controllers/task.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/complete", protect, completeTask);

export default router;
