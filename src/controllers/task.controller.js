import prisma from "../config/db.js";
import { checkAndAwardBadge } from "../services/badge.service.js";

export const completeTask = async (req, res) => {
  const { taskId } = req.body;

  const task = await prisma.task.update({
    where: { id: taskId },
    data: { completed: true },
  });

  await checkAndAwardBadge(req.user);

  res.json(task);
};
