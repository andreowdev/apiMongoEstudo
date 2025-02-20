import { CreateUser } from './createUser';
import { UserRepository } from '../../domain/userRepository';
import { User } from '../../domain/user';
import { GetUsers } from './getUsers';  // Importando o caso de uso para buscar usuários

export class UserService {
  private createUserUseCase: CreateUser;
  private getUsersUseCase: GetUsers; // A variável para o caso de uso de obter usuários

  constructor(userRepository: UserRepository) {
    this.createUserUseCase = new CreateUser(userRepository);
    this.getUsersUseCase = new GetUsers(userRepository); // Inicializando o caso de uso de obter usuários
  }

  async createUser(name: string, password: string): Promise<User> {
    return this.createUserUseCase.execute(name,password);
  }

  async getUsers(): Promise<User[]> {  // Método para chamar o caso de uso de obter usuários
    return this.getUsersUseCase.execute();
  }
}
