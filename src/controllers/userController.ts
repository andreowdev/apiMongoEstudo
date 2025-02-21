// controllers/userController.ts
import { Request, Response } from 'express';
import { validateUserInput, hashPassword } from '../utils/userUtils';
import { createUser } from '../services/userService';


export class UserController {
  // Método para criar um usuário
  async createUser(req: Request, res: Response) {
    const { name, password } = req.body;

    try {
      // Validar entrada
      validateUserInput(name, password);

      // Criptografar a senha
      const hashedPassword = await hashPassword(password);

      // Criar usuário
      const user = await createUser(name, hashedPassword);

      // Retornar o usuário criado
      res.status(201).json(user);
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: error.message || "Erro ao criar usuário" });
    }
  }
}
