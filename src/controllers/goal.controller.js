import prisma from "../config/db.js";
import { generateDailyPlan } from "../services/ai.service.js";

export const createGoal = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  const goal = await prisma.goal.create({
    data: {
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      userId: req.user,
    },
  });

  const aiPlan = await generateDailyPlan(title, startDate, endDate);

  for (const task of aiPlan.tasks) {
    const due = new Date(startDate);
    due.setDate(due.getDate() + task.dayOffset);

    await prisma.task.create({
      data: {
        title: task.title,
        dueDate: due,
        goalId: goal.id,
      },
    });
  }

  res.json(goal);
};
