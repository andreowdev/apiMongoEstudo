import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from '@prisma/client';


const SECRET_KEY = "secreto"; 

export const prisma = new PrismaClient();

export async function loginUser(name: string, password: string) {
  const user = await prisma.user.findFirst({ where: { name } });

  if (!user) throw new Error("Usuário não encontrado");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Senha inválida");

  const token = jwt.sign({ id: user.id, name: user.name }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return { message: "Login bem-sucedido!", token };
}
