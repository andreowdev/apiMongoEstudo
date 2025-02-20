import { UserRepository } from '../../domain/userRepository';
import { User } from '../../domain/user';

export class GetUsers {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAllUsers();  // Chama o método para buscar os usuários do repositório
  }
}
