import { Router } from 'express';
import { getUsers, createUser, getUserByEmail } from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.get('/email', getUserByEmail);
router.post('/', createUser);

export default router;
