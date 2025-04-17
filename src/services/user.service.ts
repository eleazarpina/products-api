import bcrypt from "bcryptjs";

import { User } from "../models/user.model";
import { HttpError } from "../utils/httpError.util";
import { IUser } from "../interfaces/user.interface";

const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ where: { email } })
  return user as unknown as IUser;
};

const createUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ where: { email } })

  if (user) {
    throw new HttpError("Email already exists", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  const newUser = await User.create({ email, password: passwordHashed });

  return newUser as unknown as IUser;
};

export const UserService = {
  createUserWithEmailAndPassword,
  getUserByEmail,
};
