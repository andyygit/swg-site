import express from 'express';
import { deleteImage, uploadImage } from '../controllers/imagesController.mjs';

const router = express.Router();

router.post('/upload', uploadImage);
router.delete('/delete/:id', deleteImage);

export default router;
