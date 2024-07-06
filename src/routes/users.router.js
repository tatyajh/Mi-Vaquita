import Router from 'express-promise-router';
import { createUserController, getByIdUsersController, getAllUsersController } from '../controllers/users.controller.js';

const router = Router();

router.get("/", getAllUsersController); 
router.get("/:id", getByIdUsersController);
router.post('/', createUserController);

export default router;
