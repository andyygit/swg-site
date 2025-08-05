import express from 'express';
import { getAllProfiles, getProfile } from '../controllers/profilesController.mjs';

const router = express.Router();

router.get('/', getAllProfiles);
router.get('/:id', getProfile);

export default router;
