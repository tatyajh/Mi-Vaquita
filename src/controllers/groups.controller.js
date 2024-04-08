import GroupService from "../services/groups.service.js";

const groupService = GroupService();

export const getAllGroupsController = (req, res) => {
  const groups = groupService.getAll();
  res.json(groups);
};

export const getByIdGroupsController = (req, res) => {
  const group = groupService.getById(req.params.id);

  if (!group) {
    return res
      .status(404)
      .json({ message: `Group with id ${req.params.id} does not exist` });
  }

  return res.status(200).json(group);
};

export const createGroupsController = (req, res) => {
  const newGroup = groupService.create(req.body);
  res.status(201).json(newGroup);
};

export const editByIdGroupsController = (req, res) => {
  const { id } = req.params;
  const updatedGroup = groupService.editById(req.params.id, req.body);

  if (!updatedGroup) {
    return res
      .status(404)
      .json({ message: `Group with id ${req.params.id} does not exist` });
  }

  res.json(updatedGroup);
};

export const removeByIdGroupsController = (req, res) => {
  const { id } = req.params;
  const result = groupService.removeById(id);
  if (result) {
      res.status(200).json(result);
  } else {
      res.status(404).json({ message: `Group with id ${id} does not exist` });
  }
};
