import express from "express";
import {
  getAllGroupsController,
  getByIdGroupsController,
  createGroupsController,
  editByIdGroupsController,
  removeByIdGroupsController,
} from "../controllers/groups.controller.js";

const router = express.Router();

router.get("/", getAllGroupsController);
router.get("/:id", getByIdGroupsController);
router.post("/", createGroupsController);
router.put("/:id", editByIdGroupsController);
router.delete("/:id", removeByIdGroupsController);

export default router;
