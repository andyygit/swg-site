import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  /**
   * @todo connect to db
   * @todo check if user exists - id unique, email unique
   * @todo agree to tos
   * @todo user role default basic
   * @todo create user
   * @todo create profile path with ghost picture for m / f / couple
   */
  try {
    const { username, password, role } = req.body;
    res.status(201).json({
      message: `User inregistrat cu username ${username} si rol ${role}`,
    });
  } catch (err) {
    res.status(500).json({ message: 'Eroare la inregistrarea userului' });
  }
};

export const login = async (req, res) => {
  /**
   * @todo find user
   * @todo compare passwords bcrypt
   * @todo sign and send access token
   */
  const { username, password } = req.body;
  /**
   * await find user here - from mysql
   */
  // if (!user) {
  //   return res.status(404).json(`Utilizatorul ${username} negasit`);
  // }
  // const isMatch = await bcrypt.compare(password, user.password); // user.password from mysql
  // if (!isMatch) {
  //   return res.status(400).json('Date de logare incorecte');
  // }
  jwt.sign(
    {
      username: username,
      role: 'admin',
      ispremium: true,
    },
    process.env.ACCESS_TOKEN_SALT,
    { expiresIn: '30s' },
    (err, token) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json({ token });
    }
  );
};

export const logout = async (req, res) => {
  res.status(200).json({ message: 'User deconectat!' });
};
