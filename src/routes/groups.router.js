import Router from 'express-promise-router';
import {
  getAllGroupsController,
  getByIdGroupsController,
  createGroupsController,
  editByIdGroupsController,
  removeByIdGroupsController,
  addGroupParticipantsController,
  getGroupParticipantsController,
} from "../controllers/groups.controller.js";

const router = Router();

router.get("/", getAllGroupsController);
router.get("/:id", getByIdGroupsController);
router.post("/", createGroupsController);
router.put("/:id", editByIdGroupsController);
router.delete("/:id", removeByIdGroupsController);
router.post('/participants', addGroupParticipantsController);
router.get('/participants/:groupId', getGroupParticipantsController); 

export default router;
