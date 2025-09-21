import express from 'express';
import { getLocation } from '../controllers/apiController.mjs';

const router = express.Router();

router.post('/getlocation', getLocation);

export default router;
