import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const jwtSecret = process.env.JWT_SECRET || 'secret';



declare module "express-serve-static-core" {
  interface Request {
    email?: string;
    uid?: string;
  }
}

export const verifyToken = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
 
  const authHeader = req.headers.authorization;
  
  if ( !authHeader ) {
    res.status( 401 ).json({
      error: 'No Bearer Header',
    });
    return;
  }

  const token = authHeader.split( ' ' )[1];

  try {
    const payload = jwt.verify( token, jwtSecret );
    
    req.email = payload.email;
    req.uid = payload.uid;
    
    next();
  } catch (error) {
    
    res.status( 401 ).json({ error: 'Invalid Token' })
  }
};

