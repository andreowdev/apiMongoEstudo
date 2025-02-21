// server.ts
import express from 'express';
import userRoutes from './routes/userRoutes';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRoutes);

app.listen(3001, () => {
  console.log('Server rodando na porta 3001');
});
