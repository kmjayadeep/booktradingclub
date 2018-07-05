import jwt from "jsonwebtoken";
import config from '../config';
import User from '../models/User';

export async function validateAuthHeaders(req, res, next) {
  let token = req.cookies.token;
  const auth = req.headers.authorization;
  //use headers token if available and ignore token from cookies
  if (!token || auth) {
    if (auth && auth.split(' ')[0] == 'Bearer' && auth.split(' ').length == 2)
      token = auth.split(' ')[1];
    else
      return next();
  }
  //got token
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    const { userId, iat } = payload;
    const user = await User.findById(userId);
    //make user accessible
    req.user = user;
  } catch (err) {
    console.log('Wrong token or invalid user');
    return next();
  }
  next();
}

export function requiresAuth(req, res, next) {
  if (req.user)
    return next();
  return res.status(401).json({
    message: "Not logged in"
  });
}