import { UserRepository } from '../../domain/userRepository';
import { User } from '../../domain/user';

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User('', name, email); // O ID seria gerado no banco ou pelo Prisma
    return this.userRepository.createUser(user);
  }
}
