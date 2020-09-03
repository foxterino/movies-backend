import jwt from 'koa-jwt';
import config from '../config';

const getTokenFromCookies = req => req.cookies.get('token') || null;

export const isAuth = jwt({
  secret: config(process.env.NODE_ENV).jwtSecret,
  userProperty: 'token',
  getToken: getTokenFromCookies,
});
