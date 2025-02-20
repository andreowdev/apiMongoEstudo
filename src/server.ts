import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Criar usuário
app.post("/users", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await prisma.user.create({ data: { name, password } });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
});

// Listar usuários
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3001, () => console.log("🔥 Servidor rodando na porta 3000"));
