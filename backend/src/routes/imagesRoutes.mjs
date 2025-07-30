import express from 'express';
import multer from 'multer';
import { deleteImage, uploadImage } from '../controllers/imagesController.mjs';
// user!!!!!!!!!!!!!!!!!!!!!!!!
const username = 'cinevaundeva';

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${username}-${uniqueSuffix}.jpg`);
  },
});
const upload = multer({ storage: storage });

// "file" name must be the name from key name in the client request payload
router.post('/upload', upload.single('file'), uploadImage);
router.delete('/delete/:id', deleteImage);

export default router;
