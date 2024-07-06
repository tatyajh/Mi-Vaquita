import UserService from '../services/users.service.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundException, ConflictException } from '../validations/users.validations.js';

const userService = UserService();

export const getByIdUsersController = async (req, res) => {
  try {
    const user = await userService.getById(req.params.id);
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    if (error instanceof NotFoundException) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
    console.error(`Failed to get user with id ${req.params.id}:`, error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }
};

export const createUserController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await userService.create({ name, email, password });
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (error) {
    if (error instanceof ConflictException) {
      return res.status(StatusCodes.CONFLICT).json({ message: error.message });
    }
    console.error('Failed to create user:', error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(StatusCodes.OK).json(users);
  } catch (error) {
    console.error('Failed to get users:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
  }
};