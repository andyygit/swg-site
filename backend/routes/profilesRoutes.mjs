import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.mjs';
import {
  getRandomProfiles,
  getProfile,
} from '../controllers/profilesController.mjs';

const router = express.Router();

router.get('/', verifyToken, getRandomProfiles);
router.get('/:id', verifyToken, getProfile);

export default router;
