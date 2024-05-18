import UserModel from '../database/users.model.js';
import bcrypt from 'bcryptjs';

const UserService = () => {
  const userModel = UserModel();

  const createUser = async ({ name, email, password }) => {
    const existingUser = await userModel.getUserByEmail(email);
    if (existingUser) {
      throw new Error('Email already exists');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.createUser({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString().slice(0, 10)
    });
    return user;
  };

  return {
    createUser,
  };
};

export default UserService;
