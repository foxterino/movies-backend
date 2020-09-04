import jwt from 'koa-jwt';
import config from '../config';
import { TOKEN_KEY } from '../api/routes/auth';

const getTokenFromCookies = req => req.cookies.get(TOKEN_KEY) || null;

export const isAuth = () =>
  jwt({
    secret: config(process.env.NODE_ENV).jwtSecret,
    userProperty: TOKEN_KEY,
    getToken: getTokenFromCookies,
  });
