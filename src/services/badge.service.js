import prisma from "../config/db.js";

export const checkAndAwardBadge = async (userId) => {
  const completedTasks = await prisma.task.count({
    where: {
      goal: { userId },
      completed: true,
    },
  });

  if (completedTasks >= 10) {
    await prisma.badge.create({
      data: {
        title: "Consistency Champion 🏆",
        userId,
      },
    });
  }
};
