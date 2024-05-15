import GroupService from "../services/groups.service.js";

const groupService = GroupService();

export const getAllGroupsController = async (req, res) => {
  const groups = await groupService.getAll();
  res.json(groups);
};

export const getByIdGroupsController = async (req, res) => {
  const group = await groupService.getById(req.params.id);

  if (!group) {
    return res.status(404).json({ message: `Group with id ${req.params.id} does not exist` });
  }

  return res.status(200).json(group);
};

export const createGroupsController = async (req, res) => {
  const { ownerUserId, name, color } = req.body;
  const createdAt = new Date().toISOString().slice(0, 10); // Use current date for 'createdAt'

  if (!ownerUserId || !name || !color) {
      return res.status(400).json({ message: "Missing required fields" });
  }

  try {
      const newGroup = await groupService.createGroupsModel(ownerUserId, name, color, createdAt);
      res.status(201).json(newGroup);
  } catch (error) {
      console.error('Failed to create group:', error);
      res.status(500).json({ message: "Internal server error" });
  }
};

export const editByIdGroupsController = async (req, res) => {
  const { id } = req.params;
  const updatedGroup = await groupService.editById(req.params.id, req.body);

  if (!updatedGroup) {
    return res.status(404).json({ message: `Group with id ${req.params.id} does not exist` });
  }

  res.json(updatedGroup);
};

export const removeByIdGroupsController = async (req, res) => {
  const { id } = req.params;
  const result = await groupService.removeById(id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `Group with id ${id} does not exist` });
  }
};
