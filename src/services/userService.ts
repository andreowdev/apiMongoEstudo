import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(name: string, hashedPassword: string) {
  const user = await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
    },
  });
  return user;
}