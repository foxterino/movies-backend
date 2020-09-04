import md5 from 'md5';
import jwt from 'jsonwebtoken';
import { UserModel, PASSWORD_MIN_LENGTH } from '../models/UserModel';
import config from '../config';

const userMapper = userData => {
  const { password, ...rest } = userData;

  return rest;
};

const generateToken = ({ id }) => {
  const data = { id };
  const { jwtSecret } = config(process.env.NODE_ENV);

  return jwt.sign(data, jwtSecret);
};

export class AuthService {
  static async signUp(userData) {
    const { password } = userData;
    const hashedPassword =
      password.length >= PASSWORD_MIN_LENGTH ? md5(password) : '';

    const userRecord = await UserModel.createUser({
      ...userData,
      password: hashedPassword,
    });

    const token = generateToken(userRecord);
    const user = userMapper(userRecord);

    return { user, token };
  }

  static async signIn(userData) {
    const hashedPassword = md5(userData.password);

    const userRecord = await UserModel.findUser({
      ...userData,
      password: hashedPassword,
    });

    const token = generateToken(userRecord);
    const user = userMapper(userRecord);

    return { user, token };
  }
}
