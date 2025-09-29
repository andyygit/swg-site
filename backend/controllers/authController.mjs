import { executePreparedQuery } from '../config/db/connect.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { publicPath } from '../config/paths.mjs';
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
  const { username, password, email, city, gender } = req.body;
  let rows = await executePreparedQuery(
    'SELECT `id`, `username` FROM `users` WHERE `username` = ?',
    [username]
  );
  if (rows.length) {
    return res.status(200).json({ message: 'Userul exista deja!' });
  }
  console.log('dupa usercheck?');
  rows = await executePreparedQuery(
    'SELECT `id`, `email` FROM `users` WHERE `email` = ?',
    [email]
  );
  if (rows.length) {
    return res
      .status(200)
      .json({ message: 'Adresa de mail es deja folosita!' });
  }
  console.log('dupa emailcheck?');
  try {
    // await fs.mkdir(path.join(publicPath, `profiles/${username}/public`), {
    //   recursive: true,
    // });
    // await fs.mkdir(path.join(publicPath, `profiles/${username}/private`));
    // res.status(201).json({
    //   message: `User inregistrat cu username ${username} si ${password} si ${password2} si ${email} si ${city} si ${gender}`,
    // });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Eroare la inregistrarea userului - ${err}` });
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
      id: 544886,
      username: username,
      role: 'admin',
      ispremium: true,
      joinDate: Date.now(),
      leaveDate: Date.now(),
      hasMessages: true,
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
