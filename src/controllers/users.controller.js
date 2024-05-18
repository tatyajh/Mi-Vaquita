import UserService from '../services/users.service.js';
import { StatusCodes } from 'http-status-codes';

const userService = UserService();

export const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await userService.createUser({ name, email, password });
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (error) {
    console.error('Failed to create user:', error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

