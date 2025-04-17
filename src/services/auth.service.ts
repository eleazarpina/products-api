import bcrypt from "bcryptjs";
import { generateAccessToken } from "../utils/auth.util";
import { HttpError } from "../utils/httpError.util";
import { UserService } from "./user.service";
import { IUser } from "../interfaces/user.interface";

const loginWithEmailAndPassword = async (email: string, password: string) => {
  
  const user = await UserService.getUserByEmail(email);

  if (!user) {    
    throw new HttpError("User not found", 400);
  }
  
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new HttpError("Incorrect Login", 400);
  }

  const token = generateAccessToken(user.email, user.id);

  return token;
};

const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const newUser = await UserService.createUserWithEmailAndPassword(
    email,
    password
  );

  const token = generateAccessToken(newUser.email, newUser.id);

  return token;
};

export const authService = {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
};
