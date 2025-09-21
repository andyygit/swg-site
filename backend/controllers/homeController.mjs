import { executePreparedQuery } from '../config/db/connect.mjs';

export const getRandomProfiles = async (req, res) => {
  const rows = await executePreparedQuery(
    'SELECT * FROM `users` WHERE `username` = ? OR `email` = ?',
    ['test', 'test@test.com']
  );
  res.status(200).json({ message: rows.length });
};

// export const getRandomProfiles = async (req, res) => {
//   const rows = await executePreparedQuery(
//     'SELECT * FROM `getUsers` where `username` = ?',
//     ['userc']
//   );
//   res.status(200).json({ message: rows });
// };
