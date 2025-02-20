import { User } from './user';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
}
