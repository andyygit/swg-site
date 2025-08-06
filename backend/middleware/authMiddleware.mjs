import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Probleme token, authorization denied!' });
    }
    try {
      const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SALT);
      req.user = decode;
      console.log(`The decoded user is ${req.user}`);
      next();
    } catch (err) {
      res.status(400).json({ message: 'Token invalid.' });
    }
  } else {
    return res.status(401).json({ message: 'Probleme tk, lipsa header autorizare!' });
  }
};
