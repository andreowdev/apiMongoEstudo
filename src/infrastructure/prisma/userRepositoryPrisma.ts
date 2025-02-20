import { PrismaClient } from '@prisma/client';
import { User } from '../../domain/user';
import { UserRepository } from '../../domain/userRepository';

export class UserRepositoryPrisma implements UserRepository {
  private prisma = new PrismaClient();

  async createUser(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        name: user.name,
        password: user.password,
      },
    });
    return new User(createdUser.id, createdUser.name, createdUser.password);
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user ? new User(user.id, user.name, user.password) : null;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new User(user.id, user.name, user.password)); // Mapeando os dados para a entidade User
  }
}
