// routes/userRoutes.ts
import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { loginController } from '../controllers/authController';
const router = Router();
const userController = new UserController(); // Instanciando o controlador

// Rota para criar um usuário
router.post('/users', userController.createUser);
router.post('/login', loginController)


export default router;
