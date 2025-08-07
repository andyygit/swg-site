import util from 'node:util';
import multer from 'multer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { publicPath } from '../config/paths.mjs';

// user!!!!!!!!!!!!!!!!!!!!!!!!
const username = 'cinevaundeva';

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/profiles');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${username}-${uniqueSuffix}.jpg`);
  },
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

// "file" name must be the name from key name in the client request payload
let upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single('file');

upload = util.promisify(upload);

export const uploadImage = async (req, res, next) => {
  try {
    await upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return next({ status: 500, message: err.message });
      } else if (err) {
        return next({ status: 500, message: err.message });
      }
      res.status(202).json({ message: req.file });
    });
  } catch (err) {
    res.status(500).json({ message: `Nu s-a putut incarca fisierul: ${err}` });
  }
};

export const deleteImage = async (req, res) => {
  try {
    await fs.rm(path.join(publicPath, `profiles/cinevaundeva-1754458626844-36642806.jpg`));
    res.status(200).json({ message: 'Fisierul a fost sters.' });
  } catch (err) {
    res.status(500).json({ message: 'Eroare la stergerea fisierului.' });
    console.log(err);
  }
};

/**
 * @todo below 3 methods - async functions?
 */

export const viewMyProfile = (req, res) => {
  res.status(200).json({ message: 'My profile page' });
};

export const editMyProfile = (req, res) => {
  res.status(200).json({ message: 'Edit my profile page' });
};

export const updateMyProfile = (req, res) => {
  const { oras, orientare } = req.body;
  res.status(200).json({
    message: 'Profil actualizat cu succes!',
    data: {
      oras: oras,
      orientare: orientare,
    },
  });
};
