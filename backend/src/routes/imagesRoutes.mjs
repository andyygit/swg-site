import express from 'express';
import multer from 'multer';
import { deleteImage, uploadImage } from '../controllers/imagesController.mjs';

const router = express.Router();
const upload = multer({ dest: 'images/' });

// "file" name must be the name from key name in payload
router.post('/upload', upload.single('file'), uploadImage);
router.delete('/delete/:id', deleteImage);

export default router;
