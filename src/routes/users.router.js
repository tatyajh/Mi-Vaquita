import Router from 'express-promise-router';
import { createUserController, getByIdUsersController } from '../controllers/users.controller.js';

const router = Router();

router.get("/:id", getByIdUsersController);
router.post('/', createUserController);

export default router;
