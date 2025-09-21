import { executePreparedQuery } from '../config/db/connect.mjs';

export const getLocation = async (req, res) => {
  const { keyword1, keyword2 } = req.body;
  if (keyword2.length > 0) {
    const rows = await executePreparedQuery(
      'SELECT `id`, `city`, `county` FROM `location` where `city` LIKE ? AND `county` LIKE ?',
      [`%${keyword1}%`, `%${keyword2}%`]
    );
    res.status(200).json({ message: rows });
  } else {
    const rows = await executePreparedQuery(
      'SELECT `id`, `city`, `county` FROM `location` where `city` LIKE ? LIMIT 20',
      [`%${keyword1}%`]
    );
    res.status(200).json({ message: rows });
  }
};
