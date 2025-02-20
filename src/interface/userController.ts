import express from 'express';
import { UserService } from '../application/user/userService';
import { UserRepositoryPrisma } from '../infrastructure/prisma/userRepositoryPrisma';

const userRepository = new UserRepositoryPrisma();
const userService = new UserService(userRepository);

const router = express.Router();

router.post('/users', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await userService.createUser(name, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

export default router;
