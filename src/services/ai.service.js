import openai from "../config/openai.js";

export const generateDailyPlan = async (goal, startDate, endDate) => {
  const prompt = `
  Break the goal "${goal}" into small daily tasks 
  from ${startDate} to ${endDate}.
  
  Return JSON:
  {
    "tasks": [
      { "title": "Task 1", "dayOffset": 0 },
      { "title": "Task 2", "dayOffset": 1 }
    ]
  }
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content);
};
