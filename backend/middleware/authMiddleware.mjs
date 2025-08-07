import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Probleme token, authorization denied!' });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SALT, (err, decoded) => {
      if (err) {
        return res.status(400).json(err);
      }
      // console.log(decoded.role);
      res.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: 'Probleme tk, lipsa header autorizare!' });
  }
};
