import express from 'express';
import { getRandomProfiles } from '../controllers/homeController.mjs';

const router = express.Router();

router.get('/', getRandomProfiles);

export default router;
