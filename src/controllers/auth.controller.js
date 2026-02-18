import prisma from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateTokens.js";

export const register = async (req, res) => {
  const { email, password, name } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, password: hashed, name },
  });

  res.json({
    token: generateToken(user.id),
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  res.json({
    token: generateToken(user.id),
  });
};
