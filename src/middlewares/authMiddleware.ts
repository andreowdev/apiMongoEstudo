import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "secreto"; 

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "Token não fornecido" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token inválido" });

    (req as any).user = decoded;
    next();
  });
}
