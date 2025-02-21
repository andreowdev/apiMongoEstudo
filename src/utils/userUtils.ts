import  bcrypt  from 'bcrypt';

export function validateUserInput(name: string, password: string) {
    if (!name || !password) {
      throw new Error("Nome e senha são obrigatórios");
    }
  }
  
  export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  