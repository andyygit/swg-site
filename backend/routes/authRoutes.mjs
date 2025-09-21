import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.mjs';
import { register, login, logout } from '../controllers/authController.mjs';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyToken, logout);

export default router;
