import express from 'express';
import { createUser } from '../controllers/User/UserController';

const router = express.Router();

router.post('/user', createUser);

export default router;