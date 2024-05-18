import GroupService from "../services/groups.service.js";
import { StatusCodes } from 'http-status-codes';
import { NotFoundException, ConflictException } from '../validations/groups.validations.js';

const groupService = GroupService();

export const getAllGroupsController = async (req, res) => {
  try {
    const groups = await groupService.getAll();
    res.status(StatusCodes.OK).json(groups);
  } catch (error) {
    console.error('Failed to get groups:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }
};

export const getByIdGroupsController = async (req, res) => {
  try {
    const group = await groupService.getById(req.params.id);
    res.status(StatusCodes.OK).json(group);
  } catch (error) {
    if (error instanceof NotFoundException) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
    console.error(`Failed to get group with id ${req.params.id}:`, error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }
};

export const createGroupsController = async (req, res) => {
  const { ownerUserId, name, color } = req.body;
  try {
      const newGroup = await groupService.create({ ownerUserId, name, color });
      res.status(StatusCodes.CREATED).json(newGroup);
  } catch (error) {
      console.error('Failed to create group:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message || "Internal server error" });
  }
};


export const editByIdGroupsController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGroup = await groupService.editById(id, req.body);
    res.status(StatusCodes.OK).json(updatedGroup);
  } catch (error) {
    if (error instanceof NotFoundException) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
    console.error(`Failed to update group with id ${id}:`, error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }
};

export const removeByIdGroupsController = async (req, res) => {
  try {
    const { id } = req.params;
    await groupService.removeById(id);
    res.status(StatusCodes.OK).json({ message: 'Group deleted successfully' });
  } catch (error) {
    if (error instanceof NotFoundException) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
    console.error(`Failed to remove group with id ${id}:`, error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }
};
