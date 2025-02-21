import { Request, Response } from "express";
import { loginUser } from "../services/authService";

export async function loginController(req: Request, res: Response) {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ error: "Nome e senha são obrigatórios" });
  }

  try {
    const data = await loginUser(name, password);
    res.json(data);
  } catch (error) {
    res.status(401).json({ error: (error as any).message });
  }
}
