import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
  sub: string
}

export function isAuthenticated(
  req: Request,
  res: Response, 
  next: NextFunction
  ){

  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
      ) as PayLoad;

      req.user_id = sub;

      return next();

  } catch (err) {
    return res.status(401).end()
  }
  
}