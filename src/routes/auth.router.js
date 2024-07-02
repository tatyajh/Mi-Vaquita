import Router from 'express-promise-router';
import { loginController } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', loginController);

export default router;
