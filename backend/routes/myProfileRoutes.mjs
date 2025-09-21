import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.mjs';
import {
  viewMyProfile,
  updateMyProfile,
  uploadImage,
  deleteImage,
} from '../controllers/myProfileController.mjs';

const router = express.Router();

router.get('/', verifyToken, viewMyProfile);
router.post('/edit', verifyToken, updateMyProfile); // uploadImage, deleteImage frontend
router.post('/upload', uploadImage);
router.post('/delete/:filename', verifyToken, deleteImage);

export default router;
