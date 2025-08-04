import express from 'express';
import { register, login } from '../controllers/authController.mjs';

const router = express.Router();

router.post('/register', register);
router.delete('/login', login);

export default router;
