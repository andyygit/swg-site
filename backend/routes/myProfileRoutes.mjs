import express from 'express';
import {
  viewMyProfile,
  editMyProfile,
  updateMyProfile,
  uploadImage,
  deleteImage,
} from '../controllers/myProfileController.mjs';

const router = express.Router();

router.get('/', viewMyProfile);
router.get('/edit', editMyProfile); // uploadImage, deleteImage frontend
router.put('/edit', updateMyProfile);
router.post('/upload', uploadImage);
router.delete('/delete/:filename', deleteImage);

export default router;
